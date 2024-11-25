function exibirNoSite(mensagem)
{console.log(mensagem);
    const outputDiv = document.getElementByI("output");
    outputDiv.innerHTML += `<p>${mensagem}<p>`;
}





let A = parseFloat(prompt("Escreva o número A: "));
let B = parseFloat(prompt("Escreva o número B: "));



resultado=0
resultado2=0





if (A===B){
    resultado = ("Os números são iguais, logo a soma deles é ");
    resultado2 = (A+B)
}else{
    resultado = ("Os números são diferentes, logo a multiplicação deles é ");
    resultado2 = (A*B)
}
let r = prompt(resultado+""+resultado2)
