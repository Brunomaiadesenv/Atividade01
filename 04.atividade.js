const ler = require('readline-sync');




    var variavel = ler.questionInt("Digite um número inteiro: ");

   
    if (variavel % 2 === 0) {
  
        variavel += 8;
    } else {
   
        variavel += 10;
    }

   
    console.log("O resultado da operação é: " + variavel);