// Gera as versões otimizadas das imagens de assets/img em assets/img/opt:
// AVIF, WebP e JPG em cada largura, com o nome <imagem>-<largura>.<ext>.
//
// Uso, a partir da raiz do projeto:
//   npm install --prefix scripts            uma vez, para baixar o sharp
//   node scripts/otimizar-imagens.mjs       gera só o que mudou desde a última vez
//   node scripts/otimizar-imagens.mjs --tudo    refaz tudo
//
// Prints da DM: coloque os originais em assets/img/prints/ e rode de novo.
// Saem como opt/print-<nome>-<largura>.<ext> (sem repetir o "print-" se o arquivo já começar assim),
// com qualidade maior, porque texto borra com a compressão pensada para foto.

import { readdir, stat, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGEM = path.join(RAIZ, 'assets', 'img');
const PRINTS = path.join(ORIGEM, 'prints');
const DESTINO = path.join(ORIGEM, 'opt');

// Larguras em px. Cada uma cobre o tamanho da imagem na tela em 1x, 2x e 3x.
// Uma largura maior que o original vira o próprio original: nunca amplia.
const LARGURAS = {
  // Hero: a foto é cortada pela altura (object-fit: cover), então aparece mais larga que a tela.
  // Celular até 1290 (iPhone com densidade 3); desktop até 3200 (1440 a 1600px com densidade 2).
  'hero-mobile': [640, 828, 1080, 1290],
  'hero-desktop': [1280, 1600, 1920, 2560, 3200],
  'autor': [400, 640, 900],
  // Capa do De Desprezado a Respeitado (original em JPG, 1600x2400): ~360px no #conteudo e ~260px na
  // oferta no desktop (2x), 62% e 46% da tela no celular (3x).
  'capa-desprezado': [360, 540, 800, 1080],
  // Capas oficiais do cliente, só para comparação (?capa=dourada / ?capa=azul): as mesmas larguras.
  'capa-oficial-dourada': [360, 540, 800, 1080],
  'capa-oficial-azul': [360, 540, 800, 1080],
  'oferta-mesa': [960, 1280, 1672],
};
// Cards da #transformacao (originais em assets/img/cards/card-0N-original.png, 1536x1024, com o texto dentro da
// arte): a arte vem com uma margem colorida irregular (6 a 21px) em volta do cartão desenhado. O recorte tira
// essa margem (medida nos originais de 22/10, mais 3px para dentro) e padroniza os quatro em 1500x990; o raio
// da moldura na página (16px) esconde os cantos. Se o cliente mandar outra arte, meça de novo.
// Larguras: ~544px na grade 2 x 2 do desktop (1x e 2x) e ~326px no celular (3x).
const CARDS = {
  'card-01': { arquivo: 'card-01-original.png', corte: { left: 19, top: 9, width: 1500, height: 990 } },
  'card-02': { arquivo: 'card-02-original.png', corte: { left: 18, top: 17, width: 1500, height: 990 } },
  'card-03': { arquivo: 'card-03-original.png', corte: { left: 19, top: 14, width: 1500, height: 990 } },
  'card-04': { arquivo: 'card-04-original.png', corte: { left: 20, top: 15, width: 1500, height: 990 } },
};
const LARGURAS_CARD = [400, 640, 960, 1280];
// Nossos cards da #transformacao, só para comparação (?cards=nossos): fotos sem texto, 1536x1024, em
// assets/img/cards/card-0N-nosso.jpg. A foto cobre o card: até 1023px o card é 4:5 e a foto aparece com ~1,9
// vez a largura do card (~610px em 390px, 3x); a partir de 1024px, 4:3 e ~1,1 vez (~570px em 1440px, 1x e 2x).
// Sem o original, o script avisa e segue.
const NOSSOS = ['card-01-nosso', 'card-02-nosso', 'card-03-nosso', 'card-04-nosso'];
const LARGURAS_NOSSO = [480, 768, 1152, 1536];
// Prints: ~250px na fileira do celular, ~350px no mosaico do desktop e até 520px no lightbox.
// Os originais têm ~737px: 737 é o teto (nunca amplia; a maior versão fica na largura do original).
const LARGURAS_PRINT = [360, 540, 737];

// AVIF em 10 bits: os degradês azul-escuros das fotos fazem faixas em 8 bits.
const FOTO = {
  avif: { quality: 50, effort: 6, bitdepth: 10 },
  webp: { quality: 78, effort: 6, smartSubsample: true },
  jpg: { quality: 78, mozjpeg: true, progressive: true },
};
// Retratos do Marcello: abaixo disso a pele, a barba e o tricô do suéter ficam lisos.
const RETRATO = {
  avif: { quality: 64, effort: 6, bitdepth: 10 },
  webp: { quality: 84, effort: 6, smartSubsample: true },
  jpg: { quality: 84, mozjpeg: true, progressive: true },
};
const RETRATOS = new Set(['autor', 'capa-desprezado', 'capa-oficial-dourada', 'capa-oficial-azul']);
// Originais que podem ainda não existir: sem o arquivo, o script avisa e segue.
const OPCIONAIS = new Set(['capa-oficial-dourada', 'capa-oficial-azul']);
// Hero: a primeira coisa que se vê. AVIF no topo da faixa 62 a 68 (o 1290 do celular fica com ~85 KB).
const HERO = {
  avif: { quality: 68, effort: 6, bitdepth: 10 },
  webp: { quality: 82, effort: 6, smartSubsample: true },
  jpg: { quality: 82, mozjpeg: true, progressive: true },
};
const HEROS = new Set(['hero-mobile', 'hero-desktop']);
// Cards: foto com títulos e uma linha de texto pequena dentro da arte; croma 4:4:4 para o texto não borrar.
const CARD = {
  avif: { quality: 58, effort: 6, chromaSubsampling: '4:4:4', bitdepth: 10 },
  webp: { quality: 82, effort: 6 },
  jpg: { quality: 82, mozjpeg: true, progressive: true },
};
const TEXTO = {
  avif: { quality: 65, effort: 6, chromaSubsampling: '4:4:4' },
  webp: { quality: 88, effort: 6 },
  jpg: { quality: 88, mozjpeg: true, progressive: true },
};

const FORMATOS = [
  ['avif', (s, q) => s.avif(q.avif)],
  ['webp', (s, q) => s.webp(q.webp)],
  ['jpg', (s, q) => s.jpeg(q.jpg)],
];

const refazerTudo = process.argv.includes('--tudo');
const relatorio = [];

async function atualizado(saida, mtimeOrigem) {
  if (refazerTudo) return false;
  try {
    return (await stat(saida)).mtimeMs >= mtimeOrigem;
  } catch {
    return false;
  }
}

async function gerar(arquivo, nome, larguras, qualidade, corte) {
  const { mtimeMs } = await stat(arquivo);
  const meta = await sharp(arquivo).metadata();
  const { width: W, height: H } = corte ?? meta.autoOrient ?? meta;
  const alvos = [...new Set(larguras.map((l) => Math.min(l, W)))];

  for (const w of alvos) {
    const linha = { arquivo: `${nome}-${w}`, dimensoes: `${w} x ${Math.round((H * w) / W)}` };
    await Promise.all(
      FORMATOS.map(async ([ext, aplicar]) => {
        const saida = path.join(DESTINO, `${nome}-${w}.${ext}`);
        if (!(await atualizado(saida, mtimeMs))) {
          let base = sharp(arquivo).autoOrient();
          if (corte) base = base.extract(corte);
          base = base.resize({ width: w, withoutEnlargement: true });
          await aplicar(base, qualidade).toFile(saida);
        }
        linha[ext] = (await stat(saida)).size;
      }),
    );
    relatorio.push(linha);
  }
}

async function gerarGrao() {
  const arquivo = path.join(ORIGEM, 'grain.png');
  const saida = path.join(DESTINO, 'grain.webp');
  if (!(await atualizado(saida, (await stat(arquivo)).mtimeMs))) {
    await sharp(arquivo).webp({ lossless: true, effort: 6 }).toFile(saida);
  }
  relatorio.push({ arquivo: 'grain', dimensoes: '180 x 180', webp: (await stat(saida)).size });
}

function nomeDoPrint(arquivo) {
  const nome = path.parse(arquivo).name
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return nome.startsWith('print-') ? nome : 'print-' + nome;
}

async function listarPrints() {
  try {
    return (await readdir(PRINTS)).filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f));
  } catch {
    return [];
  }
}

const kb = (bytes) => (bytes ? (bytes / 1024).toFixed(1).padStart(7) : '      -');

const inicio = Date.now();
await mkdir(DESTINO, { recursive: true });

// O original pode ser PNG ou JPG (a capa nova veio em JPG).
async function original(nome) {
  for (const ext of ['png', 'jpg', 'jpeg']) {
    const arq = path.join(ORIGEM, `${nome}.${ext}`);
    try { await stat(arq); return arq; } catch {}
  }
  throw new Error(`Original de ${nome} não encontrado em assets/img (png ou jpg).`);
}
for (const [nome, larguras] of Object.entries(LARGURAS)) {
  let arq;
  try { arq = await original(nome); } catch (e) {
    if (OPCIONAIS.has(nome)) { console.log(`aviso: ${nome} ainda não está em assets/img (pulado)`); continue; }
    throw e;
  }
  await gerar(arq, nome, larguras, HEROS.has(nome) ? HERO : RETRATOS.has(nome) ? RETRATO : FOTO);
}
for (const [nome, { arquivo, corte }] of Object.entries(CARDS)) {
  await gerar(path.join(ORIGEM, 'cards', arquivo), nome, LARGURAS_CARD, CARD, corte);
}
for (const nome of NOSSOS) {
  const arq = path.join(ORIGEM, 'cards', `${nome}.jpg`);
  try { await stat(arq); } catch { console.log(`aviso: cards/${nome}.jpg não encontrado (pulado)`); continue; }
  await gerar(arq, nome, LARGURAS_NOSSO, FOTO);
}
for (const arquivo of await listarPrints()) {
  await gerar(path.join(PRINTS, arquivo), nomeDoPrint(arquivo), LARGURAS_PRINT, TEXTO);
}
await gerarGrao();

console.log('\narquivo                  dimensões       AVIF KB  WebP KB   JPG KB');
for (const l of relatorio) {
  console.log(`${l.arquivo.padEnd(24)} ${l.dimensoes.padEnd(13)} ${kb(l.avif)}  ${kb(l.webp)}  ${kb(l.jpg)}`);
}
console.log(`\n${relatorio.length} itens em assets/img/opt, ${((Date.now() - inicio) / 1000).toFixed(1)} s`);
