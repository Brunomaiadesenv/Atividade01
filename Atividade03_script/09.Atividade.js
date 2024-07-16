const ler = require('readline-sync');

function fatorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * fatorial(num - 1);
  }
  
  let n = parseInt(prompt("Digite a quantidade de valores a serem lidos:"));
  
  for (let i = 0; i < n; i++) {
    let valor = parseInt(prompt("Digite um número:"));
    console.log(`Valor: ${valor}, Fatorial: ${fatorial(valor)}`);
  }