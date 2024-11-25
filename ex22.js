let a = parseInt(prompt('Digite o dividendo: '));
let b = parseInt(prompt('Digite o divisor: '));

if (b==0){
    console.log('Não é possivel dividir por zero.')
}
let q = Math.floor(a/b)
let r = a%b
console.log(`O quociente da divisão é: ${q}\nO resto da divisão é: ${r}`)