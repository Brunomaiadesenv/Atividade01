let ler = require('readline-sync');


let lerNumeroInteiroPositivo = (mensagem) => {
    let numero;
    do {
        numero = ler.questionInt(mensagem);
        if (numero <= 0) {
            console.log("Por favor, digite um número inteiro positivo.");
        }
    } while (numero <= 0);
    return numero;
};


let arrayOriginal = [];
console.log("Digite 10 números inteiros positivos:");
for (let i = 0; i < 10; i++) {
    let numero = lerNumeroInteiroPositivo(`Digite o ${i + 1}º número: `);
    arrayOriginal.push(numero);
}


let arrayModificado = [];
for (let i = 0; i < arrayOriginal.length; i++) {
    if (i % 2 === 0) { 
        arrayModificado.push(arrayOriginal[i] / 2);
    } else { 
        arrayModificado.push(arrayOriginal[i] * 3);
    }
}


console.log("Array Original:", arrayOriginal);
console.log("Array Modificado:", arrayModificado);
