const jogada1 = "pedra";
const jogada2 = "tesoura";
const jogada3 = "papel";

if (jogada1 && jogada2) { console.log(`O jogador que selecionou ${jogada1} venceu`) }
else if (jogada1 && jogada3) { console.log(`O jogador que selecionou ${jogada3} venceu`) }
else if (jogada2 && jogada3) { console.log(`O jogador que selecionou ${jogada2} venceu`) }
else if (jogada1 && jogada1) { console.log(`Este jogo ficou empatado`) }
else if (jogada2 && jogada2) { console.log(`Este jogo ficou empatado`) }
else if (jogada3 && jogada3) { console.log(`Este jogo ficou empatado`) };