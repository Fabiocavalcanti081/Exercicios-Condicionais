const caractere = "E";
const vogalMaisc = ["A", "E", "I", "O", "U"];
const vogalMinus = ["a", "e", "i", "o", "u"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (const vogal of vogalMaisc) {
    if (vogal === caractere) {
        console.log(`A vogal ${vogal} é maiúscula`);
    }
}
for (const vogal of vogalMinus) {
    if (vogal === caractere) {
        console.log(`A vogal ${vogal} é minúsculas}`);
    }
}
for (const numero of numeros) {
    if (numero == caractere) {
        console.log(`O caractere ${numero} é um número}`);
    }
}