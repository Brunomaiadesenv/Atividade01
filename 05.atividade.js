const ler = require('readline-sync');


    var valores = [];

    for (let i = 0; i < 3; i++) {
 
        let valor = ler.questionInt("Digite o " + (i + 1) + "º valor inteiro: ");
        

        while (valores.includes(valor)) {
            console.log("Valor já inserido. Por favor, insira um valor diferente.");
            valor = ler.questionInt("Digite o " + (i + 1) + "º valor inteiro: ");
        }

        valores.push(valor);
    }

    return valores; 


    


