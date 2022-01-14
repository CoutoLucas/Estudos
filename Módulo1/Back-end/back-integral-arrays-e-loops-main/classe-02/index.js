const letras = ["A", "a", "B", "C", "E", "e"];
encontrado = false; // Esqueceu do let?
let quantidade = 0;
for (letra of letras) { // Esqueceu de do let/const em letra?
    if (letra === "e" || letra === "E") {
        encontrado = true;
        quantidade = quantidade + 1;
    }
} if (quantidade >= 1) {
    console.log(`Foram encontradas ${quantidade} letras "E" ou "e"`);
}

if (!encontrado) { console.log(`Nenhuma letra "E" ou "e" foi encontrada`) };