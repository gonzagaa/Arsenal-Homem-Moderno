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
| 5. Antes e depois, e quem escreveu | aprovada |
| 6. Resultados e para quem é | aprovada |
| 7. Oferta | aprovada |
| 8. Garantia, FAQ, fechamento, rodapé e barra fixa | aprovada |
| 9. Checkout e rastreamento | aprovada |
| **10. SEO e compartilhamento** | **próxima** |
| 11 | a fazer |

A regra de parada continua: uma etapa por vez, relatório no formato do `docs/PROMPTS.md`, esperar a palavra APROVADO.

## Decisões aprovadas

### Valem para a página inteira

- Os 6 botões de compra vão para o checkout: hero, virada ("Quero aprender antes"), antes e depois, oferta, fechamento e barra fixa ("Quero o Arsenal").
- Destaque prateado: peso 600 nos títulos (H1 e H2) e 500 nas frases grandes (palavras da virada, fechamento do #sistema, frase do antes e depois, frase do para quem é, frase final). Igual ao mockup.
- Nada de caixa alta com letras espaçadas em lugar nenhum da página, nem em card. Rótulo de card (o `.mlabel` do mockup no #sistema): caixa normal, 14px, peso 500, cor #8FA3BE.
- O selo de verificado do Instagram fica azul (#3897F0), como no mockup.
- `.pendente` em toda pendência da copy, inclusive nos links Termos de uso e Política de privacidade. Vale o texto da copy, sem o "Aguardando ele." do mockup.
- "+12 mil homens transformados", "milhares de homens" (#autor), garantia de 7 dias e originais maiores das fotos ficam em `PENDENCIAS.md`, seção "Confirmar antes de publicar", e NÃO recebem `.pendente` na tela.
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

### Etapa 5: antes e depois, e quem escreveu

- Pontos de quebra da página: celular até 760px, tablet de 761 a 1023px, desktop a partir de 1024px. Usar o mesmo 1024px sempre que um layout do mockup não couber no tablet.
- Antes e depois: no desktop, cada linha do "Depois" tem `--rv-atraso: 4svh` e entra logo depois da linha do "Antes" ao lado. Linhas em `<ul>`.
- Autor no tablet: foto em cima, centrada, com 340px; texto na largura do card; números lado a lado.
- Autor de 1024 a 1280px: coluna da foto, espaços e números encolhem com `clamp` (`clamp(280px, 30vw, 380px)` na foto); em 1440px, valores do mockup.
- Link do Instagram com 44px de altura de toque, margens ajustadas para o espaço visível igual ao mockup. Abre em nova aba.
- `.reveal` no card de vidro do autor (nele mesmo): 0 a 0,2% de quadros lentos com CPU 4x, com e sem o efeito.
- Luz difusa à direita na #antes-depois (atrás da coluna "Depois") e à esquerda na #autor.
- `.pendente` em bloco (`p` ou `div`) ganha `padding:14px 16px`.

### Etapa 6: resultados e para quem é

- Texto da #autor trocado pelo cliente (três parágrafos, já no `docs/copy.md`). A história pessoal deixou de ser pendência: é opcional e, se vier, entra entre o 1º e o 2º parágrafo.
- Prints no desktop (a partir de 1024px): três colunas explícitas (`.pcol`), não `columns`, para o `--rv-atraso` (0, 5, 10svh) saber a coluna. Abaixo de 1024px, `.pcol{display:contents}` e fileira horizontal com `scroll-snap` (78% da largura no celular, 42% no tablet), na ordem coluna 1, 2, 3.
- Na fileira horizontal, os prints usam a linha do tempo nomeada `--prints` (`view-timeline` na fileira), porque o `view()` mediria contra a própria fileira. Ficam nítidos com a fileira a 35% da tela, contando de baixo.
- Cada moldura é um `<button>` com `aria-label="Abrir print N em tela cheia"`. O espaço reservado usa `<span>` (conteúdo de botão) com `.screen.pendente` e a etiqueta "print real" do mockup. Há um comentário no HTML com o modelo de `<picture>` para os prints.
- Lightbox: um `<dialog>` só, que recebe uma cópia do conteúdo da moldura e pede a versão maior do `srcset` (`sizes` 520px). Fecha no X, no Esc e tocando fora; o foco volta para a moldura. `html:has(dialog[open]){overflow:hidden}` trava a página atrás também sem o Lenis (toque). Testado no desktop com o Lenis e no celular com toque.
- Para quem é: cards empilhados até 1023px (largura máxima 680px), lado a lado a partir de 1024px, com `--rv-atraso: 5svh` no "É para você se".
- Moldura de print com brilho no hover (é clicável).

### Etapa 7: oferta

- `.reveal` só na fileira de livros (`.books`), nunca na foto da mesa (o CLAUDE.md proíbe em palco de imagem), e no painel de vidro (nele mesmo).
- Palco com `overflow: clip`. Com `hidden`, o palco vira contêiner de rolagem e o `view()` dos livros não anima (regra registrada no CLAUDE.md).
- Desktop e tablet (a partir de 761px): altura do palco `clamp(380px, 50vw, 720px)`, livros `clamp(72px, 11.9vw, 172px)` e `clamp(86px, 14.17vw, 204px)` com espaço `clamp(8px, 1.8vw, 26px)`, pé dos livros a 25% do palco. O painel sobe 21% da altura do palco (-150px em 720px).
- Painel: uma coluna, centrado, com no máximo 640px no tablet; duas colunas a partir de 1024px.
- Celular (até 760px):
  - Palco de 300px; a foto mantém a escala de 380px, presa embaixo, e o corte sai da parede de cima. Pé dos livros a 70px do fundo do palco, sobre o tampo da mesa.
  - Livros em leque: `min(104px, 26vw)` nos laterais e `min(124px, 31vw)` no Arsenal; cada livro avança 22% (da largura lateral) sobre o vizinho. Camadas: Arsenal 4, vizinhos 3, "Nunca se Iluda" 2. Giros com `perspective` mantidos.
  - Capas à direita do Arsenal com título e nome alinhados à direita e recuo espelhado (10% à direita, 8% à esquerda). Capa da esquerda com recuo direito de 24% e `text-wrap: balance`. Conferido em 360 a 414px: nenhum texto coberto.
  - Painel a 12px da borda da tela (`margin-inline: -10px` dentro do `.wrap`), recuo interno de 16px, sobe 50px.
  - Botão do painel: 13,5px, espaço de 10px, anel com 4px. Uma linha a partir de 385px (folga de 4,6px em 390px); abaixo, duas linhas parelhas.
- Ponto de luz atrás do painel (`.oferta::before`; `::after` ficaria por cima do conteúdo).

### Etapa 8: garantia, FAQ, fechamento, rodapé e barra fixa

- Espaço inseparável depois de "R$" em todo valor da página (`R$&nbsp;97`), para o valor não quebrar entre linhas. Manter em texto novo.
- Garantia e FAQ empilhados no tablet (até 1023px, FAQ com no máximo 680px); duas colunas a partir de 1024px. Selo com 150px até 1023px e 200px (coluna de 220px) no desktop.
- Assinatura provisória: `<p class="sign pendente">`, fonte Mrs Saint Delafield pedida com `text=Marcello%20Gomes`, carregada sem bloquear (`media="print"` + `onload`).
- FAQ: + e − por `::after` com texto alternativo vazio (`content:"+" / ""`), escondidos do leitor de tela.
- Rodapé: "Termos de uso" e "Política de privacidade" são `<span class="pendente">` até existirem as páginas (viram links depois). Pendências do rodapé com `display:inline-block`, para o contorno não invadir a linha de cima. Links com 44px de altura.
- Frase final e rodapé sem `.reveal`. Conferido: no fim da rolagem, botão e parágrafos do fechamento ficam nítidos (390x844, 390x664, 1440x900, 1440x760).
- Barra fixa (só até 760px): escondida por padrão (`visibility:hidden` e fora da tela); o JS põe `.visivel` quando nem o hero, nem a #oferta, nem o botão do #fechamento (`.fecho-cta`) estão na tela (um `IntersectionObserver`). Desliza em 0,35s, sem transição com movimento reduzido. Testada no toque, com o Lenis (mouse em 390px) e sem JS.
- Rodapé no celular com espaço inferior de `calc(90px + env(safe-area-inset-bottom))`: barra de 66px + 12px da borda + 12px de folga. No desktop, 120px como no mockup.

### Etapa 9: checkout e rastreamento

- O pixel 1434833234924777 NÃO dispara pelo GTM (na página antiga vinha do plugin "Meta Pixel for WordPress"). O GTM-5KX5J7J6 leva o GA4 (G-7N5TLWWSQC). Decisão: código base do pixel direto no `index.html` (PageView) e InitiateCheckout pelo `fbq` no clique de compra. Nenhuma tag de pixel no GTM.
- O pixel já envia os eventos também pelo Conversions API Gateway (configurado na Meta: endpoints `…run.app` e reserva `…on.aws`). Pendência de confirmação no `PENDENCIAS.md`.
- Não mexer: `SubscribedButtonClick` (eventos automáticos do pixel, configurados na Meta) e `clique_botoes` (evento GA4 já configurado no GTM). São configurações do cliente.
- Rastreio desligado em `localhost`/`127.0.0.1` (variável `rastrear` no topo do `<head>`); `?rastreio=1` liga tudo para testar no "Testar eventos". O `rastreio` não é repassado ao checkout. Os `<noscript>` do GTM e do pixel ficam como estão (com JS desligado não há como saber o hostname).
- Repasse de parâmetros: todo `a[href^="https://chk.eduzz.com/"]` recebe os parâmetros da URL da página que ele ainda não tem (sem duplicar nem trocar).
- Clique de compra com o pixel carregado (`fbq.callMethod` existe): `preventDefault`, InitiateCheckout e navegação por `setTimeout` de 300ms, porque o pixel envia o evento ~50ms depois (agrupa e espera até 200ms) e a navegação imediata o perdia. Sem o pixel (localhost, bloqueador, rede), navega na hora. Ctrl/Cmd+clique, clique do meio e nova aba seguem normais; clique duplo gera um evento só; `pageshow` reativa os botões ao voltar pelo histórico.
- Testes de rastreio sempre interceptando e bloqueando `facebook.com/tr`, os endpoints do Gateway e `/g/collect`, e com user agent sem "HeadlessChrome" (o pixel descarta navegadores automatizados).

## Pendências técnicas (do projeto, não do cliente)

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
