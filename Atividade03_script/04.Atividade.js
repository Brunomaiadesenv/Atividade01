const ler = require('readline-sync');

let emBH = 0;
let foraBH = 0;

for (let i = 0; i < 20; i++) {
  let nome = prompt("Digite o nome do usuário:");
  let cidade = prompt("Digite a cidade natal:");

  if (cidade.toLowerCase() === "bh") {
    emBH++;
  } else {
    foraBH++;
  }
}

console.log(`Quantidade de pessoas que moram em BH: ${emBH}`);
console.log(`Quantidade de pessoas que moram fora de BH: ${foraBH}`);
