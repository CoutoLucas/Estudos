const numeros = [2, 3, 4, 6];
let soma = 0;

// Aqui você poderia usar x < numeros.length somente.
for (let x = 0; x <= numeros.length - 1; x++) {
    soma = soma + numeros[x];
}
console.log(soma);

