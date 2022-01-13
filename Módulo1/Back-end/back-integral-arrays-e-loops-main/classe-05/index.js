const original = [1, 4, 12, 21, 53, 88, 112];
encontrado = false;

const pares = [];

for (numeros of original) {
    let y = 0;
    y = numeros % 2;
    if (y <= 0) {
        encontrado = true;
        pares.push(numeros);
    }
}
console.log(pares);