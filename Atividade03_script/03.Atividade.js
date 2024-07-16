const ler = require('readline-sync');

let maioresQueCinco = 0;
let menoresQueCinco = 0;

for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt("Digite um número:"));
  if (numero > 5) {
    maioresQueCinco++;
  } else if (numero < 5) {
    menoresQueCinco++;
  }
}

console.log(`Quantidade de números maiores que 5: ${maioresQueCinco}`);
console.log(`Quantidade de números menores que 5: ${menoresQueCinco}`);
