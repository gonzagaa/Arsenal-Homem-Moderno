# Progresso da construção

Leia este arquivo antes de qualquer outra coisa numa sessão nova. Ele registra as etapas aprovadas e as decisões aprovadas nos relatórios que não estão no `CLAUDE.md` nem no `docs/PROMPTS.md`. Essas decisões vieram depois do mockup: quando discordarem dele, valem as decisões.

Atualizado em 2026-10-19.

## Situação

| Etapa | Status |
| --- | --- |
| 0. Leitura e plano | aprovada |
| 1. Base e imagens | aprovada |
| 2. Hero | aprovada |
| 3. Identificação e virada | aprovada |
| 3.5. Sistema de movimento | aprovada |
| 4. O sistema | aprovada |
| **5. Antes e depois, e quem escreveu** | **próxima** |
| 6 a 11 | a fazer |

A regra de parada continua: uma etapa por vez, relatório no formato do `docs/PROMPTS.md`, esperar a palavra APROVADO.

## Decisões aprovadas

### Valem para a página inteira

- Os 6 botões de compra vão para o checkout: hero, virada ("Quero aprender antes"), antes e depois, oferta, fechamento e barra fixa ("Quero o Arsenal").
- Destaque prateado: peso 600 nos títulos (H1 e H2) e 500 nas frases grandes (palavras da virada, fechamento do #sistema, frase do antes e depois, frase do para quem é, frase final). Igual ao mockup.
- Nada de caixa alta com letras espaçadas em lugar nenhum da página, nem em card. Rótulo de card (o `.mlabel` do mockup no #sistema): caixa normal, 14px, peso 500, cor #8FA3BE.
- O selo de verificado do Instagram fica azul (#3897F0), como no mockup.
- `.pendente` em toda pendência da copy, inclusive nos links Termos de uso e Política de privacidade. Vale o texto da copy, sem o "Aguardando ele." do mockup.
- "+12 mil homens transformados", garantia de 7 dias e originais maiores das fotos ficam em `PENDENCIAS.md`, seção "Confirmar antes de publicar", e NÃO recebem `.pendente` na tela.
- Fonte provisória da assinatura (Mrs Saint Delafield): pedido separado ao Google Fonts com `text=Marcello Gomes`, para baixar só essas letras.
- Itens do checklist e perguntas do FAQ com 16px no celular.
- Oferta: o Arsenal é o 2º livro a partir da esquerda (o maior). Linha de detalhes sem ponto final em cada item.
- CSS escrito a partir do celular. O desktop fica em `@media (min-width:761px)`, o mesmo ponto de quebra do mockup.
- Texto com opacidade reduzida não desce de 4,5:1 de contraste.
- Grades de duas colunas: espaço entre colunas `clamp(40px, 6vw, 80px)` (80px como no mockup a partir de ~1340px; menos no tablet).
- Toda `<section>` tem `overflow-x: clip`: as luzes difusas passam da borda, e o clip não quebra o sticky.
- Toda seção tem luz difusa, mesmo onde o mockup não tem (a #identificacao ganhou uma, à direita).
- O escudo é um SVG único no fim do `<body>` (`#escudo` e o degradê `#prata-escudo`), reaproveitado com `<use>`.
- Hover que muda a aparência vai dentro de `@media (hover:hover)`, para não ficar preso no toque.
- Aspas retas, como na copy ("tudo bem").
- Publicação: sobem só `index.html`, os favicons e `assets/`. `docs/`, `scripts/`, `CLAUDE.md` e `PENDENCIAS.md` não vão para a hospedagem.

### Etapa 1: base e imagens

- `scripts/otimizar-imagens.mjs` (sharp), com as larguras de cada imagem no topo. AVIF em 10 bits.
- Qualidade: retratos (hero e autor) AVIF 64, WebP 84, JPG 84; demais fotos AVIF 50, WebP 78, JPG 78; prints AVIF 65, WebP 88, JPG 88.
- Prints da DM: originais em `assets/img/prints/`; o script gera `assets/img/opt/print-<nome>-<largura>`.
- `viewport-fit=cover`, para o `env(safe-area-inset-*)` funcionar no iPhone. O `.wrap` respeita a área segura nas laterais.
- `body{overflow-x:clip}`.
- Grão fixo na tela (`body::after` com `position:fixed`), em WebP com fallback PNG por `image-set()`.
- Reflexo do botão animado com `transform`, não com `left`.
- `theme-color` #01050F e `color-scheme: dark`.
- `.pendente` usa `outline` (não `border`), com respiro quando está no meio de uma frase.
- Botão com `text-wrap: balance`.
- Título e description provisórios, tirados da copy. Os definitivos são da etapa 10.

### Etapa 2: hero

- Celular: a foto ocupa a primeira tela (`100svh`). H1, subheadline e botão ficam presos no pé dela, e o botão aparece sempre sem rolar (tem prioridade sobre o rosto).
- Cards de vidro abaixo do botão, logo abaixo da dobra. Só entram na primeira tela com 940px de altura ou mais. A faixa abaixo da foto (cards e emenda) continua na cor do pé da foto.
- Celular com menos de 700px de altura: H1 com 32px, 16px entre os blocos e sombra escura no trecho branco do H1 (não no prateado).
- Botão no celular: seta de 36px, recuo de 18px à esquerda e 12px à direita, gap de 12px, letter-spacing 0. Abaixo de 385px: 13,5px e gap de 10px. Cabe em uma linha a partir de 375px.
- Cards de vidro com a largura do próprio texto, quebrando em duas fileiras quando não cabem lado a lado. A legenda fica em uma linha.
- Desktop: altura `clamp(640px, 100svh, 920px)`, padding vertical de 48px, conteúdo centrado. Em telas de 920px de altura ou mais, idêntico ao mockup.
- De 761 a 1366px de largura, enquadramento contínuo: uma fórmula em `object-position` centra o rosto no espaço à direita do texto (~72vw) sem a foto descobrir a borda. Acima de 1366px, `0% 30%`, como no mockup.
- `sizes` do desktop: `max(100vw, clamp(1137px, 177.7svh, 1635px))`, porque o recorte deixa a foto mais larga que a tela. O preload usa exatamente o mesmo valor.
- CSS do Google Fonts sem bloquear a página: preload, `media="print"` com `onload` e `<noscript>`.
- O círculo de vidro da emenda é decorativo (`aria-hidden`) e não rola a página.
- **Etapa 11: hospedar a Geist localmente** (woff2, só os pesos usados, subset latino). Isso substitui a regra "Google Fonts" do `CLAUDE.md`; a licença permite.

### Etapa 3: identificação e virada

- Celular: título, lista e, por último, o contador (a intenção do `.counter{order:2}` do mockup, feita com `display:contents` na coluna lateral). Desktop: título e contador fixos à esquerda (sticky, `top:60px`).
- Sem JS aparecem "0 de 7" e a frase de 1 a 2. Com JS, a frase de 0 fica até o primeiro item marcado.
- Escudo marcado: preenchido com o degradê prateado e com um check escuro (#0A1424). O item marcado ganha o vidro aceso do mockup.
- Palavras da virada com opacidade 1 / 0,84 / 0,68 / 0,52. No mockup a última era 0,36, com 2,9:1 de contraste. "Desrespeito." em 500, prateado.

### Etapa 3.5: sistema de movimento

As regras gerais estão no `CLAUDE.md`, seção "Sistema de movimento". Aqui ficam só os detalhes de implementação.

- O Lenis liga por `any-pointer: fine`, o que inclui notebook com tela de toque e iPad com trackpad.
- Com o Lenis ativo, `html` usa `scroll-behavior:auto`; sem ele (toque), `smooth`.
- Keyframes com valores fixos, um conjunto por largura: `rv-entra` (desktop, 10px e 24px), `rv-entra-cel` (celular, 6px e 16px) e `rv-sai` (4px e opacidade 0,6). A entrada vai de `cover 0` a `cover 35svh`.
- O blur do celular não foi reduzido. O custo vem de o Chrome não levar `filter: blur` para a GPU, não do raio: 6, 3, 2 e 0px mediram igual.
- A regra "Nunca usar" do `CLAUDE.md` passou a dizer "animação de entrada fora do Sistema de movimento (fade-and-slide-up disparado por tempo, cascata com delay)". Texto confirmado.
- `assets/js/lenis.min.js` tem o aviso da licença MIT no topo. Para recopiar: `npm run lenis --prefix scripts`.

### Etapa 4: o sistema

- Tablet (761 a 1023px): os três cards do trio ficam empilhados e deitados (cena à esquerda em 2/5, dissolvendo para a direita no texto). O card largo usa colunas iguais e padding proporcional (`clamp`). A partir de 1024px, o layout do mockup (1.25fr / 1fr e trio em três colunas). É o único ponto de quebra extra da página até aqui.
- `.sec-head` e `.sec-sub` são peças reutilizáveis do cabeçalho centralizado (rótulo, título, apoio). Usar nas próximas seções que tiverem esse cabeçalho.
- Texto dos cards (`.mtext`) com 16px (o mockup tem 15,5px), pelo mínimo de corpo do `CLAUDE.md`.
- `.reveal` no card largo, mesmo com a foto: rolando a seção com CPU 4x, 0% de quadros lentos com e sem o efeito, no desktop e no celular.
- Trio no desktop com `--rv-atraso` de 0, 5 e 10svh.
- Fundo da seção de #0C1729 a #08111F e de volta a #0C1729: emenda com a curva da #virada e com a #antes-depois.

## Pendências técnicas (do projeto, não do cliente)

- A #sistema termina em #0C1729 e só emenda quando a #antes-depois (etapa 5) tiver esse fundo. Até lá aparece uma borda seca embaixo dela.
- O `favicon.ico` dá 404 até a etapa 10.
- Barra fixa (etapa 8) e lightbox dos prints (etapa 6): conferir com o Lenis ativo. O JS já para o Lenis com qualquer `<dialog>` aberto e deixa a rolagem dentro dele com o navegador.
- As pendências do cliente estão em `PENDENCIAS.md`.

## Medições de referência

Último resultado, na etapa 3.5, com Slow 4G + CPU 4x no celular:

| Métrica | Valor |
| --- | --- |
| LCP | 1,0 a 1,2s (o elemento é o H1; o Chrome trata a foto de tela cheia como fundo) |
| CLS | 0,002 |
| TBT | 30 a 110ms |
| Performance / Acessibilidade | 99 a 100 / 100 |
| Peso total | 153 KB |
| Primeira tela no celular | 125 KB (a foto `hero-mobile-941.avif` tem 42,7 KB) |
| Rolagem com CPU 4x | 1 a 4% dos quadros abaixo de 50 fps, no desktop e no celular |

- O Lighthouse padrão, que simula a rede (o mesmo do PageSpeed), dá LCP de 2,6s por causa da cadeia de fontes do Google. A Geist local na etapa 11 resolve.
- Na máquina de desenvolvimento original as medições variavam muito entre execuções iguais. Para comparar duas versões, alterne A/B/A/B e use medianas. O Chrome headless só usa a GPU real com `--enable-gpu --use-angle=d3d11`. O audit `non-composited-animations` do Lighthouse mostra por que uma animação não vai para a GPU.

## Como rodar numa máquina nova

1. Clone o repositório e abra a pasta no VS Code.
2. Instale a extensão Live Server (Ritwick Dey) e clique em "Go Live". A página abre em http://127.0.0.1:5500/index.html. Todo caminho é relativo, então qualquer servidor estático na raiz também serve (por exemplo, `npx live-server --port=5500`).
3. Não é preciso gerar nada: `assets/img/opt/` e `assets/js/lenis.min.js` estão no repositório.
4. O Node (versão 20 ou mais nova; foi usada a 24) só é necessário para regenerar arquivos:
   - `npm install --prefix scripts`: baixa o sharp e o Lenis para `scripts/node_modules`, que fica fora do git.
   - `node scripts/otimizar-imagens.mjs`: gera as imagens que mudaram; `--tudo` refaz todas.
   - `npm run lenis --prefix scripts`: recopia o Lenis para `assets/js/`.
