const ler = require('readline-sync');


function determinarVencedor(time1, golsTime1, time2, golsTime2) {
    if (golsTime1 > golsTime2) {
        return time1 + " venceu!";
    } else if (golsTime2 > golsTime1) {
        return time2 + " venceu!";
    } else {
        return "EMPATE";
    }
}


function main() {
   
    const time1 = ler.question("Digite o nome do primeiro time: ");
    const golsTime1 = ler.questionInt("Digite o número de gols marcados pelo primeiro time: ");
    const time2 = ler.question("Digite o nome do segundo time: ");
    const golsTime2 = ler.questionInt("Digite o número de gols marcados pelo segundo time: ");

   
    console.log(determinarVencedor(time1, golsTime1, time2, golsTime2));
}


main();