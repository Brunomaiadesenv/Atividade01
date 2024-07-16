const ler = require('readline-sync');


const letra = ler.question("Digite uma letra do alfabeto: ");


function verificarLetra(letra) {
   
    if (letra.length === 1 && 'aeiouAEIOU'.includes(letra)) {
        return "A letra '" + letra + "' e uma vogal.";
    } else if (letra.length === 1 && /^[a-zA-Z]$/.test(letra)) { 
        return "A letra '" + letra + "' e uma consoante.";
    } else {
        return "Por favor, insira apenas uma letra do alfabeto.";
    }
}


   console.log(verificarLetra(letra));
