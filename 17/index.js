const valorDoProduto = 1000.00;
const quantidadeDoParcelamento = 10;
const valorPago = 300;

const valorParcela = valorDoProduto / quantidadeDoParcelamento;
const valorFalta = valorDoProduto - valorPago;
const parcelasFalta = valorFalta / valorParcela;

console.log(`Restam ${parcelasFalta} parcelas de R$${valorParcela}`);