function exibirNoSite(mensagem)
{console.log(mensagem);
    const outputDiv = document.getElementByI("output");
    outputDiv.innerHTML += `<p>${mensagem}<p>`;
}





let numeroSorteado = Math.floor(Math.random() * 100) + 1;

let r = prompt(numeroSorteado)
