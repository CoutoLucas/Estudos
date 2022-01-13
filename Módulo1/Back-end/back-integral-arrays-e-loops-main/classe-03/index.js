const numeros = [54, 22, 14, 10, 284];
encontrado = false;
for (let x = 0; x < numeros.length - 1; x++) {
    const valor = numeros[x];
    if (valor === 10) {
        encontrado = true;
        console.log(`O indice deste numero é ${x}`)
    }
}

if (!encontrado) {
    console.log(`-1`);
}