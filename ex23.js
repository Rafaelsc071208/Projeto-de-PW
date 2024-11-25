let vha = parseFloat(prompt('Digite o valor da hora aula: '));
let na = parseFloat(prompt('Digite o numero de aulas dadas: '));
let inss = parseFloat(prompt('Digite o desconto do INSS (em %): '));
let salb = vha*na;
let dinss = salb*(inss/100);
let sall = salb-dinss;

console.log(`O salário liquido do professor é: ${sall}`)