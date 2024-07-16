const ler = require('readline-sync');

let totalUsuarios = 0;
let totalHomens = 0;
let totalMulheres = 0;

while (true) {
  let nome = prompt("Digite o nome do usuário (ou 0 para parar):");
  if (nome === "0") break;
  
  let sexo = prompt("Digite o sexo do usuário (M/F):").toUpperCase();
  
  if (sexo === "M") {
    totalHomens++;
  } else if (sexo === "F") {
    totalMulheres++;
  }
  
  totalUsuarios++;
}

let porcentagemHomens = (totalHomens / totalUsuarios) * 100;
let porcentagemMulheres = (totalMulheres / totalUsuarios) * 100;

console.log(`Porcentagem de homens: ${porcentagemHomens.toFixed(2)}%`);
console.log(`Porcentagem de mulheres: ${porcentagemMulheres.toFixed(2)}%`);
