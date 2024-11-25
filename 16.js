function exibirNoSite(mensagem)
{console.log(mensagem);
    const outputDiv = document.getElementByI("output");
    outputDiv.innerHTML += `<p>${mensagem}<p>`;
}





let A = prompt("Qual o lado 1: ")
let B = prompt("Qual o lado 2: ")
let C = prompt("Qual o lado 3: ")

if (A == B == C == A){
    let r = prompt("O triângulo é equilátero")
}


if (A !== B !== C !== A){
    let r = prompt("O triângulo é escaleno")
}



if (A !== B == C == A){
    let r = prompt("O triângulo é isósceles")
}
if (A == B !== C == A){
    let r = prompt("O triângulo é isósceles")
}
if (A !== C == B == A){
    let r = prompt("O triângulo é isósceles")
}

if ((A + B + C) != 180){
    let r = prompt("O triângulo é invalido")
}