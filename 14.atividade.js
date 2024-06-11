const ler = require('readline-sync');


function verificarLetra(letra) {
   
    if (letra.length === 1 && 'aeiouAEIOU'.includes(letra)) {
        return "A letra '" + letra + "' é uma vogal.";
    } else if (letra.length === 1 && /^[a-zA-Z]$/.test(letra)) { 
        return "A letra '" + letra + "' é uma consoante.";
    } else {
        return "Por favor, insira apenas uma letra do alfabeto.";
    }
}


function main() {
    
    const letra = ler.question("Digite uma letra do alfabeto: ");

    
    console.log(verificarLetra(letra));
}


main();