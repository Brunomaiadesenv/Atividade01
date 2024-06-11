const ler = require('readline-sync');


function verificarEmprestimo(salarioBruto, valorPrestacao) {
    
    const valorMaxPrestacao = salarioBruto * 0.25;


    if (valorPrestacao <= valorMaxPrestacao) {
        return "Empréstimo concedido!";
    } else {
        return "Empréstimo não pode ser concedido. Valor da prestação excede 25% do salário bruto.";
    }
}


function main() {

    const salarioBruto = ler.questionFloat("Digite o salário bruto: ");
    const valorPrestacao = ler.questionFloat("Digite o valor da prestação: ");


    console.log(verificarEmprestimo(salarioBruto, valorPrestacao));
}

main();