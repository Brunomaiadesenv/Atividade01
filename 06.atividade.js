const ler = require('readline-sync');


function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}


function determinarCondicaoIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Acima do peso";
    } else {
        return "Obeso";
    }
}


function main() {
    
    var peso = ler.questionFloat("Digite o peso (em kg): ");
    var altura = ler.questionFloat("Digite a altura (em metros): ");


    var imc = calcularIMC(peso, altura);


    var condicao = determinarCondicaoIMC(imc);

  
    console.log("Seu IMC é: " + imc.toFixed(2));
    console.log("Condição de peso: " + condicao);
}


main();