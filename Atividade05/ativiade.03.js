const ler = require('readline-sync');

let livros = []; 

const capturarLivro = () => {
    while (true) {
        let titulo = ler.question('------Digite o título do livro (ou digite "sair" para terminar): -----');
        if (titulo.toLowerCase() === 'sair') {
            exibirResultados();
            break;
        }
        
        let categoria = ler.question('-----------Digite a categoria do livro: -------------');
        adicionarLivro({ titulo, categoria });
    }
};

const adicionarLivro = ({ titulo, categoria }) => {
    switch (categoria.toLowerCase()) {
        case 'Terror':
        case 'Aventura':
        case 'Drama':
        case 'Comedia':
            livros.push({ titulo, categoria });
            break;
        default:
            console.log(`Categoria "${categoria}" não reconhecida. Livro "${titulo}" não foi adicionado.`);
            break;
    }
};

const exibirResultados = () => {
    let contagemPorCategoria = {};

    livros.forEach(livro => {
        if (contagemPorCategoria[livro.categoria]) {
            contagemPorCategoria[livro.categoria]++;
        } else {
            contagemPorCategoria[livro.categoria] = 1;
        }
    });

    console.log("Resultados da contagem por categoria:");

    for (let categoria in contagemPorCategoria) {
        console.log(`${categoria}: ${contagemPorCategoria[categoria]}`);
    }
};

capturarLivro();