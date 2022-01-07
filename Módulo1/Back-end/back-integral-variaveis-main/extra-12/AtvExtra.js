let taxaDeJuros = 0, Montante = 90_000, Capital = 60_000, periodos = 24;
taxaDeJuros = Math.pow(Montante/Capital, 1/periodos) - 1;
console.log(`A taxa de juros aplicada aos parametros é de ${taxaDeJuros.toFixed(4)}`);