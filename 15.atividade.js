const ler = require('readline-sync');


function verificarPremio(valorFixado, valorVendas) {
    if (valorVendas >= valorFixado) {
        return "Ganhou!";
    } else {
        return "Não ganhou!";
    }
}


function main() {
 
    const valorFixado = ler.questionFloat("Digite o valor fixado de vendas: ");
    const valorVendas = ler.questionFloat("Digite o valor de vendas do funcionário: ");

   
    console.log(verificarPremio(valorFixado, valorVendas));
}


main();