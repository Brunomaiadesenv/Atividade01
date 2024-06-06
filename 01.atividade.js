const ler = require('readline-sync');

let valor1 = ler.questionFloat("Valor 1: ");
let valor2 = ler.questionFloat("Valor 2: ");
let valor3 = ler.questionFloat("Valor 3: ");


let soma = (valor1 + valor2);



if (soma > valor3) {
    console.log("Soma do valor1 e valor2 é: ", + soma );

}