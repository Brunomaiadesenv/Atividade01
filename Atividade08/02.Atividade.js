const ler = require('readline-sync');

const contarCaracteres = (str) => {
    return str.length;
}

let texto = ler.question('Digite uma frase para contar os caracteres: ');
let numCaracteres = contarCaracteres(texto);
console.log(numCaracteres);
