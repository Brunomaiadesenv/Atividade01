const ler = require('readline-sync');

let somaPares = 0;
let quantidadePares = 0;
let numero;
let mediaPares = somaPares / quantidadePares;

while (true) {
  numero = parseInt(prompt("Digite um número (0 para sair):"));
  if (numero === 0) break;
  if (numero % 2 === 0) {
    somaPares += numero;
    quantidadePares++;
  }
}

console.log(`A média dos números pares é: ${mediaPares}`);
