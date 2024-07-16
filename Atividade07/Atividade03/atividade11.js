const readline = require('readline-sync');

function lerNormalizar() {
  let somaPares = 0;
  let quantidadePares = 0;
  let numero;
  const numerosPares = [];

  while (true) {
    numero = parseInt(readline.question("Digite um numero (0 para sair): "));
    if (numero === 0) {
      break;
    }
    if (numero % 2 === 0) {
      numerosPares.push(numero);
      somaPares += numero;
      quantidadePares++;
    }
  }

  return { numerosPares, somaPares, quantidadePares };
}

function calcularMedia(somaPares, quantidadePares) {
  if (quantidadePares === 0) {
    return 0; 
  }
  return somaPares / quantidadePares;
}


  const { numerosPares, somaPares, quantidadePares } = lerNormalizar();
  const mediaPares = calcularMedia(somaPares, quantidadePares);

  console.log(`A media dos numeros pares e: ${mediaPares.toFixed(2)}`);

