function exibirNoSite(mensagem)
{console.log(mensagem);
    const outputDiv = document.getElementByI("output");
    outputDiv.innerHTML += `<p>${mensagem}<p>`;
}





let A = parseFloat(prompt("Qual seu número: "));
let B = parseFloat(prompt("Qual seu número: "));
let C = parseFloat(prompt("Qual seu número: "));

let numeros = [A, B, C];
numeros.sort((a, b) => b - a);




let r = prompt(numeros)
