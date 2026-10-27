# Pendências do cliente

Nada marcado com `.pendente` vai ao ar. Atualize esta lista conforme as respostas chegarem.

O produto mudou: o Arsenal Homem Blindado (quatro manuais) deu lugar ao De Desprezado a Respeitado (três livros: o principal, O Jogo Sujo dos Relacionamentos e Chega de Engolir Calado!, com os materiais de aplicação prática). Domínio novo: `https://nunca-mais-seja-desprezado.com.br/`.

- [x] **Checkout:** resolvido. O `CHECKOUTS` tem os quatro links da Eduzz (bio, sdr, tfg, story), e os href dos botões no HTML levam ao padrão.
- [x] **Link da raiz:** resolvido. A raiz é a página de links do Marcello (`links.html`); só /bio/, /sdr/, /tfg/ e /story/ vendem; `/index.html` e `/links.html` respondem 404 com a `404.html`. O `padrao` do `CHECKOUTS` e os href dos botões ficam com o link da bio, só como segurança.
- [x] **Número do WhatsApp da página de links:** resolvido. `WHATSAPP_NUMERO = '5562994407151'`; o bloco abre a conversa com a mensagem pronta.
- [ ] **Confirmar com a gestora o pixel e o token nos quatro checkouts:** pixel 1434833234924777 e token da API de Conversões configurados em cada um dos quatro checkouts da Eduzz (bio, sdr, tfg, story), como foi feito no Arsenal, e o InitiateCheckout disparando ao abrir cada um.
- [ ] Confirmar que os três livros são entregues em PDF e quantas páginas tem cada um.
- [ ] Confirmar que o que a página promete está de fato no material: as 3 etapas do #caminho, as "respostas para 30 situações de desrespeito" do Chega de Engolir Calado!, o plano de ação de 30 dias, o diagnóstico pessoal, o código de honra e o diário de evolução (#caminho e #oferta).
- [ ] Confirmar as respostas do FAQ: entrega em PDF depois da confirmação do pagamento e que o conteúdo trata de casamentos de longa data.
- [ ] Preço riscado: a copy v3 não tem preço de referência (a anterior tinha R$ 297 riscado), e a página saiu sem ele. Confirmar que foi de propósito.
- [ ] Formas de pagamento aceitas (Pix, cartão, boleto) e prazo de liberação no boleto.
- [x] Hospedagem: resolvido. Hostinger do cliente, com deploy pelo Git; compressão, cache e rotas no `.htaccess` (a Netlify fica só como prévia).
- [ ] Depois do primeiro deploy na Hostinger, conferir no domínio: `/` abrindo a página de links (com o endereço "/" na barra); /bio/, /sdr/, /tfg/ e /story/ abrindo a página de vendas; `/index.html`, `/links.html` e um endereço inventado respondendo 404 com a `404.html`; http e www indo para https sem www; /docs/, /CLAUDE.md e /.git/config sem abrir; HTML com `Cache-Control: no-cache` e /assets/ com 1 ano; resposta comprimida (gzip ou br). As regras do `.htaccess` não puderam ser testadas num Apache antes; a da raiz usa `[R=404]`, que o LiteSpeed precisa aceitar. Na prévia da Netlify, conferir o mesmo comportamento da raiz, do `/index.html` e das rotas (`_redirects`).

## Marcações `.pendente` na página (0)

Nenhuma. Se surgir um trecho entre colchetes na copy, marque com `.pendente` e liste aqui.

## Opcional

- [ ] Se o Marcello enviar uma história pessoal (2 a 3 frases), ela entra entre o primeiro e o segundo parágrafo da #autor.
- [ ] Depoimentos de compradores: a prova social de hoje são conversas sobre os conteúdos do Marcello, não sobre o livro. Quando houver depoimentos de quem comprou o De Desprezado a Respeitado (com autorização), eles entram na #autor, junto dos prints.
- [x] Cards da #transformacao: resolvido. O cliente aprovou os nossos cards (fotos na paleta, texto real); as artes enviadas saíram do projeto.
- [x] Identidade: resolvido. O cliente aprovou a identidade com os destaques em azul (antes `?tema=vibrante`), que passou a ser a única.

## Confirmar antes de publicar

Estes itens aparecem na página sem a classe `.pendente`, então nada na tela avisa que faltam. Confira cada um antes de publicar.

- [ ] "+12 mil homens transformados" (hero e Quem está por trás): de onde vem o número.
- [ ] Garantia de 7 dias (card da garantia e bloco de compra do fechamento): prazo configurado na Eduzz para o produto novo e as condições que o checkout informa (o texto da garantia remete a elas).
- [ ] Autorização do Marcello para usar as 8 conversas da prova social, na #autor (nomes e fotos cobertos). O print-07 mostra um story do Marcello com o rosto de uma mulher; confirmar se pode aparecer.
- [ ] Política de privacidade: a página usa pixel e GA4 (cookies). Verificar com o cliente se existe uma política publicada para linkar no rodapé, por causa da LGPD e da revisão de anúncios da Meta.
- [x] Capa do livro: resolvido. O cliente aprovou a capa oficial dourada, que é definitiva; a azul e a capa em HTML saíram do projeto.
- [x] Conversions API Gateway: resolvido. A gestora confirmou que está ativo e deduplicando com o pixel do navegador.
- [x] Pixel no produto da Eduzz: resolvido no produto antigo. Refazer no produto novo (item acima).
- [x] InitiateCheckout em dobro: resolvido. O checkout da Eduzz dispara o evento ao abrir, e ele foi removido do clique na página.
- [ ] Original em maior resolução da mesa da oferta, se existir (o hero já foi trocado por originais de 4562 e 1882px).
