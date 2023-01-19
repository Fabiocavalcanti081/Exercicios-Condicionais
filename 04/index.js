const ladoA = 3;
const ladoB = 3;
const soma = ladoA + ladoB;

if (ladoA === ladoB) {
    if (soma === 0) {
        console.log("Bucha de Branco");
    } else if (soma === 2) {
        console.log("Bucha de Ás");
    } else if (soma === 4) {
        console.log("Bucha de Duque");
    } else if (soma === 6) {
        console.log("Bucha de Terno");
    } else if (soma === 8) {
        console.log("Bucha de Quadra");
    } else if (soma === 10) {
        console.log("Bucha de Quina");
    } else {
        console.log("Bucha de Sena");
    }
} else {
    console.log("NÂO");
}