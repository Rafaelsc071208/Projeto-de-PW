const lpk = 12;
let km = parseFloat(prompt('Digite a distancia(em km): '));
let ho = parseFloat(prompt('Digite o tempo que vai (em h): '));
let lu = km/lpk;
let vm = km/ho;
console.log(`Distância a ser percorrida: ${km}km\nTempo gasto:  ${ho}h\nCombustivel utilizado: ${lu}L\nVelocidade média: ${vm}`)