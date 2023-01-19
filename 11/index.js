const rendaMensalEmCentavos = 150000;
const porcentagem = (18 * rendaMensalEmCentavos) / 100
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;

if (mesesDecorridos > 60) {
    console.log(`Já se passou os 60 meses, o aluno não deve mais nada.`);
} else if (totalJaPagoPeloAluno >= 1800000) {
    console.log(`O total pago pelo aluno é de R$ ${totalJaPagoPeloAluno / 100} reais, o aluno não deve mais nada.`);
} else if (rendaMensalEmCentavos < 200000) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
} else {
    console.log(`O valor da parcela desse mês é R$ ${porcentagem / 100} reais`);
}
