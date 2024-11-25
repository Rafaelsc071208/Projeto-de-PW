function exibirNoSite(mensagem)
{console.log(mensagem);
    const outputDiv = document.getElementByI("output");
    outputDiv.innerHTML += `<p>${mensagem}<p>`;
}





let A = parseFloat(prompt("Escreva o A: "));
let B = parseFloat(prompt("Escreva o B: "));
let C = parseFloat(prompt("Escreva o C: "));



resultado=0

let som = A+B;




if (som>C){
    resultado = (" logo é maior que C");
}
if (som<C){
    resultado = (" logo é menor que C");
}
if (som===C){
    resultado = (" logo é igual a C");
}
let r = prompt("Resultado é "+som+resultado)