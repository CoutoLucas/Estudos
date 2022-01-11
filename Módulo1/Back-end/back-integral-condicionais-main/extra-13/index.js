//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
const valorDoProdutoReais = valorDoProduto / 100;
const ValorCredito = valorDoProdutoReais * 0.95;
const ValorCheque = valorDoProdutoReais * 0.97;
const ValorDebitoDinheiro = valorDoProdutoReais * 0.9;
if (tipoDePagamento === "credito") { console.log(`O Valor a ser pago: ${ValorCredito}`) }
else if (tipoDePagamento === "cheque") { console.log(`O Valor a ser pago: ${ValorCheque}`) }
else if (tipoDePagamento === "debito" || "dinheiro") { console.log(`O Valor a ser pago: ${ValorDebitoDinheiro}`) };
