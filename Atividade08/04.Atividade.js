const ler = require('readline-sync');

const verificarPalindromo = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

let palavra = ler.question('Digite uma palavra para verificar se é um palíndromo: ');
let ehPalindromo = verificarPalindromo(palavra);
console.log(ehPalindromo);
