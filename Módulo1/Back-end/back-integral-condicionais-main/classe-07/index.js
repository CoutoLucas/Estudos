const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos
const totalRendimentosReias = totalDeRendimentos / 100;

if (aposentada) { console.log(`ISENTA`) }
else if (portadoraDeDoenca) { console.log(`ISENTA`) }
else if (totalRendimentosReias <= 28559.70) { console.log(`VAZA LEAO! JA TA DIFICIL SEM VOCE`) }
else { console.log(`PEGA LEÃO`) };