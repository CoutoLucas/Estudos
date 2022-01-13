const numeros = [3, 1, 8, 35, 7, 40];
let maiorValor = numeros[0];

for (valor of numeros) { // Idem
    if (valor > maiorValor) {
        maiorValor = valor
    }
}
console.log(maiorValor);