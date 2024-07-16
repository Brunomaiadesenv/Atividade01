const ler = require('readline-sync');

const timeA = ler.question("Digite o nome do primeiro time: ");
const golsTimeA = ler.questionInt("Digite o número de gols marcados pelo primeiro time: ");
const timeB = ler.question("Digite o nome do segundo time: ");
const golsTimeB = ler.questionInt("Digite o número de gols marcados pelo segundo time: ");


function determinarVencedor(timeA, golsTimeA, timeB, golsTimeB) {
    if (golsTimeA > golsTimeB) {
        return timeA + " venceu!";
    } else if (golsTimeB > golsTimeA) {
        return timeB + " venceu!";
    } else {
        return "EMPATE";
    }
}

  
    console.log(determinarVencedor(timeA, golsTimeA, timeB, golsTimeB));
