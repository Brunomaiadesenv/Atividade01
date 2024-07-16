const ler = require('readline-sync');

let frase = prompt("Digite uma frase:");
let vogais = "aeiouAEIOU";
let contadorVogais = 0;

for (let char of frase) {
  if (vogais.includes(char)) {
    contadorVogais++;
  }
}

console.log(`Número de vogais na frase: ${contadorVogais}`);
