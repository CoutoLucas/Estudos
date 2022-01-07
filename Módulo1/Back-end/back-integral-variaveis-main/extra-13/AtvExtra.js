let Raio = 5, Comprimento = 0, Área = 0, ÁreaDoLado = 0, altura = 10, ÁreaLateral = 0;
Comprimento = 2 * Math.PI * Raio;
Área = 2 * Math.PI * Math.pow(Raio, 2);
ÁreaLateral = 2 * Math.PI * Raio * altura;
Áreatotal = 2 * Math.PI * Raio * (Raio + altura);
console.log(`A área da base do cilindro é de ${Área.toFixed(2)}, a área lateral é ${ÁreaLateral.toFixed(2)}`)
console.log(`e a área total é de ${Áreatotal.toFixed(2)}`)