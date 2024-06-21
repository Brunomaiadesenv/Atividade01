
const ler = require("readline-sync");




for (let i = 1; i <= 10; i++) {
    
    let i = ler.questionInt("Informe um numero: ")

    if (i > 10) {
        console.log("Numeros maiores que 10", i);
                
    }

}