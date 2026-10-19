# Pendências do cliente

Nada marcado com `.pendente` vai ao ar. Atualize esta lista conforme as respostas chegarem.

- [ ] Confirmar que os quatro manuais são PDF e quantas páginas tem cada um.
- [ ] Confirmar que os tópicos de cada manual (seção O sistema) estão de fato no material.
- [ ] Formas de pagamento aceitas (Pix, cartão, boleto) e prazo de liberação no boleto.
- [ ] Nome que aparece na fatura do cartão (FAQ).
- [ ] Confirmar que o conteúdo serve para quem está num relacionamento (FAQ).
- [ ] 6 a 9 prints reais de DM, tratados, com autorização de cada aluno.
- [ ] Assinatura manuscrita digitalizada (seção Garantia). Sem ela, fica a fonte provisória.
- [ ] Dados legais do rodapé: CNPJ ou responsável, termos de uso, política de privacidade.
- [ ] Onde a página vai ser hospedada e como é feita a publicação.

## Opcional

- [ ] Se o Marcello enviar uma história pessoal (2 a 3 frases), ela entra entre o primeiro e o segundo parágrafo da #autor.

## Confirmar antes de publicar

Estes itens aparecem na página sem a classe `.pendente`, então nada na tela avisa que faltam. Confira cada um antes de publicar.

- [ ] "+12 mil homens transformados" (hero e Quem escreveu) e "milhares de homens" (texto da Quem escreveu): de onde vêm o número e a afirmação.
- [ ] Garantia de 7 dias (oferta, garantia, FAQ, fechamento): prazo configurado na Eduzz e como funciona o reembolso.
- [ ] O pixel já envia os eventos da página pelo Conversions API Gateway (configurado na Meta, independe do WordPress). Confirmar com o gestor de tráfego: (a) que o Gateway está ativo e deduplicando com o pixel do navegador; (b) que o pixel está configurado no produto dentro da Eduzz para o evento de compra; (c) se o checkout da Eduzz também dispara InitiateCheckout ao abrir. Se disparar, remover o InitiateCheckout do clique na página, para não contar duas vezes.
- [ ] Originais em maior resolução do hero (desktop e celular) e da mesa da oferta, se existirem. As atuais têm 1672 px no lado maior e aparecem ampliadas em telas retina.
