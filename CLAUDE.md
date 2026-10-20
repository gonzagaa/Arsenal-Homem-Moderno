# Arsenal Homem Blindado: landing page

Landing page de venda do Arsenal Homem Blindado, um combo de quatro manuais digitais (PDF) de Marcello Gomes, criador com 419 mil seguidores no Instagram que fala sobre posicionamento masculino, traição, manipulação e honra.

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

- Site estático. Um `index.html` na raiz, com CSS e JS inline (são poucos KB e evitam requisições extras). Única exceção: o Lenis, em `assets/js/lenis.min.js` (ver Sistema de movimento). Sem framework, sem build obrigatório, sem jQuery.
- Imagens otimizadas em `assets/img/opt/`, em AVIF e WebP com fallback JPG, servidas por `<picture>` com `srcset` e `sizes`. Toda `<img>` com `width` e `height` para não haver salto de layout.
- Fonte: Geist hospedada localmente (`assets/fonts/geist-latin.woff2`, arquivo variável com subset latino, licença OFL ao lado), com `preload` e `font-display: swap`. Nenhuma outra família.
- Mobile-first de verdade. Testar em 390 px de largura antes de qualquer outra.
- Funcionar sem JavaScript: todo o conteúdo aparece, os links levam ao checkout. O JS só melhora (checklist, barra fixa, lightbox, rolagem suave).
- Exceção pedida pelo desenvolvedor: a assinatura do Studio Alto Nível (`https://cdn.studioaltonivel.com/footer.js`, com `defer`), que insere o rodapé "Desenvolvido por" no fim do `<body>` com estilo e fonte próprios. O único ajuste da página sobre ele é o fundo #000000 (`html body #san-footer-badge`).

## Design (os valores exatos estão no CSS do mockup)

### Cores

| Token | Hex | Uso |
| --- | --- | --- |
| `--abismo` | #050A14 | Fundo base da página |
| `--abismo-hero` | #01050F | Fundo do hero, casa com a borda da foto |
| `--noite` | #0C1729 | Seções intermediárias (sistema, antes e depois) |
| `--aco-1` | #16243A | Superfícies, círculos de ícone |
| `--gelo` | #E9EEF5 | Texto principal |
| `--nevoa` | #AEBBCC | Texto de apoio |
| `--nevoa-2` | #93A3B8 | Legendas |
| `--prata` | degradê #FFFFFF → #D9E2EE → #9FB2CB | Destaques de título (texto com `background-clip`) |

Nenhum azul elétrico, neon ou cor saturada. Nenhum botão de cor que destoe da página. O azul vem das fotos; a interface é azul-noite e prata.

### Tipografia

- Geist em tudo. O contraste vem do peso: títulos em 300, o trecho de destaque em 600 com o degradê prateado.
- Títulos com `letter-spacing` negativo (cerca de -0.03em) e `text-wrap: balance`.
- O H1 é uma frase corrida, sem quebra forçada.
- Corpo entre 16 e 18 px, `line-height` 1.6 a 1.7, linha com no máximo uns 60 caracteres.

### Superfícies e efeitos

- Vidro: degradê escuro translúcido + `backdrop-filter: blur(16 a 20px)` + borda de 1 px em prata a 15 a 20 por cento + brilho interno no topo. Só onde há imagem ou luz atrás.
- Grão sutil por cima da página inteira (`assets/img/grain.png`, `mix-blend-mode: overlay`).
- Luz: cada seção tem um ponto de luz difusa (radial azul-noite), nunca fundo chapado.
- Botão principal: pílula prateada metálica com texto escuro, dentro de um anel de vidro com brilho difuso, seta num círculo escuro e um reflexo que atravessa o botão a cada poucos segundos (desligado com `prefers-reduced-motion`).
- Ícone da marca: o escudo (SVG do mockup). Usado em rótulos, listas e selo de garantia.

### Regras que não se negociam

- Nenhuma divisão seca entre seções. Sempre há degradê, curva, linha de luz, um elemento sobreposto à emenda ou cores iguais dos dois lados.
- Emenda entre seções não é espaço vazio. Toda passagem de uma seção para outra tem um elemento que pertence às duas: luz que atravessa, imagem que começa antes, objeto sobre a emenda ou conteúdo que sobe por cima. No desktop, no máximo uns 200 px de vazio entre o último conteúdo de uma seção e o primeiro da próxima.
- A foto do hero ocupa todo o fundo do hero, no desktop e no celular.
- Rótulo de seção é texto em caixa normal com o pequeno escudo prateado. Nunca caixa alta com letras espaçadas e fio decorativo.
- Nunca usar travessão (—) em nenhum texto.
- Nunca usar: fonte condensada, Inter, Roboto, emoji, cards idênticos com ícone, animação de entrada fora do Sistema de movimento (fade-and-slide-up disparado por tempo, cascata com delay), gradiente roxo ou azul vivo, cantos e sombras iguais em tudo.
- Nunca inventar depoimento, número, prazo, conteúdo de manual ou prova social. O que não estiver na copy não existe.
- Nunca colocar efeito de hover em elemento que não é clicável. Hover só em link, botão e controle interativo.

## Ordem das seções (com os ids)

1. `#hero`: foto de fundo, H1, subheadline, botão, dois cards de vidro (419 mil seguidores, +12 mil homens)
2. `#identificacao`: checklist interativo de 7 itens com contador
3. `#virada`: cinco palavras empilhadas e o texto
4. `#sistema`: as quatro brechas e os quatro manuais (Arsenal em destaque largo, os outros três em cards com a cena)
5. `#antes-depois`
6. `#autor`
7. `#resultados`: 8 prints reais da DM (`assets/img/prints/`, com o cabeçalho do Instagram borrado no próprio print); no desktop, carrossel contínuo de borda a borda
8. `#para-quem`
9. `#oferta`: os quatro livros em pé sobre a mesa (o palco sobe por trás da frase final do `#para-quem`) + painel de preço
10. `#faq`: a garantia num card de vidro (`id="garantia"`) e as perguntas. No desktop, a garantia fica na coluna esquerda, abaixo do título; no celular, é o primeiro item, logo depois da oferta.
11. `#fechamento` + rodapé
12. Barra fixa no celular

## Checkout, rastreamento e dados

- Todo botão de compra aponta para `https://chk.eduzz.com/7WXGDYN20A`.
- Um script curto repassa para o link do checkout todos os parâmetros que chegaram na URL da página (`utm_*`, `src`, `sck`, `fbclid` e o que mais vier), para o tráfego pago não perder a origem da venda.
- Google Tag Manager `GTM-5KX5J7J6` no `<head>` e o `<noscript>` logo após o `<body>`, como na página atual.
- Pixel da Meta `1434833234924777`. Antes de instalar o código base, perguntar ao desenvolvedor se o pixel já dispara dentro do GTM. Se sim, não instalar de novo (PageView duplicado estraga a otimização das campanhas).
- Evento `InitiateCheckout` no clique de qualquer botão de compra, pelo mesmo canal que dispara o pixel (GTM ou código), nunca pelos dois.
- Preço: R$ 97 à vista ou 12x de R$ 10,03. Preço de referência riscado: R$ 297.

## Interações

- Checklist: botões reais com `aria-pressed`, o contador em `aria-live="polite"`, a frase muda com 0, 1 a 2, ou 3 ou mais marcados. Sem JS, aparece a frase de 1 a 2. No celular, o contador é uma barra compacta de vidro, sticky no pé da tela enquanto a lista está na tela, que para logo abaixo do último item.
- FAQ: `<details>` e `<summary>` nativos, o primeiro aberto.
- Barra fixa do celular: aparece depois que o hero sai da tela e some enquanto a #identificacao (onde fica a barra do contador), a oferta, o botão do #fechamento ou o rodapé estão visíveis (`IntersectionObserver`). Respeitar `env(safe-area-inset-bottom)`.
- Prints: cada card mostra o print inteiro, na altura natural (sem corte). As cores dos prints não mudam (só `brightness(.94)`). No celular, fileira horizontal com `scroll-snap`. A partir de 761px, carrossel de borda a borda em loop (~40px/s, só `transform`), com setas embaixo (um card por clique; o movimento volta 4s depois). Pausa com o mouse sobre um card (que cresce, enquanto os outros visíveis apagam), com um card focado pelo teclado, fora da tela e com a galeria aberta. Com `prefers-reduced-motion`, vira rolagem horizontal com `scroll-snap`, sem zoom.
- Galeria dos prints (`<dialog>`): abre no print clicado, navega pelos 8 com botões, setas do teclado e, no toque, deslizando; dá a volta; contador "N de 8" em `aria-live`; o foco fica nos botões dela e volta para o card ao fechar.
- Movimento: segue o Sistema de movimento, logo abaixo.

## Sistema de movimento

Vale para a página inteira, inclusive para as seções que ainda vão ser feitas. Os valores estão no `<style>` do `index.html`, no bloco "Sistema de movimento".

### Rolagem suave (Lenis)

- Lenis como arquivo local em `assets/js/lenis.min.js`, sem CDN, carregado com `defer` no fim da página. A versão fica registrada em `scripts/package.json`; para atualizar: `npm install --prefix scripts` e `npm run lenis --prefix scripts`.
- Ativo só com mouse ou trackpad (`any-pointer: fine`). No toque, rolagem nativa (`syncTouch: false`). Desligado com `prefers-reduced-motion`. Sem JS, rolagem nativa.
- Com o Lenis ativo, `html` fica com `scroll-behavior: auto`, para as rolagens do próprio navegador (foco por Tab, busca na página) não brigarem com ele.
- Links internos (`href="#..."`) rolam pelo Lenis, descontam o que estiver fixo no topo (`scroll-margin-top`, variável `--topo-fixo`) e levam o foco ao destino. Se surgir um elemento fixo no topo, ajuste `--topo-fixo`.
- Com um `<dialog>` aberto, o Lenis para (o JS observa o atributo `open`) e a rolagem dentro do dialog fica com o navegador (opção `prevent`).

### Revelação com desfoque (`.reveal`)

- Amarrada à rolagem (`animation-timeline: view()`), nunca a tempo: nada de `animation-delay`, `setTimeout` ou `IntersectionObserver` para animar entrada.
- Entrada: o bloco entra por baixo com `blur(10px)`, opacidade 0 e `translateY(24px)`, e fica nítido, opaco e no lugar quando chega a 35% da altura da tela, contando de baixo. No celular: blur de 6 px e 16 px de deslocamento.
- Saída: ao passar pelo topo da tela, desfoca até 4 px e vai a 60% de opacidade. Discreta, para não atrapalhar quem volta para reler.
- `.reveal-saida`: só a saída. Usada no hero, onde H1 e subheadline são o LCP e não podem ter entrada.
- Aplicar em blocos: título, parágrafo, card, linha de lista. Nunca palavra por palavra. A exceção são as cinco palavras da virada, porque cada uma é uma linha.
- Itens de uma lista entram em sequência pelo próprio deslocamento. Itens lado a lado numa grade usam `--rv-atraso` (em `svh`) por item, que atrasa a faixa de rolagem, nunca o tempo.
- Tudo dentro de `@supports (animation-timeline: view())` e de `prefers-reduced-motion: no-preference`. Sem suporte, o elemento aparece normal, sem efeito e sem JS de fallback.
- Nunca aplicar num elemento que contém vidro (`backdrop-filter`): o `filter` do pai corta o fundo que o vidro desfoca. Aplique no próprio vidro ou nos filhos.
- Nunca aplicar no elemento sticky; aplique nos filhos dele.
- Nunca aplicar dentro de um elemento com `overflow: hidden` (nem `auto` ou `scroll`): ele vira contêiner de rolagem, o `view()` mede contra ele e a animação não roda. Para cortar, use `overflow: clip`. Numa fileira que rola de verdade (scroll-snap), use uma `view-timeline` com nome na própria fileira, como na #resultados.
- Nunca aplicar nos blocos do fim da página (frase final do fechamento, rodapé): a rolagem acaba antes de eles chegarem a 35% da tela e ficariam desfocados.
- Nunca aplicar em fotos grandes, palco de imagem ou seção inteira. O Chrome não leva animação de `blur` para a GPU: ela roda na thread principal e o custo cresce com a área desfocada. Use em blocos de texto e cards.

## Performance e acessibilidade

- LCP abaixo de 2,5 s em 4G (DevTools: Slow 4G + CPU 4x). A imagem do hero é o LCP: `<picture>` com a versão vertical no celular e a horizontal no desktop, `fetchpriority="high"`, sem lazy-load. Todo o resto com `loading="lazy"`.
- Peso total da primeira tela no celular: abaixo de 400 KB.
- Contraste mínimo 4,5:1 no texto. Foco de teclado visível. Alvos de toque com pelo menos 44 px. `alt` descritivo em toda imagem de conteúdo, `alt=""` nas decorativas. `lang="pt-BR"`.
- Unidades `svh`/`dvh` no lugar de `vh` em alturas de tela.

## SEO e compartilhamento

- `<title>` e `meta description` a partir da headline. Open Graph e Twitter Card com uma imagem 1200x630 gerada a partir do hero desktop (com o H1 por cima). Favicon com o escudo. `canonical` para `https://arsenal-homem-blindado.com.br/`.

## Como trabalhar neste projeto

- Em uma sessão nova, leia docs/PROGRESSO.md antes de qualquer outra coisa.
- O trabalho segue as etapas de `docs/PROMPTS.md`, uma por vez. Toda etapa termina na regra de parada descrita lá: pare, mande o relatório no formato pedido e espere a palavra APROVADO antes de seguir.
- A cada APROVADO, nesta ordem: atualize o `docs/PROGRESSO.md` com a etapa e as decisões aprovadas, faça commit e push, e só então comece a etapa seguinte.
- A página é conferida com o Live Server do VS Code (localhost). Todo caminho de arquivo é relativo, nunca começando com `/`.
- Não altere uma seção já aprovada sem pedido explícito.
- Trechos entre colchetes na copy (por exemplo `[dado que falta do cliente]`) são pendências: renderize com a classe `.pendente` (contorno tracejado âmbar, bem visível) e liste em `PENDENCIAS.md`. Nada com essa classe pode ir ao ar.
- Ao final de cada seção, confira no celular (390 px) e no desktop (1440 px).
