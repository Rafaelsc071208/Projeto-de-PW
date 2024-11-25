function exibirNoSite(mensagem)
{console.log(mensagem);
    const outputDiv = document.getElementByI("output");
    outputDiv.innerHTML += `<p>${mensagem}<p>`;
}





let A = prompt("Qual seu nome: ")
let B = prompt("Qual sua idade: ")

if (B>=18){
    let r = prompt(A+", você é maior de idade")}

if (B<18){
    let e = prompt(A+", você é menor de idade")}