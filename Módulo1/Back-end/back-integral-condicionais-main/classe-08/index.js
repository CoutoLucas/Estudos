const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade >= 12 && possuiPatologia === false && altura >= 150) {
    if (ehEstudante) { console.log(`10 REAIS`) }
    else { console.log(`20 REAIS`) }
} else { console.log(`ACESSO NEGADO`) };