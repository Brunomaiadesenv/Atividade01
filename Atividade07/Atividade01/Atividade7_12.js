const ler = require('readline-sync');


const numero = ler.questionInt("Digite um número inteiro entre 1 e 7: ");


function Dia(numero) {
    switch (numero) {
        case 1:
            return "Segunda";
        case 2:
            return "Terca";
        case 3:
            return "Quarta";
        case 4:
            return "Quinta";
        case 5:
            return "Sexta";
        case 6:
            return "Sabado";
        case 7:
            return "Domingo";
        default:
            return "Dia da semana inexistente.";
    }
}


if (numero >= 1 && numero <= 7) {
    console.log("O dia da semana correspondente ao número digitado é : " + Dia(numero));
} else {
    console.log("Número fora do intervalo.");
}


