const ler = require('readline-sync');

let alturaJorge = 1.72;
let alturaRoberto = 1.65;
let anos = 0;

while (alturaRoberto <= alturaJorge) {
  alturaJorge += 0.03; 
  alturaRoberto += 0.04; 
  anos++;
}

console.log(`Serão necessários ${anos} anos para que Roberto seja maior que Jorge.`);
