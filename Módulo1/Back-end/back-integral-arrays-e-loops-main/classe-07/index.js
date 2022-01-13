const nomes = ["Ana", "Joana", "Carlos", "amanda"];

encontrado = false;

const nomeComA = []

for (nome of nomes) {
    if (nome[0] === "a" || nome[0] === "A") {
        encontrado = true;
        nomeComA.push(nome);

    }
}
console.log(nomeComA);