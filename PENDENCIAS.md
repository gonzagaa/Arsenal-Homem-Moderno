# Pendências do cliente

Nada marcado com `.pendente` vai ao ar. Atualize esta lista conforme as respostas chegarem.

O produto mudou: o Arsenal Homem Blindado (quatro manuais) deu lugar ao De Desprezado a Respeitado (um livro). Domínio novo: `https://nunca-mais-seja-desprezado.com.br/`.

- [ ] **Checkout do produto novo:** os botões de compra ainda apontam para `https://chk.eduzz.com/7WXGDYN20A`, o checkout do produto antigo. Quando o De Desprezado a Respeitado estiver cadastrado na Eduzz, trocar o link em todos os botões (o repasse dos parâmetros da URL continua valendo).
- [ ] **Pixel no produto novo:** a gestora precisa configurar o pixel 1434833234924777 no produto novo dentro da Eduzz (ID e token da API de Conversões), como foi feito no Arsenal, e confirmar que o checkout novo também dispara o InitiateCheckout ao abrir.
- [ ] Confirmar que o De Desprezado a Respeitado é entregue em PDF e quantas páginas tem.
- [ ] Confirmar que o que a página promete está de fato no material: os 8 aprendizados, 13 capítulos, 8 dossiês, plano de ação de 30 dias, diagnóstico pessoal, código de honra e diário do homem respeitado (seções O conteúdo e Oferta, na rodada B).
- [ ] Confirmar as respostas do FAQ: que o conteúdo trata de casamentos longos e que o plano de 30 dias pode ser seguido no próprio ritmo.
- [ ] Formas de pagamento aceitas (Pix, cartão, boleto) e prazo de liberação no boleto.
- [ ] Onde a página vai ser hospedada (no domínio novo) e como é feita a publicação. A hospedagem precisa servir com compressão (gzip ou brotli) e com cache longo para `assets/`: sem compressão, o HTML vai de ~25 KB para 98 KB e o LCP simulado do PageSpeed sobe de 2,0 para 2,9 s.

## Marcações `.pendente` na página (0)

Nenhuma. Se surgir um trecho entre colchetes na copy, marque com `.pendente` e liste aqui.

## Opcional

- [ ] Se o Marcello enviar uma história pessoal (2 a 3 frases), ela entra entre o primeiro e o segundo parágrafo da #autor.

## Confirmar antes de publicar

Estes itens aparecem na página sem a classe `.pendente`, então nada na tela avisa que faltam. Confira cada um antes de publicar.

- [ ] "+12 mil homens transformados" (hero e Quem está por trás): de onde vem o número.
- [ ] Garantia de 7 dias (oferta, card da garantia, FAQ): prazo configurado na Eduzz para o produto novo e as condições que o checkout informa (o texto da garantia remete a elas).
- [ ] Autorização do Marcello para usar as 8 conversas da #resultados (nomes e fotos cobertos). O print-07 mostra um story do Marcello com o rosto de uma mulher; confirmar se pode aparecer.
- [ ] Política de privacidade: a página usa pixel e GA4 (cookies). Verificar com o cliente se existe uma política publicada para linkar no rodapé, por causa da LGPD e da revisão de anúncios da Meta.
- [x] Conversions API Gateway: resolvido. A gestora confirmou que está ativo e deduplicando com o pixel do navegador.
- [x] Pixel no produto da Eduzz: resolvido no produto antigo. Refazer no produto novo (item acima).
- [x] InitiateCheckout em dobro: resolvido. O checkout da Eduzz dispara o evento ao abrir, e ele foi removido do clique na página.
- [ ] Original em maior resolução da mesa da oferta, se existir (o hero já foi trocado por originais de 4562 e 1882px).
