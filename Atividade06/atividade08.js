const livros = [
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
    { titulo: "Guerra e Paz", autor: "Liev Tolstói", ano: 1869 },
    { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 }
];

const ordenarLivros = (tipoOrdenacao) => {
    switch (tipoOrdenacao) {
        case "titulo":
            livros.sort((a, b) => a.titulo.localeCompare(b.titulo));
            break;
        case "ano":
            livros.sort((a, b) => a.ano - b.ano);
            break;
        default:
            console.log("Opção inválida.");
            return;
    }

    console.log(`Lista de livros ordenada por ${tipoOrdenacao}:`);
    for (const livro of livros) {
        console.log(`${livro.titulo} - ${livro.autor} (${livro.ano})`);
    }
};


ordenarLivros("titulo");
