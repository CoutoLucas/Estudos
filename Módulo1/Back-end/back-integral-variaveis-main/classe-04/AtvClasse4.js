let capital = 5000, juros = 0.2, tempoDeAplicação = 3, JUROS = 0;
JUROS = capital * Math.pow(1 + juros, tempoDeAplicação);
console.log(`O Valor de juros compostos aplicados é de ${JUROS.toFixed(2)} reais`);