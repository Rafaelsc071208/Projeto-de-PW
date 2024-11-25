function exibirNoSite(mensagem)
{console.log(mensagem);
    const outputDiv = document.getElementByI("output");
    outputDiv.innerHTML += `<p>${mensagem}<p>`;
}





let A = parseFloat(prompt("Escreva o número: "));




resultado=0
resultado2=0





if (A===0){
    resultado = ("O número é igual a zero");
}
if (A>0){
    resultado = ("O número é positivo");
}
if (A<0){
    resultado = ("O número é negativo");
}
if (A % 2===0){
    resultado2 = ("O número é par");
} else {
    resultado2 = ("O número é impar")
}
let r = prompt(resultado+" e "+resultado2)