const ler = require('readline-sync');


function calcularSomaIdades(homemMaisVelho, mulherMaisNova) {
    return homemMaisVelho + mulherMaisNova;
}


function calcularProdutoIdades(homemMaisNovo, mulherMaisVelha) {
    return homemMaisNovo * mulherMaisVelha;
}

function main() {

    const idadeHomem1 = ler.questionInt("Digite a idade do primeiro homem: ");
    const idadeHomem2 = ler.questionInt("Digite a idade do segundo homem: ");
    const idadeMulher1 = ler.questionInt("Digite a idade da primeira mulher: ");
    const idadeMulher2 = ler.questionInt("Digite a idade da segunda mulher: ");

  
    const homemMaisVelho = Math.max(idadeHomem1, idadeHomem2);
    const homemMaisNovo = Math.min(idadeHomem1, idadeHomem2);

    const mulherMaisVelha = Math.max(idadeMulher1, idadeMulher2);
    const mulherMaisNova = Math.min(idadeMulher1, idadeMulher2);


    const somaIdades = calcularSomaIdades(homemMaisVelho, mulherMaisNova);


    const produtoIdades = calcularProdutoIdades(homemMaisNovo, mulherMaisVelha);


    console.log("A soma das idades do homem mais velho com a mulher mais nova é: " + somaIdades);
    console.log("O produto das idades do homem mais novo com a mulher mais velha é: " + produtoIdades);
}


main();