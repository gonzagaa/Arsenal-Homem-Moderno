# Progresso da construção

Leia este arquivo antes de qualquer outra coisa numa sessão nova. Ele registra as etapas aprovadas e as decisões aprovadas nos relatórios que não estão no `CLAUDE.md` nem no `docs/PROMPTS.md`. Essas decisões vieram depois do mockup: quando discordarem dele, valem as decisões.

Atualizado em 2026-10-27.

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
| Comparação de capas por parâmetro (`?capa=dourada` e `?capa=azul`) | aprovada |
| Copy v3, rodada C1 (página curta: #transformacao, #caminho, prints na #autor, botão grande, capa dourada padrão) | aprovada |
| Rodada C2 (nossos cards da #transformacao para comparação, `?cards=nossos`) | aprovada |
| Capa oficial dourada definitiva (sai o `?capa=`) | aprovada |
| Botões em maiúsculas e variação de identidade `?tema=vibrante` | aprovada |
| H1 novo e #oferta com os três livros do método | aprovada |
| Rodada B: botões grandes em toda a página, preço em destaque e rótulo novo do hero | aprovada |
| Rodada C: consolidação da identidade oficial (antes `?tema=vibrante`) e dos nossos cards | aprovada |
| Origens de tráfego (/bio/, /sdr/, /tfg/, /story/) com checkout por rota, preparando a Netlify | aprovada |
| `.htaccess` para a hospedagem final (Hostinger) | aprovada |
| Checkouts da Eduzz por origem de tráfego | aprovada |
| Sem página na raiz: só as quatro rotas vendem, `404.html`; `_headers` da Netlify | aprovada |
| Performance (revelação sem desfoque nos blocos grandes, imagens a 2x no celular, Lenis depois do load) | aprovada |
| Página de links do Marcello na raiz do domínio (`links.html`) | aprovada |
| Página de links: textos novos do Marcello, botões menores, blocos de 188 px, caixa do Arsenal e celular do WhatsApp | aprovada |
| Página de links: número do WhatsApp do Marcello | aprovada |
| Rota nova /cht/ (checkout 39ZR122DWE) | aprovada |
| Prévia da Netlify sem os arquivos internos | aprovada |
| Variante do hero com os três livros (`?hero=livros`), para comparação | aprovada |
| Preço novo: 12x de R$ 9,83 ou R$ 95 à vista | aprovada |

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
- Publicação: hospedagem final na Hostinger do cliente, com deploy pelo Git deste repositório inteiro na raiz do domínio; o `.htaccess` responde 404 para `docs/`, `scripts/`, `node_modules/`, `.git`, os `.md`, `package*.json`, `_redirects` e os `.htaccess`. A Netlify fica só como prévia (`_redirects`).

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

### Comparação de capas por parâmetro (2026-10-21)

- Só para o cliente comparar: a capa em HTML continua sendo a padrão. `?capa=dourada` e `?capa=azul` trocam a arte do livro da #conteudo e do livro principal da #oferta pela capa oficial (`assets/img/capa-oficial-dourada.png` e `capa-oficial-azul.png`, 1024x1536, 2:3, sem corte). Qualquer outro valor é ignorado.
- Um script inline (antes do Lenis) põe a classe `.capa-oficial` nas duas capas e troca o `srcset` dos `<source>` e da `<img>`. A classe esconde o escurecimento e o texto em HTML (a imagem já traz o texto); ficam a lombada, a borda, a perspectiva, a sombra e o sticky. O texto alternativo não muda; os cadernos não mudam.
- As capas têm `loading="lazy"` e ficam abaixo da dobra: a troca acontece antes de o navegador pedir a arte padrão. Medido: com o parâmetro, só a capa oficial é baixada; sem ele, nada muda no peso.
- `LARGURAS` no script da página: 360, 540, 800 e 1024 (a maior é a largura do original; o script de otimização nunca amplia). Se trocar os originais, confira.
- `scripts/otimizar-imagens.mjs`: as duas capas com as mesmas larguras e o perfil de retrato; entram num conjunto `OPCIONAIS` (sem o original, o script avisa e segue).
- O parâmetro `capa` não vai para o checkout (tirado do repasse, como o `rastreio`).

### Copy v3, rodada C1 (2026-10-22)

O cliente reformulou a página para ficar mais curta e direta (`docs/copy.md` v3, palavra por palavra em todas as seções, no rodapé, na barra e no SEO; `og.jpg` refeita com o H1 novo, 48px, contraste mínimo de 9,1:1).

- Saíram #virada, #antes-depois e #para-quem, com o CSS e o JS que só elas usavam. Ordem nova: #hero, #transformacao, #identificacao, #caminho, #oferta, #autor (com os prints), #faq, #fechamento, rodapé e barra fixa.
- Hero: rótulo "De Desprezado a Respeitado" numa cápsula de vidro com o escudo, acima do H1. H1 em 4 linhas no desktop (36 a 44px) e nos celulares baixos (26px), 5 linhas de 390x844 em diante (32px) e no tablet. Medido: pill de 38 a 146px abaixo da barba, H1 de 93 a 208px; contraste mínimo 4,8:1 no branco e 6,5:1 no prateado no celular (com a sombra do H1), 9,1:1 ou mais no desktop. "perdê-la." não quebra no hífen e a subheadline usa `text-wrap: pretty`.
- Botão grande (`.cta--grande`, hero e fechamento): 76px de altura, texto de 18px no celular e 20px no desktop. A partir de 400px, rótulo em uma linha (`nowrap`) e o anel com `width: max-content` (no celular, `min-width: 100%`); abaixo, duas linhas. No celular, folgas menores (20px à esquerda, 10px de espaço, seta de 44px): o botão tem 353px e cabe em 400px. No tablet ele passa da coluna do hero e fica sobre o suéter, abaixo da barba.
- #transformacao: os 4 cards são a arte original do cliente (recorte de 1500x990 no `scripts/otimizar-imagens.mjs`, `CARDS`; 400 a 1280px), em moldura de vidro escuro sem `backdrop-filter`, raio de 13px no celular e 16px no desktop, texto completo no `alt`. Uma coluna no celular, 2 x 2 a partir de 761px. Baixam 76 KB (versão 640) em 1440px 1x e 194 KB (versão 1280) em 390px 3x.
- #identificacao: 5 itens, "N de 5 situações marcadas"; o texto de baixo da lista (`.chk-texto`, aria-live) é esvaziado com 0 e volta com 1 ou mais (sem JS, fica visível); destaque final sempre visível. Barra do contador no celular só com "N de 5 situações marcadas" (52px).
- #caminho: trilho com círculos de vidro "Etapa N". Horizontal a partir de 1024px (linha do tempo `--etapas` na lista: o preenchimento corre enquanto o topo da lista sobe de 80% a 40% da tela, e cada círculo acende quando o preenchimento chega e continua aceso); vertical no celular e no tablet (como era o #conteudo; três colunas no tablet teriam ~195px).
- #oferta: capa oficial dourada como padrão; `?capa=azul` e `?capa=html` (a capa em HTML) só para comparação. Painel com "Entrega principal" (2 itens, título em prata) e "Materiais complementares inclusos" (4 itens), títulos dos grupos com o escudo; a partir de 1280px, cada grupo em duas colunas. Preço sem riscado, com a nota embaixo do botão. A faixa dos detalhes saiu.
- #autor: card sem margem negativa e, na mesma seção, "Direto da DM", o subtítulo (h3), o carrossel e o botão.
- #faq: garantia nova (no desktop, o selo fica em cima do título) e 4 perguntas. #fechamento: título grande (34px no celular, até 64px), texto e bloco de compra em vidro.
- Emendas e vazios medidos (celular / desktop): hero/transformação, círculo sobre a linha de luz, 71/91; transformação/identificação, luz que atravessa, 120/140; identificação/caminho, curva, 96/158; caminho/oferta, escudo que se enche com a linha até o rótulo (no desktop, `--emenda-ad: calc(235px - 2.24 * clamp(30px, 3vw, 44px) - 42px)`, a linha termina 12px antes do rótulo) e a foto do palco começando por trás do escudo, 56/94 a 126; oferta/autor, luz que atravessa, 110/120; autor/faq, luz que atravessa, 120/164; faq/fechamento, círculo do escudo, 116/141; fechamento/rodapé, fio, 65/73.
- Barra fixa do celular: some com a lista da #identificacao (`.chks`, onde fica a barra do contador), com o painel da oferta (observador próprio com `rootMargin` de -40% embaixo: só conta quando o topo dele passa de 60% da tela), com o botão do fechamento e com o rodapé. No #caminho e no palco dos livros, ela aparece.
- Lighthouse: acessibilidade e boas práticas 100 no celular e no desktop. Sem rolagem lateral de 360 a 1920px.

### Rodada C2: nossos cards para comparação (2026-10-22)

- Sem parâmetro, nada muda (artes do cliente). Com `?cards=nossos`, a #transformacao mostra os nossos cards em HTML, de um `<template id="cartoes-nossos">` logo depois da lista; um script inline logo abaixo dele troca a lista antes de o navegador pedir as imagens. Medido: sem o parâmetro, só as artes do cliente são baixadas; com ele, só as nossas fotos (119 KB em 390px 3x, versão 1536; 43 KB em 1440px 1x, versão 768).
- Fotos sem texto em `assets/img/cards/card-0N-nosso.jpg` (1536x1024); `scripts/otimizar-imagens.mjs` (`NOSSOS`, perfil `FOTO`) gera 480, 768, 1152 e 1536px. Na página, `alt=""` (o texto do card é real).
- Card (`.cn`): foto cobrindo o card; no alto à esquerda, o número em prata no círculo de vidro do trilho (sem `backdrop-filter`: o card tem `.reveal`) com um fio prateado de 60px ao lado; embaixo, título em 300 com o final em 600 prateado (h3) e a linha em `--nevoa` (no máximo 34 letras por linha: `max-width` de 16,5em, 15em a partir de 1024px). Mesma moldura dos cards do cliente, sem hover.
- Até 1023px: card 4:5, texto embaixo, degradê de baixo para cima e um leve da esquerda; foto em `object-position: 85%` (card 03 em 95%, para o homem e a mulher caberem). A partir de 1024px: card 4:3, texto à esquerda, degradê da esquerda reforçado (.9 até 40%, .6 em 56%, some em 80%) e um de baixo; foto presa à direita.
- Contraste do texto sobre a foto: mínimo de 5,8:1 (1024px, prata do card 04), de 360 a 1920px.
- `?cards=` e `?capa=` funcionam juntos, em qualquer ordem; valor desconhecido é ignorado. `cards` saiu do repasse para o checkout, como `capa` e `rastreio`.

### Capa oficial dourada definitiva (2026-10-22)

- O cliente aprovou a capa oficial dourada, que fica fixa no livro principal da mesa, com e sem `?cards=nossos`. Saíram o parâmetro `?capa=` e o script dele, o CSS e o HTML que só a capa em HTML usava (`.capa-ov`, `.capa-pe`, `.capa-ti`, `.capa-au` e a classe `.capa-oficial`) e os arquivos `capa-oficial-azul.png`, `capa-desprezado.jpg` e os derivados dos dois em `assets/img/opt/`. A peça `.capa` ficou com a imagem, a luz de lombada, o contorno e a sombra; os quatro cadernos não mudaram.
- `scripts/otimizar-imagens.mjs`: só `capa-oficial-dourada` (perfil de retrato); o conjunto `OPCIONAIS` saiu.
- O único parâmetro de comparação é `?cards=nossos`. Fora do repasse para o checkout ficam `cards` e `rastreio`; `capa` deixou de existir e, se vier na URL, vai para o checkout como qualquer outro.
- As seções anteriores deste arquivo que citam `?capa=` e a capa em HTML ficam como histórico.

### Botões em maiúsculas e variação `?tema=vibrante` (2026-10-22)

- Botões de compra e de ação (`.cta` e o da barra fixa) em maiúsculas por CSS (`text-transform: uppercase`, `.04em`, peso 600); o HTML continua em caixa normal. Rótulos, títulos e o resto em caixa normal.
- Botão grande: uma linha a partir de 400px. Em maiúsculas o rótulo mede 331px em 18px e 276px em 15px: no celular, `clamp(15px, 15px + (100vw - 400px) * .0588, 18px)` com folgas menores (16px à esquerda, 8px de espaço e à direita, seta de 40px) e o bloco de compra do fechamento com 6px de recuo; no desktop, 18px (com 20px o anel passava dos 480px do bloco de compra). Em 360 e 390px, duas linhas.
- Botões normais quebram em duas linhas parelhas no celular até ~420px; no desktop, uma linha. Painel da oferta a partir de 1280px em 6 + 6 colunas (em 5, o botão do preço quebrava). Botão da barra fixa com 12,5px e 12px de recuo; em 360 e 390px a barra tem 73px (nome em duas linhas).
- Correção nas duas versões: o brilho do círculo aceso das etapas começa na borda do círculo (`radial-gradient` transparente até `var(--et-c) / 2`); dentro dele, clareava o fundo do número (2,6:1, agora 5,7:1 ou mais).
- `?tema=vibrante`: script no topo do `<head>` põe `.tema-vibrante` no `<html>` antes da pintura; CSS no fim do `<style>`, trocando `--prata` (degradê de #8FD0FF a #3D8BFF, `text-shadow` azul a 25%) e `--gelo` (#FFFFFF). H1 próprio por um script logo depois do H1 (sem a variação, sem JS e para buscadores, vale o padrão); `.lead-2` em 600 e branca; rótulo do hero com borda #3D8BFF, brilho e maiúsculas espaçadas (exceção à regra dos rótulos, a pedido do cliente); hero centralizado no celular; caixas de números com ícone à esquerda e fio vertical (logo do Instagram em cores e grupo de pessoas em #3D8BFF, SVG; os ícones padrão ficam com `.ico-padrao`); botões com anel em borda e brilho azuis e seta em degradê azul; vidros (cards do hero, checklist e contador, cards da transformação, painel, garantia, FAQ) com borda azul a 30% e brilho suave. O "30" do caderno continua prateado.
- Ajustes da variação: sombra presa ao H1 mais forte e também no tablet (contraste mínimo de 5,1:1 de 360 a 1920px); números das etapas em 700 (texto grande; 3,6:1 ou mais no pior caso); título da oferta com até 900px, para ficar em duas linhas (a emenda do escudo conta com duas). Hero da variação no celular: rótulo de 15 a 35px abaixo da barba nas telas baixas, H1 de 67 a 87px, botão na primeira tela.
- `?tema=` funciona junto com `?cards=`, em qualquer ordem; valor desconhecido é ignorado; `tema` fora do repasse para o checkout (com `cards` e `rastreio`). Lighthouse: acessibilidade e boas práticas 100 nas duas versões.

### H1 novo e #oferta com os três livros (2026-10-25)

- H1 único nas duas versões: "Vou te mostrar como deixar de ser desprezado e **voltar a ser respeitado dentro da sua própria casa.**". Saiu o script que trocava o H1 no `?tema=vibrante`. Hero conferido nas duas: H1 em 4 linhas no desktop e 4 a 5 no celular, botão na primeira tela, rótulo abaixo da barba, contraste mínimo 5,36:1. `og.jpg` refeito com o H1 novo (identidade padrão).
- O produto passou a ser três livros: De Desprezado a Respeitado (principal), O Jogo Sujo dos Relacionamentos e Chega de Engolir Calado!, com os materiais de aplicação prática. Os quatro cadernos tipográficos saíram (CSS `.caderno`/`.cad-*`, `.recebe`, `.items`).
- #oferta: rótulo "Conheça o método", título "De Desprezado **a Respeitado**" e apoio. Palco com o livro principal no centro (`--lv`: 44vw no celular, clamp(150px, 21vw, 280px) a partir de 761px) e os laterais com 80% (30vw no celular), girados para dentro (16° no celular, 14° a partir de 761px); no celular, metidos 7vw atrás do central. Capas novas `capa-jogo-sujo.png` e `capa-engolir-calado.png` (1024x1536) no perfil de retrato, de 360 a 1024px.
- Cápsula de vidro "3 materiais integrados + aplicação prática" com o ícone de camadas, sobe por cima do pé do palco no lugar de onde o painel subia; sempre em uma linha (fonte de 12,5 a 14px no celular, 15px a partir de 761px). O painel fica logo abaixo dela.
- Painel: os três livros (número no círculo de vidro, linha de destaque com `--prata`, nome em 600 e apoio em `--nevoa`) e o bloco "Do conhecimento à ação" com a engrenagem e os quatro materiais separados por ponto médio. Preço igual; botão "Quero acessar o método completo". No `?tema=vibrante`, círculos e cápsula com borda azul e destaques em azul.
- `docs/copy.md` (H1 e seção 5) e `CLAUDE.md` atualizados. O botão do preço ainda quebra em duas linhas no celular: fica para a rodada seguinte (botões iguais).

### Rodada B: botões iguais, preço em destaque e rótulo do hero (2026-10-25)

- Os seis botões de compra (hero, #transformacao, #caminho, #oferta, #autor, #fechamento) com `.cta--grande`: 76px de altura, maiúsculas, seta no círculo, cada um com o seu texto. Barra fixa com o botão compacto.
- Uma linha a partir de 375px (ajuste pedido na aprovação; antes era 400px), duas linhas parelhas abaixo. No celular, o anel que passa da coluna sai por igual dos dois lados (o pai vira flex centrado), a pelo menos 12px das bordas. Fonte `clamp(13px, (100vw - 108px) * .0514, 18px)`; botão da oferta `clamp(13px, (100vw - 112px) * .0492, 18px)` com .02em, anel de 3px, folgas 12/4px e seta de 40px. Medido (todos em uma linha, nos dois temas): 375px 13,72px (oferta 13px); 390px 14,49 (13,68); 393px 14,65 (13,83); 412px 15,63 (14,76); 430px 16,55 (15,65); desktop 18px. Em 360px, duas linhas com 18px.
- Bloco de preço: frase em cima (16px, `--nevoa`), "12x de" pequeno acima, "R$ 10,03" com 72px no celular e 88px a partir de 761px, 600, degradê `--prata` e brilho radial atrás (azul no vibrante), sem quebra (281px em 360px); "ou R$ 97 à vista" numa cápsula sem backdrop-filter; borda mais clara e brilho externo; depois do botão, o escudo com "Garantia de 7 dias"; a nota embaixo. No celular o bloco avança 12px além da margem do painel, com 4px de recuo.
- Rótulo do hero: "Conheça o método De Desprezado a Respeitado". Padrão 13px no celular e no tablet; vibrante 11px com .02em no celular e .06em no tablet (desktop sem mudança). Uma linha a partir de 380px (também no tablet, passando da coluna sobre a parede); abaixo, duas linhas centradas. Abaixo da barba em todas as telas (mínimo 6px no vibrante em 360x640).

### Rodada C: consolidação (2026-10-25)

- O cliente aprovou `?tema=vibrante&cards=nossos`, que virou a página sem parâmetros. Conferido: a raiz ficou idêntica, pixel a pixel, ao `?tema=vibrante&cards=nossos` de antes, em 360, 390, 768, 1280 e 1440px (página inteira, mesma altura).
- Identidade: a classe `.tema-vibrante` fica fixa no `<html>` e o script do `?tema=` saiu. As regras continuam no fim do `<style>`, sob a classe, por cima da camada base prateada (juntar tudo no CSS base seriam dezenas de trocas espalhadas, com risco de mudar algo sem querer).
- Cards: os nossos cards ficam direto na lista; saíram o `<template>`, o script do `?cards=`, as regras `.cartao img` das artes, as artes `card-0N-original.png` e os 48 derivados; o otimizador perdeu `CARDS`, `LARGURAS_CARD` e o perfil `CARD`.
- Checkout: `tema` e `cards` vão para o checkout como qualquer parâmetro; só `rastreio` continua fora.
- `og.jpg` refeito com a identidade oficial: rótulo "Conheça o método De Desprezado a Respeitado" na cápsula azul (13,5px, .16em, uma linha) e H1 em 700 com o destaque azul.
- `CLAUDE.md` ("Identidade oficial" no lugar da variação para teste, cores, pesos, botão, exceção do rótulo do hero, cards), `docs/copy.md` e `PENDENCIAS.md` (identidade e cards resolvidos; itens do produto atualizados para os três livros) atualizados. As seções anteriores deste arquivo que citam `?tema=` e `?cards=` ficam como histórico.

### Origens de tráfego (2026-10-25)

- A mesma página abre na raiz e em `/bio/`, `/sdr/`, `/tfg/` e `/story/`. `_redirects` na raiz (Netlify) com reescritas 200 de `/bio`, `/bio/` e das outras para o `/index.html`; o endereço na barra continua o da rota. Nenhuma cópia do `index.html`. Canonical na raiz em todas.
- Todos os arquivos do projeto pedidos a partir da raiz (`/assets/...`, `/favicon...`): 397 referências (imagens, srcset, fonte e preload, `url()` do CSS, Lenis, favicons). Âncoras e URLs completas sem mudança. Regra atualizada no CLAUDE.md e no docs/PROMPTS.md.
- `CHECKOUTS` (`padrao`, `bio`, `sdr`, `tfg`, `story`) no topo do script do checkout, todos com o link provisório. O primeiro segmento do caminho (em minúsculas) escolhe o checkout dos 7 botões de compra, inclusive o da barra fixa; qualquer outro caminho usa o padrão; o repasse de parâmetros continua. Sem JS, o href do HTML (o padrão).
- `?origem=bio` (`sdr`, `tfg`, `story`) simula a rota só em `localhost` e `127.0.0.1`; em produção é ignorado. `origem` e `rastreio` não vão para o checkout.
- Teste: servidor aplicando o próprio `_redirects` e o domínio de produção apontado para ele, com os links marcados por origem. Localhost com e sem `?origem=`, `/bio/` com utm, `/bio` sem barra, `/sdr/`, `/tfg/?fbclid=`, `/story/` e `/story/?origem=bio` (ignorado): todos com o checkout certo e os parâmetros; nenhum 404, nenhuma imagem quebrada.
- Pendente (PENDENCIAS.md): preencher o CHECKOUTS com os quatro links da Eduzz quando o cliente enviar; confirmar com a gestora o pixel em cada produto/oferta.

### `.htaccess` para a Hostinger (2026-10-25)

- Hospedagem final: Hostinger do cliente (LiteSpeed compatível com Apache), deploy pelo Git na raiz do domínio. A Netlify fica só como prévia, com o `_redirects` (mudou uma rota num, mude no outro).
- `.htaccess` na raiz, com os blocos dependentes de módulo em `<IfModule>`: `DirectoryIndex` e `Options -Indexes`; 404 com a própria página (`ErrorDocument 404 /index.html`, escolhido por ser o mais seguro: o visitante vê a página e compra pelo checkout padrão, buscadores recebem 404); bloqueio dos arquivos internos em três camadas (`RedirectMatch 404`, `FilesMatch` negado e `RewriteRule [F]`), menos `/.well-known/`; www para sem www e http para https (301, com a condição do `X-Forwarded-Proto` contra laço); rotas `/bio`, `/sdr`, `/tfg` e `/story` (com ou sem barra, qualquer caixa) reescritas para o `/index.html`; tipos avif, webp, woff2, svg e js; brotli e gzip; HTML `no-cache`, favicons 1 semana, `nosniff`.
- `assets/.htaccess` com cache de 1 ano (immutable), num arquivo próprio da pasta porque separar por pasta no `.htaccess` da raiz exige expressões que o LiteSpeed nem sempre aceita. Os nomes não têm versão: para trocar um arquivo de `assets/`, use um nome novo.
- Sem Apache na máquina: os padrões foram testados em Node, lidos do próprio arquivo. 440 endereços liberados (os 208 que a página usa, os 227 de `assets/`, raiz, rotas, `/.well-known/`), 24 internos bloqueados e 13 casos de rota corretos. A conferência no domínio depois do primeiro deploy está no `PENDENCIAS.md`.

### Checkouts da Eduzz por origem de tráfego (2026-10-26)

- `CHECKOUTS` preenchido: `padrao` https://chk.eduzz.com/R9JXO4OZ0X (provisoriamente o mesmo da bio, até o cliente confirmar o link da raiz), `bio` https://chk.eduzz.com/R9JXO4OZ0X, `sdr` https://chk.eduzz.com/60E2O4KBW3, `tfg` https://chk.eduzz.com/E0DKJ47691, `story` https://chk.eduzz.com/39VKR26KWR.
- Os href dos 7 botões de compra no HTML (o que vale sem JS) passaram para o padrão. O checkout provisório do produto antigo (7WXGDYN20A) não aparece mais no projeto (`index.html`, `CLAUDE.md`, `PENDENCIAS.md` e `docs/copy.md` atualizados).
- Testado num servidor local na raiz (porta 5500, como o Live Server), com `&utm_source=teste`: sem origem e com `?origem=bio`, os 7 botões em R9JXO4OZ0X; `sdr` em 60E2O4KBW3; `tfg` em E0DKJ47691; `story` em 39VKR26KWR; `?origem=BIO` igual à bio e `?origem=xyz` no padrão; todos com `?utm_source=teste`. Sem JS, o padrão sem parâmetros. `rastreio` e `origem` continuam fora do repasse; `fbclid` vai. Nenhum erro de JS.
- PENDENCIAS.md: checkout resolvido; ficam confirmar o link da raiz e confirmar com a gestora o pixel e o token nos quatro checkouts.

### Sem página na raiz: só as quatro rotas vendem (2026-10-26)

- O cliente confirmou que não vai existir página na raiz: só /bio/, /sdr/, /tfg/ e /story/ vendem, com os mesmos links.
- `404.html` nova: fundo azul-noite com a luz difusa e o grão, o escudo prateado com brilho azul, "Esta página não está disponível." (300, até 36px) e um link discreto "@marcellopgomes no Instagram" (sublinhado, `--nevoa`, mesma guia). Sem botão de compra, sem nenhum script (sem GTM e sem pixel), `noindex`, caminhos a partir da raiz. Lighthouse: acessibilidade e boas práticas 100 (SEO 50 pelo `noindex`, de propósito).
- `.htaccess` (Hostinger): `ErrorDocument 404 /404.html`; a raiz e o pedido direto de `/index.html` respondem 404 por uma regra só: `RewriteCond %{THE_REQUEST} ^[A-Z]+\s(?:https?://[^/\s]+)?/+(?:index\.html)?(?:\?\S*)?\s [NC]` com `RewriteRule ^(?:index\.html)?$ - [R=404,NC,L]`, antes da regra das rotas. O `THE_REQUEST` não muda nas passagens internas: o /bio/ reescrito para o index.html não cai na regra, e a 404.html servida como página de erro fica fora do padrão (sem laço). Se o servidor resolver o `DirectoryIndex` antes da reescrita, a regra continua pegando a raiz. O `DirectoryIndex index.html` ficou como segurança.
- `_redirects` (Netlify): `/` e `/index.html` com `/404.html 404!` (forçado, porque o index.html existe), as oito linhas das rotas com 200 para o `/index.html` e, por último, `/* /404.html 404` sem "!" (os arquivos que existem continuam servidos).
- Sem Apache nem WSL na máquina: as duas configurações foram simuladas em Node, lendo as regras dos próprios arquivos, em 20 pedidos (raiz com e sem query, HEAD, `/index.html` em várias formas, as quatro rotas com e sem barra e em caixa alta, `/bio/index.html`, endereços inventados, a 404.html e arquivos de `assets/`): todos com o status e o arquivo esperados, inclusive com o `DirectoryIndex` antes da reescrita. A conferência no domínio fica no `PENDENCIAS.md` (a regra usa `[R=404]`, que o LiteSpeed precisa aceitar).
- Canonical e `og:url` em `https://nunca-mais-seja-desprezado.com.br/bio/`. `CHECKOUTS`: o `padrao` e os href dos botões continuam com o link da bio, só como segurança; comentário atualizado. Localmente, o Live Server não lê essas regras e a raiz continua abrindo a página; os testes seguem com `?origem=` (rotas conferidas de novo, iguais à rodada anterior).
- `CLAUDE.md`, `docs/copy.md` e `PENDENCIAS.md` (link da raiz resolvido; conferência pós-deploy ampliada) atualizados.
- `_headers` (Netlify, prévia) com o mesmo cache do `.htaccess`: `assets/` com 1 ano e immutable, HTML (raiz, `/index.html`, `/404.html` e as rotas, com e sem barra) com `no-cache`, favicons com 1 semana e `nosniff` em tudo. O Cache-Control vai em caminhos que não se sobrepõem (a Netlify junta os valores quando duas regras casam). O `.htaccess` passou a esconder o `_headers` na Hostinger, como o `_redirects`.

### Performance (2026-10-26)

- Fase 1 (só medição): o LCP é a foto do hero; o preload casa com o srcset. O rastreio (GTM e pixel) fica como está (opção A, aprovada).
- Revelação: o desfoque fica só nos textos e títulos. `.reveal.rv-leve` (a mesma faixa de rolagem; entrada só com opacidade e deslocamento, saída só até 60% de opacidade) nos 4 cards da #transformacao, no palco dos livros (`.books`), no painel da oferta, no card do autor, nos 8 prints (e nas 16 cópias do carrossel) e no card da garantia: os blocos com imagem ou com mais de ~400 px de altura, medidos a 1440 e 390 px. Capturas antes e depois a 1440 px enviadas.
- Imagens fora o hero limitadas a 2x no celular: o `sizes` ganhou `(min-resolution: 2.9dppx)` (x2/3) e `(min-resolution: 2.4dppx)` (x0,8) antes do valor do celular, nos cards, na mesa da oferta, nas capas, no autor e nos prints. Larguras novas: cards em 1280 e mesa em 1360 (arquivos novos; nenhum existente mudou, por causa do cache de 1 ano). Página inteira em 390 px: 439 para 347 KB com densidade 3 e 364 para 329 KB com densidade 2. Qualidade conferida nos pixels reais com densidade 3 (card, autor, print e capa).
- Lenis depois do load (item 6, aprovado depois): o script do fim da página só baixa o `lenis.min.js` no load, e só quando ele vai ser usado (mouse ou trackpad, sem movimento reduzido). No toque, o arquivo nem é pedido.
- Testados e desfeitos (pela regra: item que piora a nota sai):
  - Grão depois do load: o `body::after` cobre a tela inteira e é candidato a LCP. Adiado, virava o LCP (6,6 s com rastreio) e levava o Speed Index de 0,9 para 3,7 s.
  - Assinatura do estúdio carregada perto do rodapé (`IntersectionObserver`): neste notebook, o Chrome do Lighthouse às vezes atrasa a primeira pintura em degraus de ~1 s. Sem a assinatura no começo, o atraso ia de ~1,2 s para ~2,2 s, o GTM e o pixel entravam no LCP simulado e a nota do celular com rastreio caía para 50 a 60. Voltou ao `defer`, como era.
- `content-visibility`: não aplicado (decisão do desenvolvedor). Nas seções abaixo da dobra, o ganho medido foi de 16 ms no FCP com CPU 4x (496 para 480 ms), e a contenção de pintura corta as emendas: o palco e o título da #oferta somem na emenda com o #caminho, e a luz da #transformacao termina numa linha seca.
- Visual: página inteira idêntica à versão anterior em 390 e 1440 px (movimento reduzido, rolada até o fim, comparação pixel a pixel). Sem erros de JS.
- Medição final: servidor local parecido com a Hostinger (brotli, cache do `.htaccess`), Lighthouse 12.8.2 com GPU desligada, envios ao Meta, ao Gateway e ao GA4 bloqueados, mediana de 5, alternando a versão anterior e a final, com o notebook livre:

| Configuração | Anterior | Final | Referência da fase 1 |
| --- | --- | --- | --- |
| Celular com rastreio | 91 (89-95), LCP 2,0s, TBT 354ms | 95 (75-97), LCP 1,9s, TBT 249ms | 95 (89-96), LCP 2,0s, TBT 243ms |
| Celular sem rastreio | 99, LCP 2,0s, TBT 11ms | 99, LCP 2,0s, TBT 0ms | 99 |
| Desktop com rastreio | 100 (95-100), LCP 0,5s, TBT 26ms | 100 (100-100), LCP 0,7s, TBT 2ms | 100 |
| Desktop sem rastreio | 100 | 100 | 100 |

- CLS 0 em todas. A rolagem com CPU 4x no desktop não deu números confiáveis nesta máquina hoje (quadros lentos acima de 85% nas duas versões, contra 32,5% na fase 1); a pintura na thread principal caiu ~13% sem o desfoque nos blocos grandes.
- Para medir de novo: alterne A/B, use mediana e confira o `observedFirstContentfulPaint` (audit `metrics` do JSON): rodadas com a primeira pintura atrasada em degraus de ~1 s são o atraso do Chrome desta máquina, não da página.

### Preço novo (2026-10-27)

- O cliente mudou o preço (print do checkout da bio na Eduzz): 12x de R$ 9,83 ou R$ 95 à vista, no lugar de 12x de R$ 10,03 ou R$ 97. Trocado no bloco de preço da #oferta, no bloco de compra do #fechamento, na barra fixa, no comentário do CSS, no docs/copy.md e no CLAUDE.md, no formato da página ("R$ 95", sem ",00"). A 404.html não tem preço.
- A confirmar: se sdr, tfg e story também cobram esse valor (a página mostra o mesmo preço nas quatro rotas).

### Página de links na raiz (2026-10-27)

- A raiz do domínio passou a ser a página de links do Marcello (`links.html`); a página de vendas continua igual nas quatro rotas. Mockup aprovado em `_entrada/links-assets/` (fora do git, no `.gitignore`), reescrito em HTML e CSS limpos.
- Roteamento: `.htaccess` com `DirectoryIndex links.html` e `RewriteRule ^$ /links.html [L]`; a regra do `THE_REQUEST` manda para 404 o pedido direto de `/index.html` e de `/links.html` (com ou sem query) e deixou de pegar a raiz. `_redirects` com `/ /links.html 200!` primeiro e os dois `404!`. `_headers` com `/links.html` em `no-cache`. Simulado em Node (26 pedidos, inclusive com o `DirectoryIndex` antes da reescrita) e conferido no servidor local que imita a Hostinger: `/` 200 com os links; `/links.html`, `/links.html?x=1`, `/index.html` e uma rota inexistente em 404; as quatro rotas com os checkouts certos.
- Layout fiel ao mockup, com os ajustes aprovados: sem sobreposição nos blocos do Arsenal e do WhatsApp (folgas medidas em 360, 375, 390 e 430 px; cada bloco é um contêiner, então o desktop fica igual ao celular de 390 px), 28 px acima do avatar no celular, borrões do WhatsApp em degradê no fundo do card e recorte dos blocos numa camada com `clip-path` (o Safari cortava os cantos; conferido no WebKit, parado e com o hover), brilho do topo numa camada com `overflow: hidden` e `overflow-x: clip` no `html` e no `body` (sem rolagem lateral: `scrollWidth` igual a `clientWidth` de 360 a 1440 px).
- Cascata de entrada só com deslocamento, sem fade (decisão do desenvolvedor): com o fade, o LCP esperava a animação e a nota do celular com rastreio caía para 66.
- Sem a assinatura do Studio Alto Nível. Cinzel 700 local (15 KB) só no título do Arsenal. Imagens novas `links-fundo` e `links-arsenal` (com transparência), geradas pelo `scripts/otimizar-imagens.mjs`. `og:image` com a foto de perfil de 480 px, com width, height e alt.
- WhatsApp: `WHATSAPP_NUMERO` vazio, bloqueador para publicar (`PENDENCIAS.md`). `clique_link` no dataLayer (o GA4 só recebe com uma tag no contêiner).
- Medição (servidor local, Lighthouse, mediana de 5): celular com rastreio 88 a 90 (o resto é o TBT do GTM e do pixel), celular sem rastreio 100, desktop com rastreio 96 a 100, desktop sem rastreio 100, CLS 0 em todas.

### Página de links: botões maiores e foto de perfil nova (2026-10-27)

- Botões dos três blocos maiores (pedido da cliente), no mesmo desenho: 44 px de altura, texto de 12,5 px, padding esquerdo de 18 px e a seta de 16 px num círculo de 34 px (com 10 px entre o texto e o círculo e 5 px em volta dele). Numa linha só em 360, 375, 390 e 430 px, a pelo menos 75 px da borda do card, sempre por cima da foto, do produto e do celular; os títulos e as imagens não precisaram mudar. `scrollWidth` igual a `clientWidth` nas quatro larguras.
- Foto de perfil trocada pela atual do Instagram (`assets/img/links/marcello-perfil.jpg`, 1254 px), no avatar do topo e no cabeçalho do celular do WhatsApp: versões novas `links-perfil` em 120, 240 e 480 px (nome novo por causa do cache de 1 ano), `og:image` e `twitter:image` na de 480. O `links-avatar` e o original antigo saíram do projeto.

### Página de links: textos novos, botões menores e blocos de 188 px (2026-10-27)

- Textos do Marcello: bio "Mentor de relacionamentos." / "Especialista em comportamento humano.", em duas linhas fixas (15 px, a segunda mede 282 px de 320 em 360 px), e o mesmo texto no `meta description`, `og:description` e `twitter:description`. Botões: "Chega de ser desprezado", "Não quero mais ser enganado" e "Chamar no WhatsApp". Título do Arsenal: "Chega de ser / enganado / ou traído!" em Cinzel 700, com o carmim só em "enganado" e "traído!" ("ou" branco). A Cinzel do subset cobre "í" e "!" (o Chrome usa só Cinzel no título).
- Botões dos três blocos: 40 px de altura, texto de 11,5 px (o mesmo nos três), círculo de 30 px e padding esquerdo de 16 px; numa linha em 360, 375, 390 e 430 px, o do Arsenal a 34,7 px da borda do card em 360.
- Alturas: bloco 1 com 214 px; Arsenal e WhatsApp com 188 px, conteúdo centralizado (respiro de ~30 a 35 px e ~40 px).
- Arsenal: caixa com `min(60%, 210px)`, `right: -28px`, `bottom: -4px`, ocupando a parte de cima do card. Topo da caixa a 25 / 17 / 10 / 9 px da borda de cima, logo "ARSENAL" a 11,7 / 17,6 / 23,5 / 25,8 px do topo do botão e título a 11,2 / 10,2 / 9,2 / 31 px dos livros (360 / 375 / 390 / 430). O logo termina a 46% da altura da imagem (medido nos pixels).
- WhatsApp: o celular gira pelo topo, então a borda esquerda fica mais à esquerda quanto mais alto o ponto; com o bloco mais baixo, o botão subiu e encostou nele. Medido pela matriz de transformação do navegador. Abaixo de 390 px ele diminui (escala .88 e 8 px para fora em 375; .82, 16 px para fora e no topo em 360: com .88 em 360 ele sairia ~17 px), a mesma inclinação e máscara. Botão / título / saída pela borda: 12,5 / 51,9 / 9 px (360), 15,1 / 39,7 / 4,9 (375), 14,8 / 39,5 / 4,7 (390), 44,8 / 69,5 / 4,7 (430). "Equipe Marcello" e as mensagens inteiros.
- `scrollWidth` igual à largura em 360, 375, 390 e 430 px. Atenção: o `@container` mede o bloco por dentro da borda (348 px na tela de 390).

### Página de links: número do WhatsApp (2026-10-27)

- `WHATSAPP_NUMERO = '5562994407151'`. O bloco 3 abre `https://wa.me/5562994407151?text=Oii%2C%20estou%20com%20uma%20d%C3%BAvida%20sobre%20o%20material` em nova aba, com `rel="noopener"`. O mesmo href, com `target` e `rel`, foi para o HTML do bloco (antes era `#`), para o link funcionar sem JS como o resto do site.
- Conferido no navegador, com e sem JS: href certo, nova aba, `clique_link` com `destino: 'whatsapp'` no dataLayer e console limpo (o aviso de número vazio sumiu). Saiu o bloqueador do `PENDENCIAS.md`.

### Rota nova /cht/ (2026-10-28)

- Pedido do Marcello: `/cht/` serve a página de vendas com o checkout https://chk.eduzz.com/39ZR122DWE. `cht` no `CHECKOUTS`; `.htaccess` com `^(bio|sdr|tfg|story|cht)/?$`; `_redirects` e `_headers` com `/cht` e `/cht/`; comentários do `index.html` e da `404.html`, `docs/copy.md`, `CLAUDE.md` e `PENDENCIAS.md` com a rota (a pendência da gestora vale para os cinco checkouts). Canonical e `og:url` continuam em /bio/ (iguais em todas as rotas).
- Como as outras, `/cht` sem barra serve a página direto (200, reescrita interna), sem redirecionar para `/cht/`: nenhuma rota redireciona hoje.
- Conferido num servidor local que lê as regras do próprio `.htaccess`, com o domínio de produção apontado para ele: /bio/, /sdr/, /tfg/, /story/, /cht/, /cht e /CHT/ em 200 com os 7 botões no checkout da rota; `/cht/?utm_source=teste&origem=bio&rastreio=1` com o checkout da cht e só o `utm_source`; / com a página de links; rota inexistente em 404 com a `404.html`. No localhost, `?origem=cht` e `?origem=CHT` levam ao checkout da cht.

### Prévia da Netlify sem os arquivos internos (2026-10-28)

- Na prévia, `/docs/*`, `/CLAUDE.md`, `/PENDENCIAS.md` e `/scripts/*` abriam (200): a Netlify não lê o `.htaccess`. O `_redirects` ganhou, antes de todas as regras, o mesmo bloqueio em 404 forçado (`404!`, com a `404.html`): `/docs`, `/docs/*`, `/scripts`, `/scripts/*`, `/_entrada`, `/_entrada/*`, `/node_modules/*` e os `.md` da raiz pelo nome (`CLAUDE.md`, `PENDENCIAS.md`, `PROGRESSO.md`, `README.md`). A Netlify não aceita padrão por extensão: um `.md` novo na raiz precisa entrar na lista. O `.htaccess` não mudou.
- Os arquivos com ponto (`.htaccess`, `assets/.htaccess`, `.gitignore`), o `_redirects` e o `_headers` a Netlify já não publicava (404 antes da mudança); a `_entrada/` fica fora do git.

### Variante do hero com os três livros, `?hero=livros` (2026-10-29)

- Antes desta rodada, a proposta dos livros por cima da foto (não aprovada) ficou guardada no branch `rascunho/livros-sobre-foto` (também no GitHub); a `main` seguiu sem ela.
- Variante só por parâmetro: `?hero=livros` troca a foto do Marcello pelo fundo com os três livros (artes `hero-livros-mobile.png` e `hero-livros-desktop.png`, 1882x3344 e 3344x1882, otimizadas nas larguras e no perfil da foto; os títulos ficaram nítidos sem subir a qualidade; 1290 px do celular com 135 KB em AVIF, contra 85 KB da foto). Script no `<head>` (classe `.v-livros` e preload das imagens novas), script depois do `<picture>` (troca das fontes) e CSS sob `.v-livros`. Os preloads da foto ficam: na variante ela também é baixada, sem aparecer (escolha do desenvolvedor). `hero` fora do repasse para o checkout.
- Sem o parâmetro, a página ficou idêntica à anterior (comparação pixel a pixel da página inteira em 390, 768 e 1440 px: 0 pixel diferente) e as imagens dos livros não são pedidas.
- Celular: rótulo logo abaixo da base dos livros (espaçador no bloco de texto), botão 10 px mais perto da subheadline; em 390x844, 80 dos 88 px do botão na primeira tela (nas telas baixas, 0 a 19 px). Tablet (761 a 1023 px), a pedido do cliente: o arranjo do celular, com o texto centrado embaixo dos livros (768x1024: rótulo 58 px abaixo da base; 1023x768: 14 px) e as laterais da imagem sumindo em 3%.
- Desktop: imagem presa na borda direita (pedido do cliente) e ampliada até os livros ficarem 64 px depois do texto, limitada pela altura do hero; bordas que ficam à vista somem num degradê. Centro dos livros 75,6% / 73,8% / 70,2% / 67,4%, folga até o texto 67 / 65 / 71 / 180 px, margem direita 2,9% / 3,1% / 3,5% / 3,8% (1280 / 1440 / 1920 / 2560). Em 2560 a folga passa de 120 px: o hero tem no máximo 920 px de altura e limita os livros.
- Lighthouse (servidor local parecido com a Hostinger, mediana de 5, alternando): celular com rastreio 95 (foto) e 94 (livros, LCP 2,77 para 2,99 s); desktop com rastreio 100 e 100 (LCP 0,61 s). O LCP é a imagem do fundo do hero nas duas.

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
2. Instale a extensão Live Server (Ritwick Dey), abra no VS Code a pasta raiz do projeto (a que tem o `index.html`) e clique em "Go Live". A página abre em http://127.0.0.1:5500/index.html. Todo arquivo é pedido a partir da raiz (`/assets/...`), então o servidor precisa servir a raiz do projeto: aberto numa pasta acima, as imagens e a fonte não carregam. Qualquer servidor estático na raiz também serve (por exemplo, `npx live-server --port=5500`).
   - O Live Server não lê o `.htaccess` nem o `_redirects`: para testar uma origem de tráfego, abra `/?origem=bio` (ou `sdr`, `tfg`, `story`). Na Hostinger e na Netlify, as rotas `/bio/` etc. funcionam direto, e a raiz responde 404 com a `404.html` (localmente, ela abre a página com o checkout padrão). A `404.html` se confere direto em `/404.html`.
3. Não é preciso gerar nada: `assets/img/opt/`, `assets/img/og.jpg`, os favicons e `assets/js/lenis.min.js` estão no repositório.
4. No localhost, o GTM e o pixel não carregam. Para testar o rastreio, abra com `?rastreio=1`.
5. O Node (versão 20 ou mais nova; foram usadas a 24 e a 22) só é necessário para regenerar arquivos:
   - `npm install --prefix scripts`: baixa o sharp, o Lenis e o puppeteer-core para `scripts/node_modules`, que fica fora do git.
   - `node scripts/otimizar-imagens.mjs`: gera as imagens que mudaram; `--tudo` refaz todas.
   - `npm run lenis --prefix scripts`: recopia o Lenis para `assets/js/`.
   - `npm run og --prefix scripts`: refaz `assets/img/og.jpg` (precisa do Chrome instalado e de internet).
   - `npm run favicons --prefix scripts`: refaz os favicons PNG e ICO.
