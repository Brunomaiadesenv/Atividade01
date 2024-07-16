const ler = require('readline-sync');

let numero = parseInt(prompt("Digite um número:"));
console.log(`Divisores de ${numero}:`);

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
}