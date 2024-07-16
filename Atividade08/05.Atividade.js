const ler = require('readline-sync');

const contarOcorrencias = (palavras, palavraBuscada) => {
    return palavras.filter(palavra => palavra === palavraBuscada).length;
}

let paragrafo = ler.question('Digite um parágrafo (palavras separadas por espaço): ')
                    .split(' ');
let palavraBuscada = ler.question('Digite a palavra para contar as ocorrências: ');

let ocorrencias = contarOcorrencias(paragrafo, palavraBuscada);
console.log(ocorrencias);
