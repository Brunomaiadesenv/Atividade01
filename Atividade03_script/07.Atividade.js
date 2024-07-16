const ler = require('readline-sync');

let valorTotal = 0;
let produtoMaisCaro = 0;
let produtoMaisBarato = Infinity;

for (let i = 0; i < 15; i++) {
  let produto = prompt("Digite o nome do produto:");
  let valor = parseFloat(prompt("Digite o valor do produto:"));

  valorTotal += valor;
  
  if (valor > produtoMaisCaro) {
    produtoMaisCaro = valor;
  }

  if (valor < produtoMaisBarato) {
    produtoMaisBarato = valor;
  }
}

console.log(`Valor total dos produtos: R$ ${valorTotal.toFixed(2)}`);
console.log(`Produto mais caro: R$ ${produtoMaisCaro.toFixed(2)}`);
console.log(`Produto mais barato: R$ ${produtoMaisBarato.toFixed(2)}`);