// Gera as versões otimizadas das imagens de assets/img em assets/img/opt:
// AVIF, WebP e JPG em cada largura, com o nome <imagem>-<largura>.<ext>.
//
// Uso, a partir da raiz do projeto:
//   npm install --prefix scripts            uma vez, para baixar o sharp
//   node scripts/otimizar-imagens.mjs       gera só o que mudou desde a última vez
//   node scripts/otimizar-imagens.mjs --tudo    refaz tudo
//
// Prints da DM: coloque os originais em assets/img/prints/ e rode de novo.
// Saem como opt/print-<nome>-<largura>.<ext>, com qualidade maior,
// porque texto borra com a compressão pensada para foto.

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
  'hero-mobile': [480, 720, 941],
  'hero-desktop': [960, 1280, 1672],
  'cena-arsenal': [480, 800, 1280],
  'cena-traicao': [480, 760, 1040],
  'cena-iluda': [480, 760, 1040],
  'cena-honra': [480, 760, 1040],
  'autor': [400, 640, 900],
  'capa-arsenal': [260, 440],
  'capa-traicao': [260, 440],
  'capa-honra': [260, 440],
  'capa-iluda': [260, 440],
  'oferta-mesa': [960, 1280, 1672],
};
const LARGURAS_PRINT = [400, 800, 1200];

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
const RETRATOS = new Set(['hero-mobile', 'hero-desktop', 'autor']);
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

async function gerar(arquivo, nome, larguras, qualidade) {
  const { mtimeMs } = await stat(arquivo);
  const meta = await sharp(arquivo).metadata();
  const { width: W, height: H } = meta.autoOrient ?? meta;
  const alvos = [...new Set(larguras.map((l) => Math.min(l, W)))];

  for (const w of alvos) {
    const linha = { arquivo: `${nome}-${w}`, dimensoes: `${w} x ${Math.round((H * w) / W)}` };
    await Promise.all(
      FORMATOS.map(async ([ext, aplicar]) => {
        const saida = path.join(DESTINO, `${nome}-${w}.${ext}`);
        if (!(await atualizado(saida, mtimeMs))) {
          const base = sharp(arquivo).autoOrient().resize({ width: w, withoutEnlargement: true });
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
  return 'print-' + path.parse(arquivo).name
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
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

for (const [nome, larguras] of Object.entries(LARGURAS)) {
  await gerar(path.join(ORIGEM, `${nome}.png`), nome, larguras, RETRATOS.has(nome) ? RETRATO : FOTO);
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
