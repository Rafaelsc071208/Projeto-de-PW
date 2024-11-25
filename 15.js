function exibirNoSite(mensagem)
{console.log(mensagem);
    const outputDiv = document.getElementByI("output");
    outputDiv.innerHTML += `<p>${mensagem}<p>`;
}





let A = prompt("Qual seu dia de nascimento: ")
let B = prompt("Qual seu mês de nascimento: ")
let C = prompt("Qual seu ano de nascimento: ")

Cn = (2024-C)
Bn = ((12-B)+((Cn*12)-1))
An = ((30-A)+((Bn*30)+25))

let r = prompt("Considerando que hoje é dia 25/11/2024, você viveu "+Cn+" anos, "+Bn+" meses e "+An+" dias.")