const ler = require('readline-sync');


function calcularValorAPagar(preco, condicaoPagamento) {
    switch (condicaoPagamento) {
        case 1: 
            return preco * 0.9;
        case 2: 
            return preco * 0.85;
        case 3: 
            return preco;
        case 4: 
            return preco * 1.1;
        default:
            return "Condição de pagamento inválida!";
    }
}


function main() {

    var precoProduto = ler.questionFloat("Digite o preço do produto: ");


    console.log("Escolha a condição de pagamento:");
    console.log("1 - À vista em dinheiro ou cheque");
    console.log("2 - À vista no cartão de crédito");
    console.log("3 - Em duas vezes sem juros");
    console.log("4 - Em duas vezes com juros de 10%");
    var condicaoPagamento = ler.questionInt("Digite o código da condição de pagamento: ");


    var valorAPagar = calcularValorAPagar(precoProduto, condicaoPagamento);

    
    console.log("O valor a ser pago é: R$ " + valorAPagar.toFixed(2));
}


main();