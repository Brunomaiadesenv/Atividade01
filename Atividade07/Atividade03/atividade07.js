const readline = require('readline-sync');

function lerProdutos() {
  const produtos = [];
  for (let i = 0; i < 15; i++) {
    let produto = readline.question("Digite o nome do produto: ");
    let valor = parseFloat(readline.question("Digite o valor do produto: "));
    produtos.push({ nome: produto, valor: valor });
  }
  return produtos;
}

function calcularValorTotal(produtos) {
  let total = 0;
  for (let produto of produtos) {
    total += produto.valor;
  }
  return total;
}

function encontrarMaisCaroMaisBarato(produtos) {
  let maisCaro = { nome: '', valor: -Infinity };
  let maisBarato = { nome: '', valor: Infinity };

  for (let produto of produtos) {
    if (produto.valor > maisCaro.valor) {
      maisCaro = produto;
    }
    if (produto.valor < maisBarato.valor) {
      maisBarato = produto;
    }
  }

  return { maisCaro, maisBarato };
}

function produto() {
  const produtos = lerProdutos();
  const valorTotal = calcularValorTotal(produtos);
  const { maisCaro, maisBarato } = encontrarMaisCaroMaisBarato(produtos);

  console.log(`Valor total dos produtos: R$ ${valorTotal.toFixed(2)}`);
  console.log(`Produto mais caro: ${maisCaro.nome} - R$ ${maisCaro.valor.toFixed(2)}`);
  console.log(`Produto mais barato: ${maisBarato.nome} - R$ ${maisBarato.valor.toFixed(2)}`);
}

produto();