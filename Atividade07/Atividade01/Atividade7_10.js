const ler = require('readline-sync');

const salarioBruto = ler.questionFloat("Digite o salario bruto: ");
const valorPrestacao = ler.questionFloat("Digite o valor da prestacao: ");


function Emprestimo(salarioBruto, valorPrestacao) {

    let valorMaxPrestacao = salarioBruto * 0.25;

    if (valorPrestacao <= valorMaxPrestacao) {
        return "Emprestimo concedido!";
    } else {
        return "Emprestimo não pode ser concedido. Valor da prestação excede 25% do salario bruto.";
    }
}


console.log(Emprestimo(salarioBruto, valorPrestacao));