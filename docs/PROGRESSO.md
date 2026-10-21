# Progresso da construção

Leia este arquivo antes de qualquer outra coisa numa sessão nova. Ele registra as etapas aprovadas e as decisões aprovadas nos relatórios que não estão no `CLAUDE.md` nem no `docs/PROMPTS.md`. Essas decisões vieram depois do mockup: quando discordarem dele, valem as decisões.

Atualizado em 2026-10-21.

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
| 10. SEO e compartilhamento | aprovada |
| 11. Revisão final | aprovada |

Todas as etapas do `docs/PROMPTS.md` estão aprovadas. O que falta para publicar está em `PENDENCIAS.md` (nada com `.pendente` pode ir ao ar).

Depois das etapas, rodadas de ajuste de design pedidas pelo desenvolvedor:

| Rodada | Status |
| --- | --- |
| Ajustes de design, parte 1 (hero, #sistema, emenda #sistema/#antes-depois, #autor) e troca da foto do hero desktop | aprovada |
| Ajustes de design, parte 2 (ajuste fino do H1, oferta, garantia dentro do FAQ, emendas) | aprovada |
| Rodada 3 (painel da oferta; no celular: hero, #identificacao, #sistema, escudos e emendas) e assinatura do Studio | aprovada |
| Rodada 4 (contador maior; FAQ, garantia e rodapé sem pendências do cliente) | aprovada |
| Ajuste do rodapé (altura e espaço acima dele) | aprovado |
| Prints reais e carrossel da #resultados | aprovada |
| Destaque, setas e galeria da #resultados | aprovada |
| Rastreamento sem InitiateCheckout, checkout em nova guia e efeito dos botões de compra | aprovada |
| Troca das imagens do hero (qualidade e banner novo do desktop) | aprovada |
| Troca de produto, rodada A (De Desprezado a Respeitado: textos, domínio, hero, contador) | aprovada |
| Troca de produto, rodada B (#conteudo com trilho, emenda do escudo, #oferta com o livro e quatro cadernos) | aprovada |

A regra de parada continua: uma etapa por vez, relatório no formato do `docs/PROMPTS.md`, esperar a palavra APROVADO.

## Decisões aprovadas

### Valem para a página inteira

- Os 6 botões de compra vão para o checkout: hero, virada ("Quero aprender antes"), antes e depois, oferta, fechamento e barra fixa ("Quero o Arsenal").
- Destaque prateado: peso 600 nos títulos (H1 e H2) e 500 nas frases grandes (palavras da virada, fechamento do #sistema, frase do antes e depois, frase do para quem é, frase final). Igual ao mockup.
- Nada de caixa alta com letras espaçadas em lugar nenhum da página, nem em card. Rótulo de card (o `.mlabel` do mockup no #sistema): caixa normal, 14px, peso 500, cor #8FA3BE.
- O selo de verificado do Instagram fica azul (#3897F0), como no mockup.
- `.pendente` em toda pendência da copy, inclusive nos links Termos de uso e Política de privacidade. Vale o texto da copy, sem o "Aguardando ele." do mockup. (Rodada 4: Termos de uso e Política de privacidade saíram do rodapé.)
- "+12 mil homens transformados", "milhares de homens" (#autor), garantia de 7 dias e originais maiores das fotos ficam em `PENDENCIAS.md`, seção "Confirmar antes de publicar", e NÃO recebem `.pendente` na tela.
- Fonte provisória da assinatura (Mrs Saint Delafield): pedido separado ao Google Fonts com `text=Marcello Gomes`, para baixar só essas letras. (Rodada 4: a assinatura e a fonte saíram da página.)
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
- Prints no desktop (a partir de 1024px): três colunas explícitas (`.pcol`), não `columns`, para o `--rv-atraso` (0, 5, 10svh) saber a coluna. Abaixo de 1024px, `.pcol{display:contents}` e fileira horizontal com `scroll-snap` (78% da largura no celular, 42% no tablet), na ordem coluna 1, 2, 3. (Rodada dos prints: o mosaico virou carrossel; ver abaixo.)
- Na fileira horizontal, os prints usam a linha do tempo nomeada `--prints` (`view-timeline` na fileira), porque o `view()` mediria contra a própria fileira. Ficam nítidos com a fileira a 35% da tela, contando de baixo. (Rodada dos prints: vale só no celular, na `.faixa`.)
- Cada moldura é um `<button>` com `aria-label="Abrir print N em tela cheia"`. O espaço reservado usa `<span>` (conteúdo de botão) com `.screen.pendente` e a etiqueta "print real" do mockup. Há um comentário no HTML com o modelo de `<picture>` para os prints. (Rodada dos prints: o espaço reservado saiu e o botão não tem mais `aria-label`; o nome vem do texto alternativo do print.)
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
- Assinatura provisória: `<p class="sign pendente">`, fonte Mrs Saint Delafield pedida com `text=Marcello%20Gomes`, carregada sem bloquear (`media="print"` + `onload`). (Rodada 4: saiu.)
- FAQ: + e − por `::after` com texto alternativo vazio (`content:"+" / ""`), escondidos do leitor de tela.
- Rodapé: "Termos de uso" e "Política de privacidade" são `<span class="pendente">` até existirem as páginas (viram links depois). Pendências do rodapé com `display:inline-block`, para o contorno não invadir a linha de cima. Links com 44px de altura. (Rodada 4: saíram; o rodapé tem só o texto e o Instagram.)
- Frase final e rodapé sem `.reveal`. Conferido: no fim da rolagem, botão e parágrafos do fechamento ficam nítidos (390x844, 390x664, 1440x900, 1440x760).
- Barra fixa (só até 760px): escondida por padrão (`visibility:hidden` e fora da tela); o JS põe `.visivel` quando nem o hero, nem a #oferta, nem o botão do #fechamento (`.fecho-cta`) estão na tela (um `IntersectionObserver`). Desliza em 0,35s, sem transição com movimento reduzido. Testada no toque, com o Lenis (mouse em 390px) e sem JS.
- Rodapé no celular com espaço inferior de `calc(90px + env(safe-area-inset-bottom))`: barra de 66px + 12px da borda + 12px de folga. No desktop, 120px como no mockup.

### Etapa 9: checkout e rastreamento

- O pixel 1434833234924777 NÃO dispara pelo GTM (na página antiga vinha do plugin "Meta Pixel for WordPress"). O GTM-5KX5J7J6 leva o GA4 (G-7N5TLWWSQC). Decisão: código base do pixel direto no `index.html` (PageView) e InitiateCheckout pelo `fbq` no clique de compra. Nenhuma tag de pixel no GTM. (Rodada 9: o InitiateCheckout saiu da página; o checkout da Eduzz dispara ao abrir.)
- O pixel já envia os eventos também pelo Conversions API Gateway (configurado na Meta: endpoints `…run.app` e reserva `…on.aws`). Pendência de confirmação no `PENDENCIAS.md`.
- Não mexer: `SubscribedButtonClick` (eventos automáticos do pixel, configurados na Meta) e `clique_botoes` (evento GA4 já configurado no GTM). São configurações do cliente.
- Rastreio desligado em `localhost`/`127.0.0.1` (variável `rastrear` no topo do `<head>`); `?rastreio=1` liga tudo para testar no "Testar eventos". O `rastreio` não é repassado ao checkout. Os `<noscript>` do GTM e do pixel ficam como estão (com JS desligado não há como saber o hostname).
- Repasse de parâmetros: todo `a[href^="https://chk.eduzz.com/"]` recebe os parâmetros da URL da página que ele ainda não tem (sem duplicar nem trocar).
- Clique de compra com o pixel carregado (`fbq.callMethod` existe): `preventDefault`, InitiateCheckout e navegação por `setTimeout` de 300ms, porque o pixel envia o evento ~50ms depois (agrupa e espera até 200ms) e a navegação imediata o perdia. Sem o pixel (localhost, bloqueador, rede), navega na hora. Ctrl/Cmd+clique, clique do meio e nova aba seguem normais; clique duplo gera um evento só; `pageshow` reativa os botões ao voltar pelo histórico. (Rodada 9: saiu. O clique não tem evento do pixel nem espera.)
- Testes de rastreio sempre interceptando e bloqueando `facebook.com/tr`, os endpoints do Gateway e `/g/collect`, e com user agent sem "HeadlessChrome" (o pixel descarta navegadores automatizados).

### Etapa 10: SEO e compartilhamento

- `<title>`: "Arsenal Homem Blindado: você pode aprender antes" (o H1 inteiro, com 77 caracteres, seria cortado no Google). Meta description: a subheadline.
- Open Graph e Twitter Card com o H1 inteiro como título e a subheadline como descrição. `og:url`, `og:image` e canonical com endereço absoluto em `https://arsenal-homem-blindado.com.br/`.
- `assets/img/og.jpg` (1200x630): foto do hero desktop, sombra à esquerda, rótulo "Arsenal Homem Blindado" com o escudo (aprovado) e o H1 na Geist. Gerada por `scripts/gerar-og.mjs` (puppeteer-core com o Chrome da máquina; `CHROME_PATH` se estiver em outro lugar; precisa de internet para a Geist).
- Favicons na raiz, gerados por `scripts/gerar-favicons.mjs` (sharp): `favicon.svg` (desenho de referência: escudo prateado sobre quadrado #050A14 com cantos de 14/64), `favicon-32.png`, `apple-touch-icon.png` (180, sem cantos) e `favicon.ico` (16, 32 e 48).

### Etapa 11: revisão final

- **Rastreio aceito como está** (decisão do desenvolvedor): com GTM e pixel, a Performance do Lighthouse fica em 76 a 84 e as Boas práticas em 79, mas o LCP real continua abaixo de 2,5s. Adiar o pixel faria as campanhas perderem dados. Carregar GTM e pixel depois do `load` foi testado e não melhora nem a nota nem o TBT. Números na seção "Medições de referência".
- Geist local: `assets/fonts/geist-latin.woff2` (o arquivo variável latino que o Google Fonts serve, 29 KB), `@font-face` com `font-weight: 100 900` e o `unicode-range` latino, `preload` e `font-display: swap`. Licença em `assets/fonts/OFL.txt`. Regra de fontes do `CLAUDE.md` atualizada.
- Fonte provisória da assinatura carregada pelo JS depois do evento `load` (com `<noscript>` no `<head>`): antes ela entrava cedo com prioridade máxima e disputava a rede com a primeira tela. (Rodada 4: saiu.)
- Barra fixa com `inert` quando escondida: sem isso, o link ainda recebia foco nos 0,35s em que a barra desliza para fora.
- 360px: número das estatísticas da #autor com `white-space: nowrap` (o "+12 mil" quebrava); botão do #fechamento com `text-align: left` (herdava o centro da seção quando o rótulo quebra em duas linhas).
- Revisão de textos: sem travessão, sem "lorem", sem texto em inglês visível, nenhuma frase de conteúdo fora da copy. Fora da copy, só o esperado: textos alternativos (do mockup), rótulos de acessibilidade, a etiqueta "print real" dos espaços reservados, meta tags técnicas e o título aprovado na etapa 10.
- Teclado (1280 e 390px): 27 paradas de Tab, todas com foco visível e alvo de 44px ou mais; checklist com Enter e Espaço, FAQ com Enter, lightbox com Enter e Esc (foco no X e de volta na moldura).
- Larguras 360, 390, 768, 1280 e 1440px: sem rolagem lateral, nada passando da tela, nenhum texto cortado.
- `PENDENCIAS.md` com a tabela das 11 marcações `.pendente` e o requisito de hospedagem (compressão e cache longo). (Rodada 4: 6 marcações, as molduras de print.)

### Ajustes de design, parte 1, e foto nova do hero (2026-10-20)

Pedido explícito para alterar seções aprovadas, só no desktop. O celular (até 760px) ficou idêntico: 0 pixels diferentes na página inteira em 390 e 360px, comparando antes e depois.

- Regra nova no `CLAUDE.md`: emenda entre seções não é espaço vazio (no desktop, no máximo uns 200px de vazio).
- Foto nova do hero desktop (`assets/img/hero-desktop.png`, 1672x941): biblioteca à esquerda, Marcello no terço direito. Rosto de x=1045 a 1290 e y=95 a 490; decanter e copo de x=570 a 757; abajur de x=830 a 945. Imagens regeneradas com os mesmos nomes (o preload e o srcset não mudaram); em 1440px carrega `hero-desktop-1672.avif`, 71,9 KB.
- Hero a partir de 1024px: H1 em 3 linhas, coluna de texto mais larga, bloco centrado na altura. O tablet (761 a 1023px) mantém o layout anterior. (Tamanhos do H1 e recuo revisados na parte 2.)
- Enquadramento e degradê em variáveis, uma por faixa de largura, definidas juntas no CSS do hero: `--hero-foto-pos` e `--hero-sombra-esq`.
  - Tablet: a fórmula antiga, com o rosto centrado em ~72vw.
  - 1024 a 1366px: foto presa à esquerda (rosto o mais à direita possível); recua só o necessário para o rosto ficar 24px dentro da tela.
  - Acima de 1366px: `0% 30%`.
- Degradê da esquerda em três camadas: base leve (as estantes aparecem, mais escuras), elipse atrás do bloco de texto (decanter e copo) e elipse na faixa do H1 (abajur). Contraste medido atrás de cada linha, contra o pixel mais claro do fundo (percentil 99, com o grão): subheadline 4,8:1 ou mais, H1 5,6:1 ou mais, anel do botão 7:1 ou mais, de 768 a 1920px. Sempre medir assim quando mexer no degradê.
- #sistema (a partir de 761px): o rótulo fica 120px abaixo do ponto mais alto da curva da #virada (`--curva-rotulo`). O ápice fica 132px acima do topo da seção; `display:flow-root` e margem negativa no `.wrap`.
- Emenda #sistema/#antes-depois (a partir de 761px; escondida no celular): quatro escudos de contorno (28px) deslizam e se fundem num escudo prateado de 64px com brilho; uma linha de luz de 1px desce até o rótulo "Antes e depois". Linha do tempo `--armadura` na própria emenda: fusão de `cover 10svh` a `cover 45svh`, linha de `cover 40svh` a `cover 60svh`. Só `transform` e `opacity`; estado final como padrão. `padding-bottom` da #sistema 0 e `padding-top` da #antes-depois em `--emenda-ad` (72px), que também define o comprimento da linha. Da frase ao rótulo: 189px.
- #autor a partir de 1024px: a moldura tem a altura da coluna de texto (topo no rótulo, base no pé dos números), foto por cima com `object-fit: cover` e `object-position: 50% 10%`; coluna da foto `clamp(300px, 31vw, 420px)`; `sizes` 540px. O tablet e o celular não mudaram.
- `assets/img/og.jpg` regenerada com a foto nova. H1 legível (branco 7,3:1 ou mais); a última linha, no pé do prateado, fica em 3,9:1 sobre o brilho do copo. Fica como está (decisão do desenvolvedor, rodada 4): o 3,9:1 é em texto grande, onde o mínimo é 3:1.

### Ajustes de design, parte 2 (2026-10-20)

A oferta mudou no desktop e no celular; o resto, só a partir de 761px. No celular, a página ficou idêntica até o painel da oferta.

- Hero a partir de 1024px: H1 `clamp(40px, 3.35vw, 54px)` com no máximo 14em, subheadline `clamp(18px, 1.3vw, 21px)` com no máximo 28,5em, recuo `clamp(64px, 10.5vw, 240px)`. Em 1440px: H1 com 48,2px e 580px de texto, subheadline com 18,72px e 511px (o H1 fica 14% mais largo). H1 em 3 linhas de 1024 a 1920px. Não ficou em 3,4vw com teto de 64px porque o H1 passaria de 15% mais largo que a subheadline (20% em 1440, 41% em 1920). De 1024 a 1366px, degradê próprio (elipse mais escura e recentrada): contraste de 5,3:1 ou mais.
- Emenda #para-quem/#oferta (a partir de 761px): o palco sobe por trás da frase final do #para-quem (`--palco-sobe`, `--frase-palco`), o topo da foto se dissolve só com degradê, e o rótulo e o título da oferta ficam dentro do palco, 79px acima do livro maior (`--titulo-fundo`). Foto com posição absoluta precisa de `height` explícito (`calc(100% + var(--palco-sobe))`). Contraste sobre o palco 6,0:1 ou mais.
- Painel da oferta:
  - Grade de 12 colunas a partir de 1280px: lista em 7, preço em 5, topo e base alinhados; detalhes em 4 colunas iguais com fios verticais. De 761 a 1279px, empilhado (o botão só cabe em uma linha na coluna de preço a partir de ~1250px).
  - Bloco de preço numa superfície mais clara, sem `backdrop-filter` (o painel tem `.reveal`).
- Garantia: deixou de ser seção. É um card de vidro (`div#garantia.g-card`) dentro do #faq, com selo de 96px (76px no celular) ao lado do título em tamanho de h3. A partir de 1024px: o título do FAQ e o card à esquerda, as perguntas à direita, título alinhado com a primeira pergunta. No código e no celular, o card vem antes do título do FAQ.
- #oferta, #faq e #fechamento sem fundo próprio na passagem: o brilho da oferta vai até o #faq, e o do fechamento (pseudo-elemento com `z-index:-1`) sobe por trás das últimas perguntas.
- Emenda #faq/#fechamento (a partir de 761px): o escudo fica num círculo de vidro sobre a emenda (`.fecho-selo`, igual ao do hero), com uma linha de luz. `.fecho>.wrap{position:static}` para o círculo se posicionar pela seção.
- Vazios no desktop (1280/1440): frase do #para-quem até "A oferta" 105/100px; painel até o FAQ 144px; última pergunta até o escudo do fechamento 141px.
- `docs/copy.md`: seções renumeradas (10 FAQ com a garantia, 11 Fechamento, 12 Barra fixa). `CLAUDE.md`: ordem das seções atualizada.

### Rodada 3 e assinatura do Studio (2026-10-20)

A oferta mudou no desktop e no celular; o resto, só no celular. O desktop ficou idêntico ao commit anterior até o painel da oferta (fora 7 pixels nos esboços desfocados das molduras de print).

- Painel da oferta:
  - Lista: as quatro linhas iguais, sem caixa, separadas por um fio; o Arsenal se diferencia só por "O manual central" em prata (peso 500). Nada na lista parece clicável.
  - A partir de 1280px, a lista ocupa a altura do preço: as linhas do meio crescem o dobro das pontas (`flex-grow` 1/2/2/1, primeira presa em cima e última embaixo com `align-content`), para cada fio ficar no meio do espaço entre duas linhas.
  - Detalhes: ícone em cima (16px de altura nos quatro), título em 500 e linha de apoio em `--nevoa-2`; 2 x 2 com as fileiras de mesma altura (`grid-auto-rows:1fr`). Texto em `docs/copy.md`.
  - Ordem no código e no celular: lista, preço, detalhes. O botão do preço fica alinhado à esquerda quando quebra (360px).
- Hero no celular: os dois cards em duas colunas iguais, com o ícone em cima do número (com o ícone ao lado, cada card pede ~190px e a coluna tem 168px em 390px).
- #identificacao no celular: o contador é uma barra de vidro (`.contador-barra`, último filho da `.chks`, sticky no pé da tela) e para 12px abaixo do último item. O bloco `.counter` fica só no desktop. Os dois são `aria-live`; só o visível é anunciado. Número compacto ("N" grande, "de 7" embaixo).
- Barra de compra: some também na #identificacao e no rodapé. O rodapé do celular perdeu a reserva de 90px para a barra (`calc(32px + env(safe-area-inset-bottom))`).
- #sistema no celular: o rótulo fica 70px abaixo do ponto mais alto da curva (`--curva-rotulo`; o ápice fica 69px acima do topo da seção).
- Escudos da emenda #sistema/#antes-depois:
  - Também no celular, com 3/4 do tamanho: 48x58px, pequenos de 21x25,5px, passo de 19,5px. Tamanhos em variáveis (`--arm-g`, `--arm-gh`, `--arm-p`, `--arm-ph`, `--arm-passo`, `--arm-brilho`); no desktop, 64x77 e 28x34, como antes.
  - A fusão vai do centro do grupo a 50% da altura da tela até 30% do topo; a linha desce em seguida, até 15%. `animation-range` com `cover calc(50svh + meia altura)`.
  - O shorthand `animation` zera `animation-timeline` e `animation-range`: declarar os dois depois dele.
- Emendas no celular (vazios em 360 e 390): #hero/#identificacao 71, #identificacao/#virada 130, #virada/#sistema 101 do botão até a curva e 70 dela até o rótulo, #sistema/#antes-depois 32 até os escudos e 56 deles até o rótulo, #antes-depois/#autor 90, #autor/#resultados 120 (padding de baixo da #autor 100px no celular), #resultados/#para-quem 118, #para-quem/#oferta 110, #oferta/#faq 126, #faq/#fechamento 116, #fechamento/rodapé 125.
- #para-quem/#oferta no celular: a foto da mesa aparece inteira atrás do título (os 80px de parede que ficavam cortados), com topo e laterais dissolvidos por máscara; uma luz na cor da parede (`.stage::before`) sobe até a frase. A escala da foto não muda (os livros continuam sobre a mesa).
- #faq/#fechamento: a solução do desktop vale também no celular (círculo de vidro sobre a emenda, brilho subindo); `.faq` com 144px embaixo e `.fecho` com 64px em cima no celular.
- Assinatura do Studio Alto Nível: `https://cdn.studioaltonivel.com/footer.js` com `defer` no fim do `<body>` (exceção registrada no `CLAUDE.md`). Fundo #000000 forçado a pedido do desenvolvedor (`html body #san-footer-badge`). Fora isso, a assinatura é do desenvolvedor e não se mexe nela, nem pelo CSS.

### Rodada 4 (2026-10-20)

Só no celular a barra do contador; FAQ, garantia e rodapé valem para todas as larguras. As emendas não mudaram.

- Barra do contador no celular: frase com 14px e "de 7" com 13px. A frase de 3 ou mais marcados ocupa 3 linhas em 360 e 390; as outras, 2. A barra tem a altura do maior estado (78,8px, `min-height` de 3 linhas), para não crescer por cima do item logo depois de um toque. Frase com `text-wrap: pretty` (com `balance`, as 3 linhas ficavam estreitas e sobrava um vão à direita).
- `.chk` com `scroll-margin-bottom` no celular: com Tab, o item focado fica acima da barra. Testado: sobreposição 0 depois do toque (itens 1 a 4, logo acima da barra) e com Tab (7 itens), em 360 e 390.
- FAQ: saiu "Alguém vai saber que eu comprei?" (6 perguntas, a primeira aberta). No desktop, colunas com 571 e 531px e título alinhado com a primeira pergunta.
- Garantia: sem a assinatura. A Mrs Saint Delafield saiu da página (`<noscript>` no `<head>`, CSS `.sign` e carregamento depois do `load`); a única família da página é a Geist (a Inter vem da assinatura do Studio).
- Rodapé: só "Arsenal Homem Blindado, por Marcello Gomes." e o link do Instagram.
- `.pendente`: 6, as molduras de print da #resultados. `PENDENCIAS.md` sem a assinatura, o nome na fatura e os dados legais; a política de privacidade (pixel e GA4, LGPD e revisão de anúncios da Meta) entrou em "Confirmar antes de publicar".
- `CLAUDE.md`: regra de fontes sem a exceção da manuscrita; exemplo de trecho entre colchetes trocado para `[6 a 9 prints reais tratados, a enviar]`.
- Selo do Studio: mantém o fundo #000000 (`html body #san-footer-badge`).
- og.jpg: fica como está (3,9:1 em texto grande; o mínimo é 3:1). Sugestão encerrada.

### Ajuste do rodapé (2026-10-20)

- Rodapé da página (não o selo do Studio): 24px em cima e embaixo no celular, mais `env(safe-area-inset-bottom)` (a barra de compra fica escondida no rodapé), e 32px no desktop. O fio de cima continua. Altura: 124px no celular (texto e Instagram em duas linhas; o link mantém 44px de toque) e 109px no desktop.
- Do fim do #fechamento até o fio do rodapé: 40px no celular e no desktop (`.fecho` com `padding-bottom:40px`).
- No fim da rolagem, o botão do #fechamento fica nítido (390x844, 390x664, 1440x900, 1440x760 e 1920x1080). Sem o selo (CDN fora), em 1920x1080 ele termina em 98% da revelação (0,25px de desfoque).

### Prints reais e carrossel da #resultados (2026-10-20)

- 8 prints reais em `assets/img/prints/` (`print-01` a `print-08`, na ordem), já tratados pelo desenvolvedor: o cabeçalho do Instagram vem no print, com nome e foto borrados. O conteúdo das imagens não se altera.
- `scripts/otimizar-imagens.mjs`: prints em 360, 540 e 737px (a maior versão fica na largura do original, 735 a 737px); o nome de saída não repete o "print-" (`print-01-360.avif`). Derivados de prints que não existem mais são apagados à mão de `assets/img/opt/`.
- Card: moldura de vidro escuro (`.print`, um `<button>`) com o print inteiro na altura natural (`.tela`, sem corte), `brightness(.94)` e fundo branco. As cores dos prints não mudam (o print-05 e o print-07 têm balões azul e roxo do próprio Instagram). O clique ou toque abre o print maior no lightbox.
- Acessibilidade: o botão não tem `aria-label`; o nome vem do texto alternativo do print ("Mensagem enviada ao Marcello no Instagram: ...", lista no `docs/copy.md`) mais ", abrir em tela cheia" em `.sr` (só leitor de tela).
- Celular (até 760px): fileira com scroll-snap (`.faixa`), cards com 78% da largura (270px em 390), alinhados pelo topo, só os 8 originais.
- A partir de 761px: carrossel de borda a borda (`.carrossel`, fora do `.wrap`), com máscara de 12% em cada ponta.
  - Cards de 340px, centralizados na vertical (o mais alto com 465px), com 20px de margem à direita (não `gap`): cada sequência mede exatamente 8 x 360 = 2880px.
  - A faixa tem a sequência três vezes: cópia, originais, cópia (`.copia`, com `aria-hidden="true"` e `tabindex="-1"`). A cópia da esquerda permite trazer qualquer card focado pelo teclado para a área nítida.
  - Animação CSS `carrossel` de 72s (40px/s), só `transform`, de `translateX(calc(-2880px + 12vw + 24px))` a `calc(-5760px + 12vw + 24px)`: começa com o print-01 logo depois da máscara. Loop sem emenda: um quadro e o mesmo quadro uma volta depois são idênticos.
  - Pausa com o mouse em cima (`hover:hover`), com um card em `:focus-visible` e fora da tela (`.parado`, por `IntersectionObserver`). No foco pelo teclado, o JS ajusta o `currentTime` da animação para o card ficar inteiro na área nítida. (Rodada seguinte: pausa só com o mouse sobre um card.)
  - `pause()`/`play()` pela Web Animations API anulam o `animation-play-state` do CSS: o JS só mexe no `currentTime`.
  - Com `prefers-reduced-motion`: sem movimento nem máscara; a faixa vira rolagem horizontal com scroll-snap, de borda a borda, só com os originais, o primeiro alinhado com a coluna do título. Na fileira que rola (celular e sem movimento), o card focado é alinhado pelo JS no próprio ponto de encaixe (sem isso, o scroll-snap obrigatório puxava a fileira de volta e o card ficava pela metade fora da tela).
  - Clique numa cópia abre o lightbox; ao fechar, o foco volta para o card original.
- Título: "O que os homens escrevem **depois de ouvir o Marcello.**".
- Emendas: #autor/#resultados com 190px no desktop (`.result` com 20px em cima) e 120px no celular; #resultados/#para-quem com 168px no desktop e 118px no celular.
- Página sem nenhum `.pendente`. `PENDENCIAS.md`: autorização das 8 conversas e do story com o rosto de uma mulher no print-07.
- Capturas de tela com `clip` no Chrome headless saem sem o carrossel mascarado: capture a tela inteira e recorte depois.

### Destaque, setas e galeria da #resultados (2026-10-20)

- O botão (`.print`) leva a revelação com desfoque; a moldura de vidro (`.moldura`), dentro dele, leva o destaque. A animação da revelação, depois de terminar, fixa `transform`, `filter` e `opacity` no próprio botão e anularia o destaque. O contorno de foco fica na moldura.
- No desktop, cada botão tem 360px: moldura de 340px e 20px de `padding-right` (o espaço entre os cards é parte do botão: o mouse não solta a pausa entre dois cards). A sequência continua com 2880px.
- Destaque (`hover: hover` e `pointer: fine`, sem movimento reduzido): o carrossel pausa só com o mouse sobre um card; o card cresce para 1.06, fica por cima (`z-index`) e ganha brilho; os outros cards na tela (`.visivel`, marcados por `IntersectionObserver`) vão a opacidade .55; transição de 250ms. O mesmo no `:focus-visible`.
- Sem desfoque nos outros cards: medido com CPU 4x passando o mouse por 6 cards, o `blur(2px)` triplicava os quadros descartados (6,4% contra 2,1% sem efeito em 1920; 2,7% contra 0,9% em 1280); só a opacidade fica em 2,9% e 1,3%. `will-change` não ajudou. O `scale(.97)` nos outros cards foi testado e descartado (resultado inconclusivo, sem garantia de ficar abaixo de +0,5 ponto).
- Medir quadros pelo compositor: no trace, `PipelineReporter` com `args.frame_reporter.state` (`STATE_DROPPED`, `STATE_PRESENTED_PARTIAL`). Nesta máquina as medidas oscilam muito (3% a 28% no mesmo cenário): alternar A/B várias vezes e comparar medianas e diferenças por par.
- Setas do carrossel (`.seta`, 52px, vidro), "Print anterior" e "Próximo print", centralizadas abaixo dele (só a partir de 761px). Cada clique anda um card mudando o `currentTime` da animação quadro a quadro (1/8 da duração, 420ms, `ease-out`); o `currentTime` dá a volta dentro de uma volta, então o loop segue sem emenda nos dois sentidos. O movimento automático pausa (`.manual`) e volta 4s depois do último clique. Sem movimento, as setas rolam a fileira um card (`scrollBy`).
- Galeria (`<dialog class="lightbox">`):
  - Abre no print clicado (a cópia abre o original). Print até 86svh no desktop, com anterior e próximo nas laterais e o contador embaixo; no celular, na largura da tela, com os botões embaixo e o contador entre eles.
  - Navega com os botões, com ← → e, no toque, deslizando (pointer events, `touch-action: pan-y` no print). Dá a volta do 8 para o 1 e do 1 para o 8. Pré-carrega o anterior e o próximo (cópias do `<picture>` em `.lb-pre`, oculto, com a mesma escolha de formato).
  - Troca com transição de opacidade de 150ms; sem movimento, direta.
  - Contador "N de 8" em `aria-live`. O Tab circula só pelos botões da galeria (o `<dialog>` nativo deixava o foco sair antes de voltar). Ao fechar, o foco volta para o card do print aberto; na fileira que rola, o card é alinhado.
  - O carrossel pausa com a galeria aberta (`html:has(dialog[open])`) e o Lenis para.

### Rastreamento, checkout em nova guia e efeito dos botões de compra (2026-10-20)

- A gestora confirmou: o checkout da Eduzz dispara o InitiateCheckout ao abrir; o Conversions API Gateway está ativo e deduplicando; o pixel está no produto da Eduzz (ID e token da API de Conversões). A página não dispara InitiateCheckout: saíram o evento no clique, a espera de 300ms, o teste do `fbq.callMethod`, a proteção de clique duplo e o reset no `pageshow`. Ficam o PageView, o GTM (o `clique_botoes` do GA4 vem do contêiner) e o repasse de parâmetros. Testado com os envios bloqueados: no clique, o pixel só manda o `SubscribedButtonClick` automático da Meta.
- Botões de compra (os 5 `.cta` e o da barra fixa) com `target="_blank" rel="noopener"` (sem `noreferrer`: a Eduzz recebe a origem). No toque (`pointer: coarse`), o JS tira o `target` e o checkout abre na mesma guia (o navegador interno do Instagram lida mal com nova guia). Clique do meio e Ctrl+clique seguem nativos, com os parâmetros.
- Efeito dos botões de compra:
  - Hover (`hover: hover` e `pointer: fine`) e `:focus-visible`: o reflexo passa uma vez na hora (`sheen-agora`, 0,75s); o anel (`.cta-ring`, por `:has(.cta:hover)`) sobe 2px e ganha brilho embaixo; o prateado clareia por uma camada branca em `.cta::before` (atrás do texto, com `isolation: isolate` no `.cta`), porque degradê não faz transição; a seta sai pela direita do círculo (`overflow: clip`) e volta pela esquerda (`seta-passa`, 0,55s). Transição de 300ms com `cubic-bezier(.2,.8,.2,1)`.
  - `:active`, em todos os aparelhos: o anel vai a `scale(.98)` e perde brilho (120ms); o botão da barra fixa também encolhe. Um ouvinte de `touchstart` vazio (passivo) no documento faz o Safari do iPhone e o navegador interno do Instagram aplicarem o `:active`.
  - Sem movimento: só o clareamento e o brilho mudam.
- `docs/PROMPTS.md`, etapa 9: o pixel ficou "com PageView, sem InitiateCheckout no clique".

### Troca das imagens do hero (2026-10-21)

- Originais novos, a pedido da cliente: `hero-mobile.png` com 1882x3344 (a mesma foto, ampliada) e `hero-desktop.png` com 4562x2566, um banner feito a partir da foto do celular, ampliada para os lados. Regra no `CLAUDE.md`: as duas versões usam a mesma foto do Marcello.
- Na foto do desktop: rosto (cabelo à barba, com as orelhas) de x=2835 a 3390 e y=380 a 1220, centro em x=3112; lanternas acesas de x=1290 a 2370 e y=410 a 780 (atrás da coluna de texto).
- Qualidade só do hero (perfil `HERO` no `scripts/otimizar-imagens.mjs`): AVIF 68 em 10 bits (topo da faixa 62 a 68 pedida; medido antes: o 1290 do celular vai de 65 KB em 62 a 85 KB em 68), WebP 82 e JPG 82 (antes 84, a pedido). O retrato do autor continua no perfil `RETRATO`.
- Larguras: celular 640, 828, 1080 e 1290; desktop 1280, 1600, 1920, 2560 e 3200. Os derivados antigos (480, 720, 941, 960 e 1672) foram apagados.
- `sizes` do celular: `max(100vw, 56.3svh)` (a foto é cortada pela altura e aparece mais larga que a tela). Desktop sem mudança (`max(100vw, clamp(1137px, 177.7svh, 1635px))`, a proporção é a mesma). Preload com as mesmas larguras e `sizes`; o hero é baixado uma vez só.
- Pesos: 390px com densidade 3 carrega `hero-mobile-1290.avif` (84,9 KB) e a primeira tela tem 244 KB sem o rastreio; 1440px carrega `hero-desktop-1600.avif` (42,3 KB) com densidade 1 e `hero-desktop-3200.avif` (117,5 KB) com densidade 2.
- Enquadramento do desktop pela altura real do hero: `.hero-bg` é contêiner de tamanho (`container-type: size`) e as fórmulas usam `cqw`/`cqh`. Antes usavam `--hero-h` (a altura mínima): em 800x640 o texto deixava o hero com 788px e o rosto passava da borda direita. Tablet: rosto centrado em 72cqw (`72cqw - 121.3cqh`); 1024 a 1366px: rosto 24px dentro da tela (`100cqw - 24px - 132.1cqh`).
- Degradê do tablet mais escuro entre 30% e 52% da largura (o canto da poltrona, com reflexo, fica atrás do fim do H1; antes 2,81:1). A partir de 1024px o degradê não mudou: as lanternas ficam esmaecidas atrás do H1 com contraste de sobra.
- Medido (percentil 99 do fundo, com o grão; trecho prateado pela cor #9FB2CB):

| Tela | H1 | Subheadline | Cards (legenda) | Rosto até a borda direita | Texto até o rosto |
| --- | --- | --- | --- | --- | --- |
| 768x1024 | 5,27:1 | 9,24:1 | 7,12:1 | 116px | 112px |
| 800x640 | 5,02:1 | 8,70:1 | 7,24:1 | 139px | 135px |
| 1024x768 | 5,08:1 | 9,77:1 | 7,18:1 | 24px | 166px |
| 1280x720 | 5,98:1 | 10,04:1 | 7,20:1 | 329px | 61px |
| 1280x800 | 7,34:1 | 10,04:1 | 7,20:1 | 223px | 149px |
| 1440x900 | 8,09:1 | 10,00:1 | 7,24:1 | 251px | 168px |
| 1920x1080 | 8,01:1 | 10,04:1 | 7,18:1 | 493px | 236px |

- Celular: mesmo layout (H1, subheadline, botão e cards nas mesmas posições); só a imagem mudou.
- `og.jpg` regenerada com a foto nova: contraste mínimo de 8,94:1 (antes 3,9:1). `scripts/gerar-og.mjs` agora reduz a foto a 2400px antes de embutir (o PNG de 12,7 MB estourava o tempo do Chrome) e usa a Geist local (não precisa mais de internet).
- Nesta máquina, `npm install --prefix scripts` e `npm run ... --prefix scripts` ignoram o `--prefix`: rode `npm install` dentro de `scripts/` e os scripts com `node scripts/<script>.mjs`.

### Troca de produto, rodada A (2026-10-21)

O Arsenal Homem Blindado (quatro manuais) deu lugar ao De Desprezado a Respeitado (um livro). `docs/copy.md` substituído pelo cliente; arte da capa nova em `assets/img/capa-desprezado.jpg`. A rodada A trocou textos, domínio e o que não muda de formato; #sistema e #oferta ficaram para a rodada B.

- Copy nova, palavra por palavra, em hero, #identificacao, #virada, #antes-depois, #autor, #resultados, #para-quem, #faq (com o card da garantia), #fechamento, rodapé e barra fixa. Colunas da #antes-depois: "Desprezado" e "Respeitado".
- Domínio `https://nunca-mais-seja-desprezado.com.br/` em canonical, `og:url`, `og:image` e `twitter:image`. Title, description e tags de compartilhamento do topo do `docs/copy.md`.
- Hero, H1 de três frases (125 letras):
  - A partir de 1024px: no máximo 16em e `clamp(36px, 2.8vw, 44px)`. 4 linhas de 1024 a 1920px; razão para a subheadline de 1,05 a 1,13 (regra de no máximo ~15%). A subheadline fica em 5 linhas.
  - Tablet: `clamp(30px, 3.9vw, 38px)` e coluna com 41vw (6 linhas; antes, 10 linhas em 768px).
  - Celular: `min(32px, 8.6vw, 3.8svh)` (até 699px de altura, `min(30px, 8.2vw, 3.8svh)`; até 680px, `min(26px, 7.2vw)`), no máximo 6 linhas, botão na primeira tela. O `svh` faz o H1 acompanhar a altura: com faixas fixas, de 700 a 780px de altura o H1 subia sobre a barba.
  - Foto do celular mais alta: `object-position: 50% -6svh` (até 699px de altura, `-10svh`, e subheadline com 16px). A faixa que sobra embaixo fica sob o degradê opaco.
  - Sombra presa ao H1 (`.hero .h1::before`, degradê radial `rgba(1,5,15,.5)` de 50% a 100%, `z-index:-1` com `isolation`): no desktop, as lanternas atrás do H1 em janelas baixas (1280x650, 1366x650, 1536x730) derrubavam a linha prateada para 4,2:1; no celular, as mãos e o relógio. Como acompanha o texto, vale em qualquer tamanho.
  - Medido (H1, mínimo da linha prateada): 1280x800 8,93:1, 1440x900 8,98:1, 1920x1080 9,28:1, 1024x640 5,19:1; celular de 360x640 a 430x932, 4,87:1 ou mais, sempre abaixo da barba (de 6 a 172px; 360x640: 33px; 375x667: 52px). Coordenadas do rosto na foto do celular (1882x3344): x 680 a 1220, y 380 a 1220.
- Contador da #identificacao: o desktop (`.counter`) mostra a frase inteira. No celular, a barra mostra só a primeira frase do estado de 3 ou mais, e o restante aparece logo abaixo do último item (`.chk-resto`, `aria-live`, só muda quando o estado muda). Vazio, o `.chk-resto` anula o próprio gap (`margin-bottom:-12px`), e a barra continua parando 12px abaixo do último item. Barra com a altura de 2 linhas (66px, era 79).
- Card da garantia: os dois textos novos com o mesmo estilo (a regra `.g-destaque` saiu).
- Frase grande da #para-quem com 23ch no desktop (4 linhas; com 18ch eram 5). Emenda com a oferta igual (99 a 114px).
- Barra fixa: nome em 12,5px com `text-wrap: balance`, botão com 14px de recuo e espaço de 10px. "De Desprezado a Respeitado" em uma linha a partir de 390px.
- `og.jpg` com o H1 inteiro (44px, coluna de 580px, 5 linhas) e o rótulo "De Desprezado a Respeitado"; contraste mínimo 9,14:1.
- `CLAUDE.md` (produto, domínio, ordem das seções, checkout provisório) e `PENDENCIAS.md` (checkout e pixel do produto novo) atualizados.

### Troca de produto, rodada B (2026-10-21)

- #sistema virou #conteudo (âncora e classes `.conteudo`). Os cards dos manuais, as cenas e todos os originais e derivados do produto antigo (`cena-*`, `capa-arsenal/traicao/honra/iluda`) foram apagados. `docs/PROMPTS.md` ganhou no topo o aviso de que as etapas 4 e 7 descrevem o produto antigo; ele e o mockup ficam como histórico.
- Capa do livro (peça `.livro` > `.capa`, usada no #conteudo e na oferta): arte `capa-desprezado` (originais em JPG, o script aceita png ou jpg; derivados 360, 540, 800 e 1080, perfil de retrato) com o texto real em cqw: título embaixo à esquerda (300 com o final em 600 prateado), autor embaixo dele, frase na coluna direita na altura dos olhos (postura, valor e respeito em 500, cor `--gelo`, escurecimento à direita da arte: 5,5:1 ou mais). A frase some com a capa abaixo de 300px de largura (`@container`).
- #conteudo:
  - Celular: capa centrada com `min(62vw, 300px)`, lista embaixo. A partir de 761px: capa em 5 de 12 colunas com `--capa-l: clamp(220px, 27vw, 400px)`, lista nas 7 restantes, topos alinhados; capa sticky centrada na altura da tela, `top: max(30px, 50svh - var(--capa-l) * .75)` (30px na caixa porque a perspectiva levanta a borda ~5px: a capa visível fica a 24px ou mais), solta quando a lista termina. Medido: centro da capa no centro da tela em 1280x720, 1440x900 e 1920x1080; 1366x600 com a capa a 25px do topo.
  - Trilho: círculo de vidro de 52px (sem backdrop-filter) com o número em 500 prateado; linha de 1px em prata a 15% em trechos por item (`li::before`, do centro do círculo ao centro do próximo; os itens não têm espaço entre si, só padding embaixo); preenchimento em prata cheia (`li::after`, `scaleY`, `view()` no próprio trecho, de `cover 50svh` a `cover calc(100% - 50svh)`: a frente acompanha o meio da tela). Círculo aceso no meio da tela: brilho (`::before`) e borda clara (`::after`), só opacity e transform, `view()` no círculo. Padrão (sem suporte ou com movimento reduzido): trilho cheio e todos acesos. O `.reveal` fica no texto de cada item (`.ap-txt`), não no trilho.
  - Embaixo: "13 capítulos · 8 dossiês · Plano de ação de 30 dias" e o botão "Quero começar minha transformação".
- Emenda #conteudo/#antes-depois: um escudo só, contorno prateado por cima de um escudo cheio que se revela de baixo para cima (`clip-path: inset`), brilho no fim e a linha descendo até o rótulo; as mesmas faixas de antes (centro a 50% da tela até 30% do topo; linha até 15%). Padrão: escudo cheio.
- #oferta:
  - Mesa: livro no centro (`--lv: clamp(150px, 21vw, 280px)` a partir de 761px, 46vw no celular, sem rotação) e quatro cadernos tipográficos (`.caderno` > `.cad-capa`): à esquerda Plano de ação de 30 dias (com o "30" grande) e Diagnóstico pessoal, à direita Diário do homem respeitado e Código de honra. Os de dentro com 62% do livro, os das pontas com 50%, girados 10° e 20°. Capa: escudo pequeno no topo, escudo grande só em contorno (prata a 6%) cortado pela borda direita, fio prateado acima do título, título (300 e final em 600 prateado), autor. Tons alternados: Diagnóstico e Diário mais azulados, Plano e Código mais próximos do preto. Celular: só Plano e Diário, metidos 5vw atrás do livro (texto do Diário à direita, "30" do Plano à esquerda).
  - A fileira inteira é uma imagem para o leitor de tela (`role="img"` com a descrição dos cinco itens).
  - Tablet (761 a 1279px): a foto da mesa tem 162% da altura do palco e começa 62% acima dele (borda de trás da mesa a 32% do palco, a da frente a 79%, como no desktop), com o topo dissolvido por máscara.
  - Painel: "O que você recebe" (6 itens, sem miniaturas); a partir de 1280px em duas colunas de 3 nas 7 colunas da esquerda, e o preço nas 5 da direita com a mesma altura (padding 24px 20px). A frase do jantar saiu. Detalhes da copy nova.
  - Emenda #para-quem/#oferta: `--frase-palco: calc(235px - var(--titulo-fundo))` (o título da oferta tem duas linhas); da frase ao rótulo, 94 a 126px.

## Pendências técnicas (do projeto, não do cliente)

- Nenhuma.

- As pendências do cliente estão em `PENDENCIAS.md`.

## Medições de referência

Resultado final, na etapa 11. Lighthouse 12 em modo celular, servidor local com gzip (como uma hospedagem), envios ao Meta, ao Gateway e ao GA4 bloqueados. "Com rastreio" é a página aberta com `?rastreio=1`, com o GTM e o pixel carregados como em produção.

| Métrica | Sem rastreio | Com GTM e pixel |
| --- | --- | --- |
| Performance | 99 | 76 a 84 |
| Acessibilidade | 100 | 100 |
| Boas práticas | 100 | 79 (cookies de terceiros e avisos do console do Meta) |
| SEO | 100 | 100 |
| LCP simulado (PageSpeed) | 1,95 a 2,03s | 3,5 a 5,0s (exagero da simulação com scripts de terceiros) |
| LCP real (Slow 4G + CPU 4x, a frio, medido no navegador) | 1,40 a 1,80s | 1,36 a 1,50s |
| Elemento do LCP | H1 | H1 |
| FCP simulado | 1,39 a 1,41s | 1,10 a 1,52s |
| CLS | 0 | 0 |
| TBT | 54 a 72ms (simulado); 20 a 58ms (DevTools) | 250 a 330ms (simulado); ~550ms (DevTools) |
| Peso total transferido | 167 KB | 737 KB |
| Primeira tela no celular | ~165 KB | ~165 KB + scripts de rastreio |

- Com o modo DevTools do Lighthouse (Slow 4G + CPU 4x reais), sem rastreio: Performance 97 a 98, LCP 1,89 a 2,03s.
- No Live Server o resultado piora porque ele não comprime: o HTML vai de ~25 KB para 98 KB e o LCP simulado sobe para 2,9s. Para medir como em produção, sirva a pasta com compressão.
- A versão 12.2.1 do Lighthouse não identifica o elemento do LCP no Chrome atual (erro no `TraceElements`); o elemento foi medido no navegador com `PerformanceObserver`.
- Rolagem com CPU 4x (etapas 3.5 a 7): 0% de quadros lentos com e sem os efeitos `.reveal`, fora a primeira rodada com o navegador "frio".
- Na máquina de desenvolvimento original as medições variavam muito entre execuções iguais. Para comparar duas versões, alterne A/B/A/B e use medianas. O Chrome headless só usa a GPU real com `--enable-gpu --use-angle=d3d11`. O audit `non-composited-animations` do Lighthouse mostra por que uma animação não vai para a GPU.

## Como rodar numa máquina nova

1. Clone o repositório e abra a pasta no VS Code.
2. Instale a extensão Live Server (Ritwick Dey) e clique em "Go Live". A página abre em http://127.0.0.1:5500/index.html. Todo caminho é relativo, então qualquer servidor estático na raiz também serve (por exemplo, `npx live-server --port=5500`).
3. Não é preciso gerar nada: `assets/img/opt/`, `assets/img/og.jpg`, os favicons e `assets/js/lenis.min.js` estão no repositório.
4. No localhost, o GTM e o pixel não carregam. Para testar o rastreio, abra com `?rastreio=1`.
5. O Node (versão 20 ou mais nova; foram usadas a 24 e a 22) só é necessário para regenerar arquivos:
   - `npm install --prefix scripts`: baixa o sharp, o Lenis e o puppeteer-core para `scripts/node_modules`, que fica fora do git.
   - `node scripts/otimizar-imagens.mjs`: gera as imagens que mudaram; `--tudo` refaz todas.
   - `npm run lenis --prefix scripts`: recopia o Lenis para `assets/js/`.
   - `npm run og --prefix scripts`: refaz `assets/img/og.jpg` (precisa do Chrome instalado e de internet).
   - `npm run favicons --prefix scripts`: refaz os favicons PNG e ICO.
