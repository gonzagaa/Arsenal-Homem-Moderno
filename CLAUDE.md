# De Desprezado a Respeitado: landing page

Landing page de venda do De Desprezado a Respeitado, o método de Marcello Gomes (três livros digitais em PDF: o principal, De Desprezado a Respeitado, mais O Jogo Sujo dos Relacionamentos e Chega de Engolir Calado!, com os materiais de aplicação prática: plano de ação de 30 dias, diagnóstico pessoal, código de honra e diário de evolução) para o homem que é desrespeitado dentro do próprio relacionamento parar de aceitar humilhações calado e recuperar sua voz. Marcello é criador com 419 mil seguidores no Instagram e fala sobre posicionamento masculino, respeito próprio e relacionamentos.

O produto substituiu o Arsenal Homem Blindado (combo de quatro manuais), que deixou de existir. O repositório e a pasta mantêm o nome antigo. Domínio: `https://nunca-mais-seja-desprezado.com.br/`.

Público: homens adultos, a maioria chegando pelo celular, vindos do Instagram dele ou de anúncios da Meta. Produto sério, para homens sérios. A página precisa parecer cara, sóbria e feita por estúdio. Se parecer template, página gerada por IA ou "app de academia", falhou.

Objetivo único: levar ao checkout da Eduzz.

## Arquivos de referência (leia antes de qualquer tarefa)

| Arquivo | Manda em quê |
| --- | --- |
| `docs/copy.md` | Todo o texto da página. Use palavra por palavra. Não reescreva, não resuma, não "melhore". |
| `docs/mockup-referencia.html` | O visual aprovado: cores, tipografia, espaçamentos, efeitos, ordem das seções, versão celular. Abra no navegador e use como alvo. |
| `assets/img/` | Imagens originais em alta. Gere as versões otimizadas a partir delas. |
| `docs/PROMPTS.md` | As etapas de construção, em ordem, e a regra de parada entre elas. |
| `PENDENCIAS.md` | Dados que ainda faltam do cliente. |

Quando o mockup e a copy discordarem num texto, a copy manda. Quando discordarem num detalhe visual, o mockup manda. Se algo não estiver coberto por nenhum dos dois, pergunte antes de inventar.

## Entrega técnica

- Site estático. Na raiz do projeto, o `index.html` (a página de vendas), a `links.html` (a página de links do Marcello, servida na raiz do domínio; ver Página de links) e a `404.html` (a página de erro), cada um com CSS e JS inline (são poucos KB e evitam requisições extras). Única exceção: o Lenis, em `assets/js/lenis.min.js`, baixado depois do load (ver Sistema de movimento). Sem framework, sem build obrigatório, sem jQuery.
- Imagens otimizadas em `assets/img/opt/`, em AVIF e WebP com fallback JPG, servidas por `<picture>` com `srcset` e `sizes`. Toda `<img>` com `width` e `height` para não haver salto de layout. Fora o hero, as imagens ficam limitadas a 2x no celular: até 760 px de tela, o `sizes` encolhe com densidade alta (x0,8 a partir de 2,4 dppx e x2/3 a partir de 2,9 dppx) e o navegador pede a versão de ~2x. O hero continua até 3x.
- Fonte: Geist hospedada localmente (`assets/fonts/geist-latin.woff2`, arquivo variável com subset latino, licença OFL ao lado), com `preload` e `font-display: swap`. Nenhuma outra família.
- Mobile-first de verdade. Testar em 390 px de largura antes de qualquer outra.
- Funcionar sem JavaScript: todo o conteúdo aparece, os links levam ao checkout. O JS só melhora (checklist, barra fixa, lightbox, rolagem suave).
- Exceção pedida pelo desenvolvedor: a assinatura do Studio Alto Nível (`https://cdn.studioaltonivel.com/footer.js`, com `defer`), que insere o rodapé "Desenvolvido por" no fim do `<body>` com estilo e fonte próprios. Ela carrega com a página: adiada para perto do rodapé, a primeira pintura atrasava no Lighthouse e a nota do celular com rastreio caía (rodada de performance, fase 2). O único ajuste da página sobre ele é o fundo #000000 (`html body #san-footer-badge`).
- Hospedagem final: a Hostinger do cliente (LiteSpeed compatível com Apache), com deploy pelo Git a partir deste repositório, na raiz do domínio. A configuração está no `.htaccess` da raiz: rotas das origens de tráfego (reescrita interna), http para https e www para o domínio sem www (301), bloqueio dos arquivos internos (`docs/`, `scripts/`, `node_modules/`, `.git`, qualquer `.md`, README, `package*.json`, `_redirects` e os `.htaccess`), compressão, tipos (avif, webp, woff2), `no-cache` no HTML, a raiz servindo a `links.html` (pelo `DirectoryIndex` e por reescrita interna), o pedido direto de `/index.html` e de `/links.html` em 404 e a página de erro `404.html` (status 404). O cache de 1 ano (immutable) de `assets/` fica em `assets/.htaccess`: como os nomes não têm versão, para trocar um arquivo de `assets/` use um nome novo, senão quem já visitou continua vendo o antigo. A Netlify fica só como prévia, com o `_redirects` (rotas) e o `_headers` (o mesmo cache): mudou uma rota ou um cache num, mude no outro. O Live Server não lê nenhum dos dois.

## Design (os valores exatos estão no CSS do mockup)

### Cores

| Token | Hex | Uso |
| --- | --- | --- |
| `--abismo` | #050A14 | Fundo base da página |
| `--abismo-hero` | #01050F | Fundo do hero, casa com a borda da foto |
| `--noite` | #0C1729 | Seções intermediárias (fundo do #caminho) |
| `--aco-1` | #16243A | Superfícies, círculos de ícone |
| `--gelo` | #FFFFFF | Texto principal (na camada base, #E9EEF5) |
| `--nevoa` | #AEBBCC | Texto de apoio |
| `--nevoa-2` | #93A3B8 | Legendas |
| `--prata` | degradê azul #8FD0FF → #3D8BFF, com brilho suave (`text-shadow` azul a 25%) | Destaques de título e de preço (texto com `background-clip`). O nome ficou da camada base, que era prateada (#FFFFFF → #D9E2EE → #9FB2CB) |

A interface é azul-noite com os destaques em azul (identidade aprovada pelo cliente; ver Identidade oficial). Nenhum neon, roxo ou outra cor saturada. Nenhum botão de cor que destoe da página: o botão continua prateado.

### Tipografia

- Geist em tudo. H1 inteiro em 700; títulos de seção (`.h2`) em 600 com o destaque em 700, no degradê azul.
- Títulos com `letter-spacing` negativo (-0.02em) e `text-wrap: balance`.
- O H1 é uma frase corrida, sem quebra forçada.
- Corpo entre 16 e 18 px, `line-height` 1.6 a 1.7, linha com no máximo uns 60 caracteres.

### Superfícies e efeitos

- Vidro: degradê escuro translúcido + `backdrop-filter: blur(16 a 20px)` + borda de 1 px em prata a 15 a 20 por cento + brilho interno no topo. Só onde há imagem ou luz atrás.
- Grão sutil por cima da página inteira (`assets/img/grain.png`, `mix-blend-mode: overlay`). Ele carrega com a página: adiado para depois do load, piorou o Lighthouse (o `body::after` cobre a tela inteira, vira o candidato a LCP quando aparece e atrasa o Speed Index).
- Luz: cada seção tem um ponto de luz difusa (radial azul-noite), nunca fundo chapado.
- Botão principal: pílula prateada metálica com texto escuro, dentro de um anel de vidro (borda #3D8BFF a 60% e brilho azul), seta branca num círculo em degradê de #2F6FE0 a #0E2F70 e um reflexo que atravessa o botão a cada poucos segundos (desligado com `prefers-reduced-motion`). Ao passar o mouse ou com foco pelo teclado: o reflexo passa na hora, o botão sobe 2 px, clareia, o anel ganha brilho embaixo e a seta sai pela direita do círculo e volta pela esquerda (300 ms, `cubic-bezier(.2,.8,.2,1)`). No `:active`, em todos os aparelhos e também no botão da barra fixa: `scale(.98)` e menos brilho. Sem movimento, só o brilho muda.
- Botões em maiúsculas (pedido do cliente, vale para a página inteira): todos os botões de compra e de ação, inclusive o da barra fixa, com o texto em maiúsculas por CSS (`text-transform: uppercase`), `letter-spacing: .04em` e peso 600. No HTML, o texto continua em caixa normal. Só os botões: rótulos, títulos e o resto da página continuam em caixa normal.
- Botão grande (`.cta--grande`) em todos os botões de compra (hero, #transformacao, #caminho, #oferta, #autor e #fechamento), cada um com o seu texto: o mesmo botão principal, com o mesmo prateado e os mesmos efeitos, com 76 px de altura e a seta no círculo. A barra fixa continua com o botão compacto. A partir de 375 px de tela (os iPhones de 390 e 393 px incluídos), o rótulo fica em uma linha e o botão acompanha o texto, mesmo que passe da coluna (centrado, a pelo menos 12 px das bordas da tela); abaixo de 375 px, quebra em duas linhas parelhas. No celular, a fonte vai de 13,7 px em 375 px a 18 px em ~458 px; no desktop, 18 px (mínimos: 13 px no celular, com espaçamento até .02em, folgas menores e o círculo da seta com pelo menos 40 px; 17 px no desktop. Se não couber, reduza a fonte antes de deixar quebrar). O botão da oferta ("Quero acessar o método completo", o rótulo mais longo, dentro do bloco de preço) tem conta própria: 13 px em 375 px, ~13,8 px em 390 px e ~15,6 px em 430 px, com .02em e o anel de 3 px.
- Cards da #transformacao: foto sem texto (`assets/img/cards/card-0N-nosso.jpg`, otimizada pelo `scripts/otimizar-imagens.mjs` de 480 a 1536 px, com 1280 para o celular em 2x) cobrindo o card, com um degradê azul-noite do lado do texto e o texto real por cima: o número no círculo de vidro com um fio prateado, o título (com o final em destaque) e a linha em `--nevoa`. Moldura de vidro escuro com cantos arredondados, sem hover (não são clicáveis). Uma coluna no celular (card 4:5, texto embaixo), 2 x 2 a partir de 761 px (4:3 a partir de 1024 px, texto à esquerda).
- Ícone da marca: o escudo (SVG do mockup). Usado em rótulos, listas e selo de garantia.

### Regras que não se negociam

- Nenhuma divisão seca entre seções. Sempre há degradê, curva, linha de luz, um elemento sobreposto à emenda ou cores iguais dos dois lados.
- Emenda entre seções não é espaço vazio. Toda passagem de uma seção para outra tem um elemento que pertence às duas: luz que atravessa, imagem que começa antes, objeto sobre a emenda ou conteúdo que sobe por cima. No desktop, no máximo uns 200 px de vazio entre o último conteúdo de uma seção e o primeiro da próxima.
- A foto do hero ocupa todo o fundo do hero, no desktop e no celular.
- As duas versões do hero (`hero-mobile.png` e `hero-desktop.png`) usam a mesma foto do Marcello: o banner do desktop é a foto do celular ampliada para os lados. Qualquer troca futura precisa manter isso.
- Rótulo de seção é texto em caixa normal com o pequeno escudo prateado. Nunca caixa alta com letras espaçadas e fio decorativo. (Exceção aprovada pelo cliente: o rótulo do hero, em maiúsculas espaçadas; ver Identidade oficial.)
- Nunca usar travessão (—) em nenhum texto.
- Nunca usar: fonte condensada, Inter, Roboto, emoji, cards idênticos com ícone, animação de entrada fora do Sistema de movimento (fade-and-slide-up disparado por tempo, cascata com delay), gradiente roxo, azul vivo fora dos destaques de texto, cantos e sombras iguais em tudo.
- Nunca inventar depoimento, número, prazo, conteúdo de manual ou prova social. O que não estiver na copy não existe.
- Nunca colocar efeito de hover em elemento que não é clicável. Hover só em link, botão e controle interativo.

### Identidade oficial

Aprovada pelo cliente em 25/10/2026 (antes testada como `?tema=vibrante`). A classe `.tema-vibrante` fica fixa no `<html>` e as regras da identidade ficam no fim do `<style>`, sob essa classe, por cima da camada base (prateada) do resto do CSS, trocando variáveis sempre que possível. Não há mais parâmetros de comparação na página.

- Destaques (`--prata`) em azul, de #8FD0FF a #3D8BFF, com brilho suave; texto principal (`--gelo`) em #FFFFFF.
- H1 inteiro em 700; títulos de seção em 600 com o destaque em 700; `letter-spacing: -0.02em`. Números das etapas e dos livros da oferta em 700.
- Hero: a segunda frase da subheadline (`.lead-2`) em 600 e branca; rótulo com borda #3D8BFF, brilho azul e texto em maiúsculas espaçadas (.2em no desktop; .06em no tablet e .02em no celular, em 11 px, para caber em uma linha a partir de 380 px); no celular, rótulo, H1, subheadline e botão centralizados. Sombra presa ao H1 mais forte e também no tablet: o azul é mais escuro que o prateado (contraste mínimo medido de 5,1:1).
- Caixas de números do hero: ícone à esquerda e um fio vertical (também no celular); a logo do Instagram em cores (SVG) e um grupo de pessoas em #3D8BFF.
- Botões em maiúsculas, prateados, com o anel e a seta azuis (ver Superfícies e efeitos).
- Cards e painéis de vidro (cards do hero, checklist e contador, cards da transformação, painel e bloco de preço da oferta, cápsula e círculos dos livros, garantia, FAQ): borda azul (#3D8BFF a 30 a 45%) e brilho azul bem suave.
- Imagem de compartilhamento (`assets/img/og.jpg`, `npm run og --prefix scripts`) com a mesma identidade: rótulo na cápsula azul e H1 em 700 com o destaque azul.

## Ordem das seções (com os ids)

1. `#hero`: foto de fundo, o rótulo "Conheça o método De Desprezado a Respeitado" numa cápsula de vidro com o escudo (uma linha a partir de 380 px; abaixo disso, duas linhas centradas; sempre abaixo da barba), H1, subheadline, botão grande, dois cards de vidro (419 mil seguidores, +12 mil homens)
2. `#transformacao`: título, apoio, os quatro cards (foto com texto real, ver Superfícies e efeitos), frase e botão
3. `#identificacao`: checklist interativo de 5 itens com contador, o texto que aparece a partir do primeiro item marcado e o destaque final
4. `#caminho` (substituiu o `#conteudo`): as 3 etapas num trilho (horizontal a partir de 1024 px; vertical no celular e no tablet), botão e, na emenda com a `#oferta`, o escudo que se enche de prata com a rolagem
5. `#oferta`: rótulo "Conheça o método" e título "De Desprezado a Respeitado"; os três livros em pé na mesa, o principal no centro, maior, com a capa oficial dourada (`assets/img/capa-oficial-dourada.png`, aprovada pelo cliente e definitiva), e dos lados O Jogo Sujo dos Relacionamentos (`capa-jogo-sujo.png`) e Chega de Engolir Calado! (`capa-engolir-calado.png`), com 80% da largura e girados para dentro (no celular, metidos atrás do central); no desktop, o palco começa por trás do fim do `#caminho`. Abaixo do palco, a cápsula "3 materiais integrados + aplicação prática". Painel com os três livros (número no círculo de vidro, linha de destaque, nome e apoio), o bloco "Do conhecimento à ação" e o bloco de preço, sem preço riscado: a frase em cima (16 px, --nevoa), "12x de" pequeno acima de "R$ 9,83" grande (72 px no celular, 88 px no desktop, 600, com o degradê dos destaques e um brilho difuso atrás, nunca quebra), "ou R$ 95 à vista" numa cápsula, o botão, o escudo com "Garantia de 7 dias" e a nota
6. `#autor`: o card do Marcello e, na mesma seção, a prova social ("Direto da DM"): 8 prints reais da DM (`assets/img/prints/`, com o cabeçalho do Instagram borrado no próprio print); no desktop, carrossel contínuo de borda a borda. Botão no fim
7. `#faq`: a garantia num card de vidro (`id="garantia"`) e as perguntas. No desktop, a garantia fica na coluna esquerda, abaixo do título; no celular, é o primeiro item, logo depois da `#autor`.
8. `#fechamento`: título grande, texto e bloco de compra com o botão grande; depois, o rodapé
9. Barra fixa no celular

## Checkout, rastreamento e dados

- Origens de tráfego: só as quatro rotas vendem: a página abre em `/bio/`, `/sdr/`, `/tfg/` e `/story/`, cada rota com o seu checkout. Uma página só: o `.htaccess` (Hostinger, hospedagem final) e o `_redirects` (Netlify, prévia) reescrevem `/bio`, `/bio/` e as outras, com status 200, para o `/index.html`, e o endereço na barra continua o da rota. Nunca copie o `index.html` para pastas. A raiz não vende: ela é a página de links (`links.html`, ver Página de links), servida em `/` por reescrita interna (no `.htaccess`, o `DirectoryIndex links.html` e a regra `^$`; no `_redirects`, `/ /links.html 200!` antes de tudo). O pedido direto de `/index.html` e de `/links.html` responde 404 com a `404.html` (no `.htaccess`, pelo `%{THE_REQUEST}`, que não muda nas reescritas internas da raiz e das rotas; no `_redirects`, com `404!` antes das rotas), e qualquer outro endereço que não exista também. A `404.html` é simples: fundo azul-noite, o escudo, "Esta página não está disponível." e um link discreto para o Instagram do Marcello; sem botão de compra, sem rastreio (sem GTM e sem pixel), `noindex` e caminhos a partir da raiz. As quatro rotas têm o `canonical` e o `og:url` em `https://nunca-mais-seja-desprezado.com.br/bio/`.
- Checkouts: no topo do script do checkout (no fim do `index.html`), o objeto `CHECKOUTS` (`padrao`, `bio`, `sdr`, `tfg`, `story`). O script lê o primeiro segmento do caminho e põe o checkout correspondente em todos os botões de compra, inclusive o da barra fixa; fora das quatro rotas, usa o `padrao`, que fica com o link da bio só como segurança (a raiz não vende; o `padrao` só aparece se a página de vendas abrir fora das rotas, como a raiz no Live Server). Sem JavaScript, os botões levam ao href do HTML, que é o `padrao` (se ele mudar, troque também os href). Links: `padrao` https://chk.eduzz.com/R9JXO4OZ0X (o mesmo da bio), `bio` https://chk.eduzz.com/R9JXO4OZ0X, `sdr` https://chk.eduzz.com/60E2O4KBW3, `tfg` https://chk.eduzz.com/E0DKJ47691, `story` https://chk.eduzz.com/39VKR26KWR.
- Teste das rotas no localhost: o Live Server não lê o `.htaccess` nem o `_redirects`, então localmente a raiz continua abrindo a página (com o checkout padrão) e `/bio/` não existe. Tudo bem: só em `localhost` e `127.0.0.1`, `?origem=bio` (`sdr`, `tfg`, `story`) simula a rota; em produção, o parâmetro é ignorado. A `404.html` se confere direto em `/404.html`, e a página de links em `/links.html` (no Live Server a raiz continua sendo a página de vendas).
- Um script curto repassa para o link do checkout todos os parâmetros que chegaram na URL da página (`utm_*`, `src`, `sck`, `fbclid` e o que mais vier), para o tráfego pago não perder a origem da venda. Só `rastreio` e `origem` (as chaves de teste do localhost) não vão.
- Google Tag Manager `GTM-5KX5J7J6` no `<head>` e o `<noscript>` logo após o `<body>`, como na página atual.
- Pixel da Meta `1434833234924777`. Antes de instalar o código base, perguntar ao desenvolvedor se o pixel já dispara dentro do GTM. Se sim, não instalar de novo (PageView duplicado estraga a otimização das campanhas).
- `InitiateCheckout`: o checkout da Eduzz dispara sozinho ao abrir. A página não dispara esse evento (contaria em dobro); o clique de compra não tem nenhum evento do pixel. O `clique_botoes` do GA4 vem do contêiner do GTM.
- Botões de compra abrem o checkout em nova guia (`target="_blank"`, `rel="noopener"`, sem `noreferrer`). No toque (`pointer: coarse`), o JS os deixa na mesma guia, por causa do navegador interno do Instagram.
- Preço: R$ 95 à vista ou 12x de R$ 9,83. Sem preço de referência riscado (a copy v3 não tem; ver `PENDENCIAS.md`).

## Interações

- Checklist: botões reais com `aria-pressed`, o contador ("N de 5 situações marcadas") em `aria-live="polite"`. O texto abaixo da lista (`aria-live`) aparece a partir do primeiro item marcado e some com 0; sem JS, fica visível. O destaque final fica sempre visível, depois da lista. No celular, o contador é uma barra compacta de vidro, só com "N de 5 situações marcadas", sticky no pé da tela enquanto a lista está na tela, que para logo abaixo da lista.
- FAQ: `<details>` e `<summary>` nativos, o primeiro aberto.
- Barra fixa do celular: aparece depois que o hero sai da tela e some enquanto a lista da #identificacao (onde fica a barra do contador), o painel de preço da #oferta (a partir do momento em que o topo dele passa de 60% da altura da tela), o botão do #fechamento ou o rodapé estão visíveis (no #caminho e no palco dos livros, ela aparece) (`IntersectionObserver`). Respeitar `env(safe-area-inset-bottom)`.
- Prints: cada card mostra o print inteiro, na altura natural (sem corte). As cores dos prints não mudam (só `brightness(.94)`). No celular, fileira horizontal com `scroll-snap`. A partir de 761px, carrossel de borda a borda em loop (~40px/s, só `transform`), com setas embaixo (um card por clique; o movimento volta 4s depois). Pausa com o mouse sobre um card (que cresce, enquanto os outros visíveis apagam), com um card focado pelo teclado, fora da tela e com a galeria aberta. Com `prefers-reduced-motion`, vira rolagem horizontal com `scroll-snap`, sem zoom.
- Galeria dos prints (`<dialog>`): abre no print clicado, navega pelos 8 com botões, setas do teclado e, no toque, deslizando; dá a volta; contador "N de 8" em `aria-live`; o foco fica nos botões dela e volta para o card ao fechar.
- Movimento: segue o Sistema de movimento, logo abaixo.

## Sistema de movimento

Vale para a página inteira, inclusive para as seções que ainda vão ser feitas. Os valores estão no `<style>` do `index.html`, no bloco "Sistema de movimento".

### Rolagem suave (Lenis)

- Lenis como arquivo local em `assets/js/lenis.min.js`, sem CDN. O script do fim da página só o baixa depois do load, e só quando ele vai ser usado (mouse ou trackpad, sem movimento reduzido); até lá, a rolagem é nativa. Assim ele fica fora da abertura da página. A versão fica registrada em `scripts/package.json`; para atualizar: `npm install --prefix scripts` e `npm run lenis --prefix scripts`.
- Ativo só com mouse ou trackpad (`any-pointer: fine`). No toque, rolagem nativa (`syncTouch: false`). Desligado com `prefers-reduced-motion`. Sem JS, rolagem nativa.
- Com o Lenis ativo, `html` fica com `scroll-behavior: auto`, para as rolagens do próprio navegador (foco por Tab, busca na página) não brigarem com ele.
- Links internos (`href="#..."`) rolam pelo Lenis, descontam o que estiver fixo no topo (`scroll-margin-top`, variável `--topo-fixo`) e levam o foco ao destino. Se surgir um elemento fixo no topo, ajuste `--topo-fixo`.
- Com um `<dialog>` aberto, o Lenis para (o JS observa o atributo `open`) e a rolagem dentro do dialog fica com o navegador (opção `prevent`).

### Revelação com desfoque (`.reveal`)

- Amarrada à rolagem (`animation-timeline: view()`), nunca a tempo: nada de `animation-delay`, `setTimeout` ou `IntersectionObserver` para animar entrada.
- Entrada: o bloco entra por baixo com `blur(10px)`, opacidade 0 e `translateY(24px)`, e fica nítido, opaco e no lugar quando chega a 35% da altura da tela, contando de baixo. No celular: blur de 6 px e 16 px de deslocamento.
- Saída: ao passar pelo topo da tela, desfoca até 4 px e vai a 60% de opacidade. Discreta, para não atrapalhar quem volta para reler.
- O desfoque fica nos textos e títulos. Imagens, cards grandes (cards da #transformacao, livros da mesa, painel da oferta, card do autor, prints, card da garantia) e blocos com mais de ~400 px de altura usam `.reveal.rv-leve`: a mesma faixa de rolagem, sem desfoque (entrada só com opacidade e deslocamento; saída só até 60% de opacidade). O `blur` roda na thread principal e era a maior causa de quadros lentos na rolagem do desktop.
- `.reveal-saida`: só a saída. Usada no hero, onde H1 e subheadline são o LCP e não podem ter entrada.
- Aplicar em blocos: título, parágrafo, card, linha de lista. Nunca palavra por palavra.
- Itens de uma lista entram em sequência pelo próprio deslocamento. Itens lado a lado numa grade usam `--rv-atraso` (em `svh`) por item, que atrasa a faixa de rolagem, nunca o tempo.
- Tudo dentro de `@supports (animation-timeline: view())` e de `prefers-reduced-motion: no-preference`. Sem suporte, o elemento aparece normal, sem efeito e sem JS de fallback.
- Nunca aplicar num elemento que contém vidro (`backdrop-filter`): o `filter` do pai corta o fundo que o vidro desfoca. Aplique no próprio vidro ou nos filhos.
- Nunca aplicar no elemento sticky; aplique nos filhos dele.
- Nunca aplicar dentro de um elemento com `overflow: hidden` (nem `auto` ou `scroll`): ele vira contêiner de rolagem, o `view()` mede contra ele e a animação não roda. Para cortar, use `overflow: clip`. Numa fileira que rola de verdade (scroll-snap), use uma `view-timeline` com nome na própria fileira, como nos prints da #autor.
- Nunca aplicar nos blocos do fim da página (frase final do fechamento, rodapé): a rolagem acaba antes de eles chegarem a 35% da tela e ficariam desfocados.
- Nunca aplicar em fotos grandes, palco de imagem ou seção inteira. O Chrome não leva animação de `blur` para a GPU: ela roda na thread principal e o custo cresce com a área desfocada. O desfoque vai em blocos de texto; nos blocos grandes e com imagem, `.rv-leve`.

## Performance e acessibilidade

- LCP abaixo de 2,5 s em 4G (DevTools: Slow 4G + CPU 4x). A imagem do hero é o LCP: `<picture>` com a versão vertical no celular e a horizontal no desktop, `fetchpriority="high"`, sem lazy-load. Todo o resto com `loading="lazy"`.
- Peso total da primeira tela no celular: abaixo de 400 KB.
- Contraste mínimo 4,5:1 no texto. Foco de teclado visível. Alvos de toque com pelo menos 44 px. `alt` descritivo em toda imagem de conteúdo, `alt=""` nas decorativas. `lang="pt-BR"`.
- Unidades `svh`/`dvh` no lugar de `vh` em alturas de tela.
- `content-visibility` não está aplicado: a contenção de pintura que ele liga corta tudo que passa da borda da seção (as luzes que atravessam as emendas e o palco da #oferta, que começa por trás do #caminho), e o ganho medido foi pequeno (cerca de 16 ms no FCP com CPU 4x). Ver a rodada de performance no `docs/PROGRESSO.md`.

## SEO e compartilhamento

- `<title>`, `meta description` e as tags de compartilhamento estão no topo do `docs/copy.md`. Open Graph e Twitter Card com uma imagem 1200x630 gerada a partir do hero desktop (com o H1 por cima). Favicon com o escudo. `canonical` e `og:url` em `https://nunca-mais-seja-desprezado.com.br/bio/` (a raiz é a página de links, com canonical próprio); `og:image` e `twitter:image` em `https://nunca-mais-seja-desprezado.com.br/assets/img/og.jpg`.

## Página de links (`links.html`, a raiz do domínio)

A "bio" do Marcello: `https://nunca-mais-seja-desprezado.com.br/` mostra os links dele; a página de vendas continua nas quatro rotas. Mockup aprovado em `_entrada/links-assets/` (`referencia-celular.html` e `referencia-desktop.html`, formato de ferramenta de design, fora do git): a página reescreve os valores dele em HTML e CSS limpos.

- Autocontida como o `index.html`: CSS e JS inline, caminhos a partir da raiz, Geist local, os mesmos favicons. Sem Lenis e sem a assinatura do Studio Alto Nível (decisão do desenvolvedor).
- Uma coluna: 100% com 20 px de margem, até 420 px, e 28 px acima do avatar. A partir de 768 px (56 px acima do avatar), coluna de 390 px centralizada sobre a foto do Marcello desfocada (blur 26 px, opacidade .55) com um véu escuro. Fundo #050A14, brilho radial azul no topo e o grão.
- Topo: avatar de 108 px com anel em degradê azul, "Marcello Gomes" com o selo de verificado, "@marcellopgomes" e a bio em duas linhas fixas, uma frase por linha: "Mentor de relacionamentos." / "Especialista em comportamento humano." (15 px, sem quebrar a segunda linha: em 360 px ela mede 282 px de 320; se um texto novo não couber, reduza a fonte só abaixo de 375 px). O mesmo texto, numa linha, no `meta description`, no `og:description` e no `twitter:description`. Três blocos de raio 20 px: o De Desprezado a Respeitado com 214 px de altura (o produto principal, a diferença é intencional) e o Arsenal e o WhatsApp com 188 px, cada um com o conteúdo centralizado na vertical (respiro igual em cima e embaixo: ~30 a 35 px no Arsenal e ~40 px no WhatsApp), cada um inteiro um link (`<a>`): De Desprezado a Respeitado (`/bio/`, mesma aba, foto num `<img>` com prioridade), Arsenal Homem Blindado (`https://arsenal-homem-blindado.com.br/bio`, nova aba) e WhatsApp. Rodapé com o Instagram (nova aba) e "© 2026 Marcello Gomes". Textos dos botões: "Chega de ser desprezado", "Não quero mais ser enganado" e "Chamar no WhatsApp" (maiúsculas por CSS). Título do Arsenal: "Chega de ser enganado ou traído!", com a quebra fixa em três linhas ("Chega de ser / enganado / ou traído!") e o degradê carmim (`.verdade`) só em "enganado" e em "traído!"; "Chega de ser" e "ou" ficam brancos. A Cinzel do subset cobre o "í" e o "!" (conferido pelas fontes que o Chrome usa no título: só Cinzel).
- Os três botões pílula são iguais na forma e nunca quebram (`nowrap`); só o brilho e o círculo da seta mudam de cor. Medidas (os três iguais, mesmo que só um precise): 40 px de altura, texto de 11,5 px (pode ir a 11 px, sempre o mesmo nos três), padding esquerdo de 16 px e a seta de 16 px num círculo de 30 px. Numa linha só em 360, 375, 390 e 430 px, a pelo menos 12 px da borda direita do card em 360 px (o do Arsenal, o mais longo, fica a ~35 px). Ficam por cima da foto, do produto e do celular.
- Nada se sobrepõe dentro dos blocos (o mockup tinha sobreposições em 360 e 390 px). Cada bloco é um contêiner (`container-type: inline-size`), então o desktop, com a coluna de 390 px, fica igual ao celular de 390 px. Arsenal: título de 18 px (tela de 360) a 20 px (390) e até 21 px; a caixa de produtos ocupa a parte de cima do card, com `min(60%, 210px)`, `right: -28px` e `bottom: -4px` (a base sai 3 px pela borda de baixo, assentada pela sombra; o limite de 210 px deixa o topo da caixa a pelo menos 8 px da borda de cima: 25 px em 360, 17 em 375, 10 em 390 e 9 em 430). O logo "ARSENAL" fica inteiro acima do botão (folga até o topo do botão: 11,7 px em 360, 17,6 em 375, 23,5 em 390 e 25,8 em 430; o mínimo é 6), e a linha mais longa do título ("Chega de ser") termina pelo menos 8 px antes dos livros (11,2 / 10,2 / 9,2 / 31 px). Se um título novo não couber, reduza-o pelo `clamp`. WhatsApp: título de 22 px abaixo de 375 px de tela e 24 px a partir daí; celular de 120 px, inclinado -7° (girando pelo topo) e com a máscara que desbota embaixo, a 8 px do topo do card e na borda direita (0 px). Nas telas abaixo de 390 px ele diminui, com a mesma inclinação e máscara, e sai no máximo 10 px pela borda: escala .88 e 8 px para fora na tela de 375 (bloco de 333 a 347 px por dentro da borda; em 390 o bloco tem 348 px e o celular volta ao tamanho cheio) e .82, 16 px para fora e encostado no topo na tela de 360 (bloco abaixo de 333 px). Em 360, os 12 px até o botão e os 10 px de saída só fecham juntos com .82 (com .88, o celular sairia ~17 px). Como ele gira pelo topo, a borda esquerda fica mais à esquerda quanto mais alto o ponto: é ela que limita a folga até o botão; meça pela matriz de transformação do navegador, não pela caixa. Medidas (botão / título / quanto sai pela borda): 12,5 / 51,9 / 9 px em 360; 15,1 / 39,7 / 4,9 em 375; 14,8 / 39,5 / 4,7 em 390; 44,8 / 69,5 / 4,7 em 430. "Equipe Marcello" e as mensagens ficam inteiros na tela. Conferido em 360, 375, 390 e 430 px.
- Cantos no Safari: o WebKit não respeita o `border-radius` do `overflow: hidden` em filhos com `filter`, `transform` ou animação. Por isso: os borrões do WhatsApp são degradês radiais no fundo do próprio card (nunca `filter: blur` dentro do bloco), e o conteúdo de cada bloco fica numa camada `.recorte` com `clip-path: inset(0 round 19px)` e `isolation: isolate` (no próprio `<a>`, o `clip-path` cortaria os halos e as sombras). Conferido no WebKit, parado e com o hover. Hover só nos blocos e só com mouse (sobe 3 px, a seta anda 3 px), `:active` com leve scale e `:focus-visible` visível.
- Exceções às regras da página de vendas, só aqui: a fonte Cinzel 700 (`assets/fonts/cinzel-700-latin.woff2`, OFL em `OFL-Cinzel.txt`) no título do Arsenal; as cores vinho e carmim (Arsenal) e verde (WhatsApp); e a entrada em cascata no carregamento (por tempo, com `animation-fill-mode: backwards` para o hover funcionar depois), desligada com `prefers-reduced-motion`. A cascata é só deslocamento, sem fade: os blocos ficam visíveis desde o primeiro quadro (com o fade, o LCP esperava a animação e o GTM e o pixel entravam nele; a nota do celular com rastreio caía de 90 para 66). O brilho do topo fica numa camada `.luz` com `overflow: hidden`, e `html` e `body` têm `overflow-x: clip` (com `hidden` de reserva): sem isso, o brilho de 620 px abria rolagem lateral.
- WhatsApp: a constante `WHATSAPP_NUMERO` no topo do script (formato 55DDDNUMERO). Com número, o bloco abre `https://wa.me/NUMERO?text=...` em nova aba, com a mensagem "Oii, estou com uma dúvida sobre o material". Sem número, o bloco aparece mas o clique não faz nada (e o console avisa no localhost). Ver `PENDENCIAS.md`.
- Rastreio: o mesmo GTM e o mesmo pixel do `index.html` (só PageView), desligados no localhost como lá. Clique em cada bloco: `dataLayer.push({event: 'clique_link', destino: 'desprezado' | 'arsenal' | 'whatsapp'})` (o do WhatsApp só com número), sem evento no pixel; o GA4 só recebe se houver uma tag para ele no contêiner. As `utm_*` que chegarem na URL vão para os dois primeiros blocos; nenhuma UTM fixa (no link interno, ela sobrescreveria a origem da sessão no GA4).
- Imagens: originais em `assets/img/links/`, otimizadas pelo `scripts/otimizar-imagens.mjs` (`links-perfil`, a foto de perfil atual do Instagram, `links-fundo` e `links-arsenal`, este com transparência e PNG de reserva). O `og:image` é a foto de perfil de 480 px.

## Como trabalhar neste projeto

- Em uma sessão nova, leia docs/PROGRESSO.md antes de qualquer outra coisa.
- O trabalho segue as etapas de `docs/PROMPTS.md`, uma por vez. Toda etapa termina na regra de parada descrita lá: pare, mande o relatório no formato pedido e espere a palavra APROVADO antes de seguir.
- A cada APROVADO, nesta ordem: atualize o `docs/PROGRESSO.md` com a etapa e as decisões aprovadas, faça commit e push, e só então comece a etapa seguinte.
- A página é conferida com o Live Server do VS Code (localhost), aberto na raiz do projeto. Todo arquivo do projeto (imagens, fontes, favicons, scripts, preload, srcset, `url()` do CSS) é pedido a partir da raiz (`/assets/...`, `/favicon.svg`): a mesma página abre em `/bio/`, `/sdr/`, `/tfg/` e `/story/`, e um caminho relativo viraria `/bio/assets/...`, que não existe. Links de âncora (`#oferta`) continuam como estão.
- Não altere uma seção já aprovada sem pedido explícito.
- Trechos entre colchetes na copy (por exemplo `[dado que falta do cliente]`) são pendências: renderize com a classe `.pendente` (contorno tracejado âmbar, bem visível) e liste em `PENDENCIAS.md`. Nada com essa classe pode ir ao ar.
- Ao final de cada seção, confira no celular (390 px) e no desktop (1440 px).
