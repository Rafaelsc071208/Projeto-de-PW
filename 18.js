function exibirNoSite(mensagem)
{console.log(mensagem);
    const outputDiv = document.getElementByI("output");
    outputDiv.innerHTML += `<p>${mensagem}<p>`;
}





let A = 1.50
let B = 1.10


let An = 0.02
let Bn = 0.03


let anos = 0

while (A<=B) {
    A += An;
    B+=Bn;
    anos++;
}
let r = prompt("Será preciso "+anos+" anos para Francisco superar Sara")

