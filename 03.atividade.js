const ler = require('readline-sync');
   

    let a = ler.questionInt("Digite o valor de A:");
    let b = ler.questionInt("Digite o valor de B:");


    let c;

     if (a === b) {
        c = a + b;
    } else {
   
        c = a * b;
    }


    console.log("O resultado é: " + c);


