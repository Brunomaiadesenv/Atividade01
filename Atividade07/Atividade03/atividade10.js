const readline = require('readline-sync');

function lerNumeros() {
  const numeros = [];
  while (true) {
    let numero = parseInt(readline.question("Digite um número (0 para sair): "));
    if (numero === 0) {
      break;
    }
    numeros.push(numero);
  }
  return numeros;
}

function calcularSomaNegativos(numeros) {
  let somaNegativos = 0;
  for (let numero of numeros) {
    if (numero < 0) {
      somaNegativos += numero;
    }
  }
  return somaNegativos;
}


  const numeros = lerNumeros();
  const somaNegativos = calcularSomaNegativos(numeros);

  console.log(`A soma dos números negativos é: ${somaNegativos}`);

