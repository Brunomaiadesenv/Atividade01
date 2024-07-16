const readline = require('readline-sync');

function lerNumeros() {
  const numeros = [];
  for (let i = 0; i < 18; i++) {
    let numero = parseFloat(readline.question("Digite um número: "));
    numeros.push(numero);
  }
  return numeros;
}

function calcularSoma(numeros) {
  let soma = 0;
  for (let numero of numeros) {
    soma += numero;
  }
  return soma;
}

function ajustarSoma(soma) {
  if (soma > 500) {
    soma -= 100;
  }
  return soma;
}

function total() {
  const numeros = lerNumeros();
  const soma = calcularSoma(numeros);
  const somaAjustada = ajustarSoma(soma);

  console.log(`A soma dos números é: ${somaAjustada}`);
}

total();