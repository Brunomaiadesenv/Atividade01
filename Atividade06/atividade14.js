const readline = require('readline-sync');

const filmes = [
    { titulo: "velozes e Furiosos", avaliacoes: [], mediaAvaliacoes: 0 },
    { titulo: "batmam", avaliacoes: [], mediaAvaliacoes: 0 }
];


    const avaliacao = readline.questionInt(`Digite uma avaliação 1 a 5 para o filme ${filmes[indiceFilme].titulo}: `);

    switch (avaliacao) {
        case 1:
        case 2:
            console.log("Filme ruim.");
            break;
        case 3:
            console.log("Filme médio.");
            break;
        case 4:
        case 5:
            console.log("Filme bom.");
            break;
        default:
            console.log("Invalida.");
            return;
    }

    filmes[indiceFilme].avaliacoes.push(avaliacao);
    filmes[indiceFilme].mediaAvaliacoes = filmes[indiceFilme].avaliacoes.reduce((acc, curr) => acc + curr, 0) / filmes[indiceFilme].avaliacoes.length;

    console.log(`Média de avaliações para ${filmes[indiceFilme].titulo}: ${filmes[indiceFilme].mediaAvaliacoes.toFixed(1)}`);

