let n1 = parseFloat(prompt('Digite a primeira nota: '));
let n2 = parseFloat(prompt('Digite a segunda nota: '));
let n3 = parseFloat(prompt('Digite a terceira nota: '));
let n4 = parseFloat(prompt('Digite a quarta nota: '))

let m = (n1+n2+n3+n4)/4
if (m>=7){
    console.log(`A média do aluno foi ${m}, como ela é maior ou igual a 5 ele foi aprovado!!`)
}
else{
    console.log(`A média do aluno foi ${m}, como ela é menor que 5 ele foi reprovado!!`)
}