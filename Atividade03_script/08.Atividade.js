const ler = require('readline-sync');

let soma = 0;

for (let i = 0; i < 18; i++) {
  let numero = parseFloat(prompt("Digite um número:"));
  soma += numero;
}

if (soma > 500) {
  soma -= 100;
}

console.log(`A soma dos números é: ${soma}`);