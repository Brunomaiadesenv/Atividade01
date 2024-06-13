const ler = require('readline-sync');


let opt = ler.questionInt('Digite o mes:  ');

let estacao;
switch (opt) {
    case 1:
    case 2:
    case 3:
        estacao = 'Verão';
        break;
    case 4:
    case 5:
    case 6:
        estacao = 'Outono';
        break;
    case 7:
    case 8:
    case 9:
        estacao = 'Inverno';
        break;
    case 10:
    case 11:
    case 12:
        estacao = 'Primavera';
        break;
    default:
        estacao = 'Mês inválido';
        break;
}


console.log(`A estação do ano correspondente ao mês de digitato é ${estacao}`);