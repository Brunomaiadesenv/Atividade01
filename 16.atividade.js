const ler = require('readline-sync');


function calcularComissao(quantidadeProdutos) {
    let comissaoPorProduto;

  
    if (quantidadeProdutos > 450) {
        comissaoPorProduto = 10.00;
    } else if (quantidadeProdutos > 200) {
        comissaoPorProduto = 7.50;
    } else {
        comissaoPorProduto = 5.00;
    }

    
    const totalComissao = quantidadeProdutos * comissaoPorProduto;

    return totalComissao;
}


function main() {
  
    const nomeFuncionario = ler.question("Digite o nome do funcionário: ");
    const quantidadeProdutos = ler.questionInt("Digite a quantidade de produtos vendidos: ");

  
    const comissao = calcularComissao(quantidadeProdutos);
    console.log("O funcionário " + nomeFuncionario + " irá receber R$ " + comissao.toFixed(2) + " de comissão.");
}


main();