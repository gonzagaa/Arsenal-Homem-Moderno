# Pendências do cliente

Nada marcado com `.pendente` vai ao ar. Atualize esta lista conforme as respostas chegarem.

- [ ] Confirmar que os quatro manuais são PDF e quantas páginas tem cada um.
- [ ] Confirmar que os tópicos de cada manual (seção O sistema) estão de fato no material.
- [ ] Formas de pagamento aceitas (Pix, cartão, boleto) e prazo de liberação no boleto.
- [ ] Confirmar que o conteúdo serve para quem está num relacionamento (FAQ).
- [ ] Onde a página vai ser hospedada e como é feita a publicação. A hospedagem precisa servir com compressão (gzip ou brotli) e com cache longo para `assets/`: sem compressão, o HTML vai de ~25 KB para 98 KB e o LCP simulado do PageSpeed sobe de 2,0 para 2,9 s.

## Marcações `.pendente` na página (0)

Nenhuma. Se surgir um trecho entre colchetes na copy, marque com `.pendente` e liste aqui.

## Opcional

- [ ] Se o Marcello enviar uma história pessoal (2 a 3 frases), ela entra entre o primeiro e o segundo parágrafo da #autor.

## Confirmar antes de publicar

Estes itens aparecem na página sem a classe `.pendente`, então nada na tela avisa que faltam. Confira cada um antes de publicar.

- [ ] "+12 mil homens transformados" (hero e Quem escreveu) e "milhares de homens" (texto da Quem escreveu): de onde vêm o número e a afirmação.
- [ ] Garantia de 7 dias (oferta, garantia, FAQ, fechamento): prazo configurado na Eduzz e como funciona o reembolso.
- [ ] Autorização do Marcello para usar as 8 conversas da #resultados (nomes e fotos cobertos). O print-07 mostra um story do Marcello com o rosto de uma mulher; confirmar se pode aparecer.
- [ ] Política de privacidade: a página usa pixel e GA4 (cookies). Verificar com o cliente se existe uma política publicada para linkar no rodapé, por causa da LGPD e da revisão de anúncios da Meta.
- [x] Conversions API Gateway: resolvido. A gestora confirmou que está ativo e deduplicando com o pixel do navegador.
- [x] Pixel no produto da Eduzz: resolvido. ID do pixel e token da API de Conversões inseridos na Eduzz.
- [x] InitiateCheckout em dobro: resolvido. O checkout da Eduzz dispara o evento ao abrir, e ele foi removido do clique na página.
- [ ] Originais em maior resolução do hero (desktop e celular) e da mesa da oferta, se existirem. As atuais têm 1672 px no lado maior e aparecem ampliadas em telas retina.
