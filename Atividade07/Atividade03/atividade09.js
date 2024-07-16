const readline = require('readline-sync');

function fatorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * fatorial(num - 1);
}

function ExibirFatoriais() {
  let n = parseInt(readline.question("Digite a quantidade de valores a serem lidos: "));
  
  for (let i = 0; i < n; i++) {
    let valor = parseInt(readline.question("Digite um número: "));
    console.log(`Valor: ${valor}, Fatorial: ${fatorial(valor)}`);
  }
}

ExibirFatoriais();
