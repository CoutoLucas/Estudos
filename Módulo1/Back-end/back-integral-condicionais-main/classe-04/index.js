const ladoA = 5;
const ladoB = 5;
let bucha = (ladoA + ladoB) / 2;
if (ladoA === ladoB) {
    console.log(`É bucha`)
    if (bucha === 0) { console.log(`Branco`) }
    if (bucha === 1) { console.log(`Ás`) }
    if (bucha === 2) { console.log(`Duque`) }
    if (bucha === 3) { console.log(`Terno`) }
    if (bucha === 4) { console.log(`Quadra`) }
    if (bucha === 5) { console.log(`Quina`) }
    if (bucha === 6) { console.log(`Sena`) }
} else { console.log(`Não é bucha`) };