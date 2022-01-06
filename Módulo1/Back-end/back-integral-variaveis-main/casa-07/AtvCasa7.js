let = PessoasInicialmenteInfectadas = 1000, PessoasQueSãoContaminadas = 4, Dias = 100; PessoasInfectadas = 0;
PessoasInfectadas = PessoasInicialmenteInfectadas * Math.pow(PessoasQueSãoContaminadas, Dias / 7);
console.log(`O numero de pessoas infectadas por covid nessa situação seria de ${PessoasInfectadas} pessoas`);
