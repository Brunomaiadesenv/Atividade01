const ler = require('readline-sync');

let playlist = [];
let segundosTotal = 0;

do {
    let titulo = ler.question('Digite o titulo da musica: ');
    let artista = ler.question('Digite o nome do artista: ');
    let duracao = ler.questionInt('Digite a duração da musica em segundos: ');

    let musica = {
        titulo: titulo,
        artista: artista,
        duracao: duracao
    };

    playlist.push(musica);

    let resposta = ler.question('Digite "sair" para encerrar a playlist ou pressione Enter para adicionar mais musicas: ').toLowerCase();
    
    if (resposta === 'sair') {
        break; 
    }

} while (true);

console.log("Detalhes da Playlist:");

for (let musica of playlist) {
    console.log(`Titulo: ${musica.titulo} | Artista: ${musica.artista} | Duracao: ${musica.duracao} segundos`);
    segundosTotal += musica.duracao;
}

console.log(`Tempo total da playlist: ${segundosTotal} segundos`);