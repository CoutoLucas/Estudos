const nomes = ["Ana", "Joana", "Carlos", "amanda"];

encontrado = false; // Idem

const nomeComA = []

for (nome of nomes) { // Idem
    if (nome[0] === "a" || nome[0] === "A") {
        encontrado = true;
        nomeComA.push(nome);

    }
}
console.log(nomeComA);