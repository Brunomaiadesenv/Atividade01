const ler = require('readline-sync');

const valorFixado = ler.questionFloat("Digite o valor fixado de vendas: ");
const valorVendas = ler.questionFloat("Digite o valor de vendas do funcionário: ");


function verificarPremio(valorFixado, valorVendas) {
    if (valorVendas >= valorFixado) {
        return "Ganhou!";
    } else {
        return "Nao ganhou!";
    }
}

   
    console.log(verificarPremio(valorFixado, valorVendas));
