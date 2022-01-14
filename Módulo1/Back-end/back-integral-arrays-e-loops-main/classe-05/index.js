const original = [1, 4, 12, 21, 53, 88, 112];
encontrado = false; // Idem

const pares = [];

for (numeros of original) {
    let y = 0;
    y = numeros % 2; // Você já poderia declarar `let y = numeros % 2` já...
    if (y <= 0) { // Ou melhor, nem teria esse y -> if(numeros%2 === 0) {...} 
        encontrado = true;
        pares.push(numeros);
    }
}
console.log(pares);