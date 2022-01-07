let Mdinheiro = 80.00, Custo = 129.99, Ptotal = 100, Pnecessitada = 0, Presposta = 0;
Pnecessitada = (Mdinheiro * Ptotal)/Custo;
Presposta = 100 - Pnecessitada;
console.log(`O desconto do qual necessito é de ${Presposta.toFixed(2)}%`);