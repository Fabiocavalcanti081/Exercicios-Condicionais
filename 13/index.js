//tipo de pagamento (dinheiro, credito, debito, cheque).
const valorDoProduto = 13000;
const tipoDePagamento = "cheque";
const descontoDebDin = valorDoProduto - (valorDoProduto * 0.10);
const descontoCred = valorDoProduto - (valorDoProduto * 0.05);
const descontoCheque = valorDoProduto - (valorDoProduto * 0.03);

if (tipoDePagamento === "credito") {
    console.log(`Valor a ser pago: ${(descontoCred / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
} else if (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito") {
    console.log(`Valor a ser pago: ${(descontoDebDin / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
} else {
    console.log(`Valor a ser pago: ${(descontoCheque / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
}