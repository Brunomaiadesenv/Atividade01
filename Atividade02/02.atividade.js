const ler = require('readline-sync');


console.log("-------------------- MENU INICIAL ----------------------");
console.log("*** Digite o valor total da compra: ***");
let valor = ler.questionFloat("=> ");

console.clear(); 

console.log("----------------- MENU SELECIONE O TIPO DO CLIENTE ----------------");
console.log(" Digite o código do comprador (1 - Cliente comum, 2 - Funcionário, 3 - VIP):");
console.log("-----------------------------------------------------------");
let opt = ler.questionInt("=> ");
let result = 0;


    switch (opt) {
        case 1:
            result = valor; 
            console.log(`O valor total a ser pago é: R$ ${result}`);
            break;
        case 2:
            result = valor += valor * 0.5;
            console.log(`O valor total a ser pago é: R$ ${result}`);
            break;
        case 3:
            result = valor += valor * 0.10;
            console.log(`O valor total a ser pago é: R$ ${result}`);
            break
        default:
            console.log("Opção inválida!!!");
            break;
    }
