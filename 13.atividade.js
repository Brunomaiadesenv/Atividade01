const ler = require('readline-sync');


function calcularPrecoCombustivel(tipoCombustivel, quantidadeLitros) {
    let precoLitro;
    let descontoPorLitro;

    
    if (tipoCombustivel === 'Álcool') {
        precoLitro = 4.5; 
        if (quantidadeLitros <= 25) {
            descontoPorLitro = 0.02 * precoLitro;
        } else {
            descontoPorLitro = 0.04 * precoLitro;
        }
    } else if (tipoCombustivel === 'Gasolina') {
        precoLitro = 5.3; 
        if (quantidadeLitros <= 25) {
            descontoPorLitro = 0.03 * precoLitro;
        } else {
            descontoPorLitro = 0.05 * precoLitro;
        }
    } else {
        return "Tipo de combustível inválido.";
    }

 
    const precoFinal = quantidadeLitros * (precoLitro - descontoPorLitro);

    return precoFinal.toFixed(2); 
}


function main() {
   
    const tipoCombustivel = ler.question("Digite o tipo de combustível (Álcool ou Gasolina): ");
    const quantidadeLitros = ler.questionFloat("Digite a quantidade de litros: ");

  
    console.log("Preço final a ser pago: R$ " + calcularPrecoCombustivel(tipoCombustivel, quantidadeLitros));
}

main();