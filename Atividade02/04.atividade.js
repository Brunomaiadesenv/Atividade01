const ler = require('readline-sync');


let valorVenda = parseFloat(ler.question('Digite o valor da venda: '));


console.log("-------------------- MENU INICIAL ----------------------");
console.log('1 - Venda à Vista (desconto de 10%)');
console.log('2 - Venda a Prazo 30 dias (desconto de 5%)');
console.log('3 - Venda a Prazo 60 dias (mesmo preço)');
console.log('4 - Venda a Prazo 90 dias (acréscimo de 5%)');
console.log('5 - Venda com Cartão de Débito (desconto de 8%)');


let opt = ler.questionInt('Digite o número da opção desejada: ');

let totalVenda;


switch (opt) {
    case 1:
        totalVenda = valorVenda * 0.90; 
        console.log('Venda à Vista: R$' + totalVenda.toFixed(2));
        break;
    case 2:
        totalVenda = valorVenda * 0.95; 
        console.log('Venda a Prazo 30 dias: R$' + totalVenda.toFixed(2));
        break;
    case 3:
        totalVenda = valorVenda; 
        console.log('Venda a Prazo 60 dias: R$' + totalVenda.toFixed(2));
        break;
    case 4:
        totalVenda = valorVenda * 1.05; 
        console.log('Venda a Prazo 90 dias: R$' + totalVenda.toFixed(2));
        break;
    case 5:
        totalVenda = valorVenda * 0.92; 
        console.log('Venda com Cartão de Débito: R$' + totalVenda.toFixed(2));
        break;
    default:
        console.log('Opção inválida. Por favor, selecione uma opção válida.');
        break;
}