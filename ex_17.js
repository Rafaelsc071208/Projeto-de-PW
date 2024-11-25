let F= parseFloat(prompt(`Insira uma temperatura em °F: `));
let C= Math.round (5*(F-32)/9)
console.log( F +`°F equivale a `+ C + `°C.`);