const ler = require('readline-sync');


let numero = parseFloat(ler.question('Digite um número real: '));

console.log("-------------------- MENU INICIAL ----------------------");
console.log('Selecione o tipo de cálculo que deve ser realizado:');
console.log('101 - Raiz quadrada');
console.log('102 - A metade');
console.log('103 - 10% do número');
console.log('104 - O dobro');


let opt = ler.questionInt('Digite o número da opção desejada: ');

let resultado;


switch (opt) {
    case 101:
        resultado = Math.sqrt(numero);
        console.log('A raiz quadrada de ' + numero + ' é ' + resultado.toFixed(2));
        break;
    case 102:
        resultado = numero / 2;
        console.log('A metade de ' + numero + ' é ' + resultado.toFixed(2));
        break;
    case 103:
        resultado = numero * 0.10;
        console.log('10% de ' + numero + ' é ' + resultado.toFixed(2));
        break;
    case 104:
        resultado = numero * 2;
        console.log('O dobro de ' + numero + ' é ' + resultado.toFixed(2));
        break;
    default:
        console.log('Opção inválida. Por favor, selecione uma opção válida.');
        break;
}