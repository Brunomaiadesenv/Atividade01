const ler = require('readline-sync');

function ValorFinal(valorCompra, codigoComprador) {
    let desconto = 0;

    switch (codigoComprador) {
        case 2:
            desconto = 0.10;  
            break;
        case 3:
            desconto = 0.05;  
            break;
        default:
            desconto = 0;   
    }

    const valorFinal = valorCompra * (1 - desconto);
    console.log(`O valor total a ser pago e R$ ${valorFinal.toFixed(2)}`);
}

const valorCompra = parseFloat(ler.question("Digite o valor total da compra: "));
const codigoComprador = parseInt(ler.question("Digite o codigo do comprador (1 - Cliente comum, 2 - Funcionario, 3 - Cliente VIP): "));

ValorFinal(valorCompra, codigoComprador);
