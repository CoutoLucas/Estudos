const diaDaSemana = 1;

const nomesDias = [
  "Segunda Feira",
  "Terça Feira",
  "Quarta Feira",
  "Quinta Feira",
  "Sexta Feira",
  "Sábado",
  "Domingo",
];

if (diaDaSemana > 0 && diaDaSemana < 8) {
  console.log(nomesDias[diaDaSemana - 1]);
} else {
  console.log(`O dia informado não é valido`);
}
