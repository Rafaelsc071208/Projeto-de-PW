let a = prompt('Digite o primeiro valor booleano(true ou false): ').toLowerCase();
let b = prompt('Digite o segundo valor booleano(true ou false): ').toLowerCase();

a = a === "true";
b = b === "true";

if (a==b){
    if(a){
        console.log('Ambos são verdadeiros.')
    }
    else{
        console.log('Ambos são falsos')
    }
}
else{
    console.log('Os valores são diferentes')
}