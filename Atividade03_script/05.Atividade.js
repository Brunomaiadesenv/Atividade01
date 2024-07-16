const ler = require('readline-sync');

let somaIdades = 0;
let quantidadeIdades = 0;
let idade;

while (true) {
  idade = parseInt(prompt("Digite uma idade (ou um número negativo para sair):"));
  if (idade < 0) break;
  somaIdades += idade;
  quantidadeIdades++;
}

let mediaIdades = somaIdades / quantidadeIdades;
console.log(`A média das idades é ${mediaIdades.toFixed(2)}`);
