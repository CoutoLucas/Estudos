const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

const pares = [];

encontrado = false;

for (valores of numeros) {
    let y = 0;
    y = valores % 2;
    if (y <= 0) {
        encontrado = true;
        pares.push(valores);
    }
}
console.log(pares);
let soma = 0;
let algo = 0;
for (let x = 0; x <= pares.length - 1; x++) {
    soma += pares[x];
}
console.log(soma);

// console.log(pares);

// const soma = pares[0] + pares[1] + pares[2] + pares[3];
// console.log(`${soma}`);

