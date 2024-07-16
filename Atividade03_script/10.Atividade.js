const ler = require('readline-sync');

let somaNegativos = 0;
let numero;

while (true) {
  numero = parseInt(prompt("Digite um número (0 para sair):"));
  if (numero === 0) break;
  if (numero < 0) {
    somaNegativos += numero;
  }
}

console.log(`A soma dos números negativos é: ${somaNegativos}`);