const ler = require('readline-sync');


function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Não existe dia da semana com esse número.";
    }
}


function main() {

    const numero = ler.questionInt("Digite um número inteiro entre 1 e 7: ");


    if (numero >= 1 && numero <= 7) {
        console.log("O dia da semana correspondente ao número " + numero + " é: " + diaDaSemana(numero));
    } else {
        console.log("Número fora do intervalo.");
    }
}


main();