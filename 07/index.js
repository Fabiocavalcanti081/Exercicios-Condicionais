const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000;

if (aposentada === true || portadoraDeDoenca === true) {
    console.log("ISENTA");
} else if (totalDeRendimentos <= 2855970) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE!");
} else {
    console.log("PAGA LEAO!");
}