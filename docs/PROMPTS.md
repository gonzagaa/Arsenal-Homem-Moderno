# Prompts de construção

> Histórico: as etapas 4 (o sistema) e 7 (oferta) descrevem o produto antigo, o Arsenal Homem Blindado (quatro manuais). O produto atual é o De Desprezado a Respeitado; a estrutura atual dessas seções está no `CLAUDE.md` e no `docs/PROGRESSO.md`.

A página é construída em 12 etapas, nesta ordem. O desenvolvedor manda uma etapa por vez no chat ("Faça a etapa 3"). Cada etapa termina numa parada obrigatória.

## Regra de parada (vale para todas as etapas)

Ao terminar a etapa:

1. **Pare.** Não comece a etapa seguinte, nem "adiantando" uma parte dela.
2. **Responda com este relatório**, nesta ordem:
   - **Feito:** o que foi construído, em tópicos curtos.
   - **Arquivos:** quais arquivos foram criados ou alterados.
   - **Decisões:** qualquer escolha que não estava no CLAUDE.md, na copy ou no mockup, e por quê.
   - **Diferenças do mockup:** onde o resultado ficou diferente da referência, e por quê.
   - **Pendências:** o que ficou marcado com `.pendente` ou depende de alguém.
   - **Como conferir:** o que olhar na página (seção, largura de tela, interação a testar).
3. **Espere a palavra APROVADO** antes de seguir. Se vier uma lista de ajustes no lugar, faça só os ajustes, mande o relatório de novo e espere outra vez.

A página é conferida no navegador com o Live Server do VS Code (localhost). Por isso todo caminho de arquivo é relativo (`assets/img/...`), nunca começando com `/`, para funcionar igual no localhost e na hospedagem.

---

## Etapa 0: leitura e plano (sem código)

```
Leia o CLAUDE.md, docs/copy.md, docs/mockup-referencia.html, PENDENCIAS.md e a lista de arquivos em assets/img.

Não escreva código nesta etapa. Me devolva:
1. Em 5 a 8 linhas, o que você entendeu do projeto e do critério de qualidade.
2. A estrutura de pastas e arquivos que você vai criar.
3. Como vai otimizar as imagens (ferramenta, formatos, larguras de cada uma).
4. Qualquer contradição ou dúvida entre os arquivos.

Siga a regra de parada do docs/PROMPTS.md.
```

## Etapa 1: base e imagens

```
Faça a etapa 1 do docs/PROMPTS.md.

- Crie o index.html com o <head> completo (charset, viewport, lang pt-BR, title e description provisórios, preconnect e Google Fonts com Geist 300/400/500/600) e o <body> vazio com a estrutura das 12 seções como <section> com os ids do CLAUDE.md, ainda sem conteúdo.
- No <style> inline: os tokens de cor do CLAUDE.md em :root, reset curto, tipografia base, o grão da página, e as peças reutilizáveis copiadas do mockup: .wrap, .pill (rótulo com o escudo), .silver (texto prateado), .h1, .h2, .lead, .body, .glass, .cta-ring + .cta (botão prateado com reflexo, desligado em prefers-reduced-motion) e .pendente (contorno tracejado âmbar).
- Gere as versões otimizadas de todas as imagens de assets/img em assets/img/opt/ (AVIF, WebP e JPG, nas larguras que você propôs na etapa 0). Deixe o script de otimização em scripts/ para eu poder rodar de novo quando chegarem os prints.
- Ainda não use o GTM nem o pixel.

Siga a regra de parada do docs/PROMPTS.md.
```

## Etapa 2: hero

```
Faça a etapa 2 do docs/PROMPTS.md: a seção #hero, igual ao mockup e com o texto exato da copy.

- Foto de fundo ocupando todo o hero: <picture> com hero-mobile (vertical) até 760px e hero-desktop (horizontal) acima, fetchpriority="high", sem lazy-load, com <link rel="preload"> responsivo no <head>.
- Desktop: texto à esquerda com recuo relativo à tela (como no mockup), foto preenchendo, degradê da esquerda para o texto e de baixo para emendar com a seção seguinte. Celular: foto cobrindo tudo, texto na parte de baixo sobre o degradê, botão visível na primeira tela sem rolar.
- H1 em uma frase corrida, sem quebra forçada.
- Botão de compra apontando para o checkout (o repasse de UTM vem na etapa 9).
- Cards de vidro com os dois números, abaixo do botão.
- A emenda com a seção seguinte não pode ser seca: linha de luz e o botão circular de vidro sobre a emenda, como no mockup.

Meça e informe no relatório: tamanho em KB da imagem do hero que carrega no celular e no desktop.

Siga a regra de parada do docs/PROMPTS.md.
```

## Etapa 3: identificação e virada

```
Faça a etapa 3 do docs/PROMPTS.md: as seções #identificacao e #virada.

- Checklist com 7 botões reais (<button type="button">), aria-pressed, o escudo vazio que se preenche de prata ao marcar, estado marcado com vidro iluminado. Contador "N de 7" com aria-live="polite" e a frase que muda conforme a copy (0 / 1 a 2 / 3 ou mais). Sem JS, aparece a frase de 1 a 2.
- No desktop, a coluna do título e do contador fica fixa (sticky) enquanto a lista rola, como no mockup. No celular, empilha.
- Virada: as cinco palavras empilhadas em peso 300, opacidade caindo palavra a palavra, a última em prateado. Texto e botão "Quero aprender antes" na coluna ao lado.
- A única animação de entrada da página fica aqui: as palavras surgem com a rolagem usando animation-timeline: view() dentro de @supports, estado final visível como padrão, nada em prefers-reduced-motion.
- A curva com contorno de luz no fim da virada, emendando com a próxima seção.

Siga a regra de parada do docs/PROMPTS.md.
```

## Etapa 4: o sistema

```
Faça a etapa 4 do docs/PROMPTS.md: a seção #sistema.

- Cabeçalho centralizado (rótulo, título, apoio).
- Card largo do Arsenal Homem Blindado com a cena da armadura à esquerda e o texto à direita; a imagem se dissolve no card. No celular, imagem em cima.
- Três cards com a cena de cada manual em cima (proporção 4:3), a imagem se dissolvendo no corpo do card, rótulo da brecha, nome do manual e a linha.
- Frase de fechamento centralizada.
- Todas as imagens com lazy-load, <picture> e alt descritivo.
- Sistema de movimento do CLAUDE.md em cada bloco novo: .reveal no cabeçalho, no card largo, em cada card do trio e na frase de fechamento. Os três cards lado a lado entram em sequência com --rv-atraso. Nunca .reveal num elemento que contenha vidro.

Siga a regra de parada do docs/PROMPTS.md.
```

## Etapa 5: antes e depois, e quem escreveu

```
Faça a etapa 5 do docs/PROMPTS.md: as seções #antes-depois e #autor.

- Antes e depois: duas colunas, "Antes" apagada, "Depois" em vidro iluminado com o escudo em cada linha. No celular, empilhadas. Frase grande e botão depois.
- Quem escreveu: o card de vidro sobe por cima do fim da seção anterior (margem negativa, como no mockup). Foto autor.png com moldura metálica e o escudo no topo, rótulo, título, @marcellopgomes com selo de verificado linkando para o Instagram, texto, a história pessoal como .pendente, e os três números.
- Sistema de movimento do CLAUDE.md em cada bloco novo: .reveal no cabeçalho, em cada linha das colunas Antes e Depois, na frase e no botão. O card de vidro do autor recebe .reveal nele mesmo, nunca no elemento pai.

Siga a regra de parada do docs/PROMPTS.md.
```

## Etapa 6: resultados e para quem é

```
Faça a etapa 6 do docs/PROMPTS.md: as seções #resultados e #para-quem.

- Resultados: mosaico de molduras de DM em colunas no desktop; no celular, fileira horizontal com scroll-snap mostrando um pedaço do próximo. Os prints ainda não existem: monte as molduras com espaços reservados marcados como .pendente, prontas para receber imagens. Toque numa moldura abre a imagem em tela cheia com <dialog> (fecha no X, no Esc e tocando fora), já funcionando para quando os prints chegarem.
- Para quem é: dois cards lado a lado, "Não é para você se" contido e "É para você se" em vidro iluminado. Depois, a frase grande "Conhecimento custa muito menos do que arrependimento."
- Sistema de movimento do CLAUDE.md em cada bloco novo: .reveal nos cabeçalhos, em cada moldura de print (no desktop, --rv-atraso por coluna), em cada card do Para quem é e na frase grande. Confira que o Lenis para com o <dialog> aberto e que a rolagem dentro dele continua funcionando.

Siga a regra de parada do docs/PROMPTS.md.
```

## Etapa 7: oferta

```
Faça a etapa 7 do docs/PROMPTS.md: a seção #oferta.

- Palco com oferta-mesa de fundo, se dissolvendo nas bordas e no topo.
- Os quatro livros em pé sobre a mesa, montados em HTML e CSS (não em imagem pronta): arte de cada capa de fundo, título e "Marcello Gomes" em texto real, tipografia com unidades de container (cqw) para escalar, luz de lombada na borda esquerda, sombra de contato na mesa, os das pontas levemente girados com perspective. O Arsenal maior, no centro.
- O painel de preço em vidro sobe por cima da borda inferior do palco. Lista dos quatro manuais à esquerda; preço, linha do jantar e botão à direita; linha de detalhes e a nota "Material digital em PDF" embaixo.
- No celular, livros menores lado a lado e o painel em uma coluna.
- Sistema de movimento do CLAUDE.md em cada bloco novo: .reveal no cabeçalho, no palco dos livros e no painel de preço (o painel é vidro, então .reveal vai nele mesmo).

Siga a regra de parada do docs/PROMPTS.md.
```

## Etapa 8: garantia, FAQ, fechamento, rodapé e barra fixa

```
Faça a etapa 8 do docs/PROMPTS.md: #garantia, #faq, #fechamento, o rodapé e a barra fixa do celular.

- Garantia: selo de escudo em SVG com o 7, texto em primeira pessoa e a assinatura (fonte provisória do mockup, marcada como .pendente até chegar a assinatura real em imagem).
- FAQ: <details>/<summary> nativos, o primeiro aberto, ícone de + e − como no mockup.
- Fechamento: escudo, pergunta grande, texto, botão e a frase final "Torne-se o homem que você respeitaria."
- Rodapé com os links; o responsável legal como .pendente.
- Barra fixa só no celular: aparece depois que o hero sai da tela e some enquanto a #oferta estiver visível (IntersectionObserver), respeitando env(safe-area-inset-bottom). Sem JS, ela não aparece.
- Sistema de movimento do CLAUDE.md em cada bloco novo, exceto a frase final "Torne-se o homem que você respeitaria." e o rodapé, que ficam sem efeito (a rolagem acaba antes de eles ficarem nítidos). Confira a barra fixa com o Lenis ativo.

Siga a regra de parada do docs/PROMPTS.md.
```

## Etapa 9: checkout e rastreamento

```
Faça a etapa 9 do docs/PROMPTS.md.

- Script que repassa para todos os links de checkout os parâmetros da URL da página (utm_*, src, sck, fbclid e qualquer outro), sem duplicar parâmetros que o link já tenha.
- Google Tag Manager GTM-5KX5J7J6: script no <head> e <noscript> logo após o <body>.
- Pixel da Meta 1434833234924777 com PageView. Não disparar InitiateCheckout no clique: o checkout da Eduzz já dispara esse evento ao abrir.

No relatório, liste cada botão de compra da página com o link final que ele gera quando a página é aberta com ?utm_source=teste&utm_campaign=teste.

Siga a regra de parada do docs/PROMPTS.md.
```

## Etapa 10: SEO e compartilhamento

```
Faça a etapa 10 do docs/PROMPTS.md.

- <title> e meta description definitivos a partir da copy.
- Open Graph e Twitter Card com uma imagem 1200x630 gerada a partir do hero desktop, com o H1 por cima na tipografia da página. Salve em assets/img/og.jpg.
- Favicon com o escudo (SVG + PNG 32 e 180 para iOS).
- canonical para https://arsenal-homem-blindado.com.br/

Siga a regra de parada do docs/PROMPTS.md.
```

## Etapa 11: revisão final

```
Faça a etapa 11 do docs/PROMPTS.md: revisão completa, sem adicionar nada novo.

1. Rode o Lighthouse em modo mobile e informe Performance, Acessibilidade, Boas práticas, SEO, LCP, CLS e o peso total transferido. Corrija o que estiver abaixo de 90 ou com LCP acima de 2,5 s.
2. Confira toda a página em 360, 390, 768, 1280 e 1440 px. Nada pode estourar a largura nem ficar cortado.
3. Busque no index.html por travessão (—), lorem, texto em inglês e qualquer frase que não esteja na docs/copy.md. Informe o que encontrou.
4. Teste com teclado: Tab passa por todos os botões e links com foco visível, o checklist marca com Enter e Espaço, o FAQ abre com Enter.
5. Liste tudo que ainda está com .pendente e atualize o PENDENCIAS.md.

Siga a regra de parada do docs/PROMPTS.md.
```
