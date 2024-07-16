const ler = require('readline-sync');

const filtrarNomesMaioresDeIdade = (usuarios) => {
    return usuarios
        .filter(usuario => usuario.idade > 18)
        .map(usuario => usuario.nome.toUpperCase());
}

let usuarios = [
    { nome: 'Pedro', idade: 20 },
    { nome: 'Ana', idade: 17 },
];

let nomesMaioresDeIdade = filtrarNomesMaioresDeIdade(usuarios);
console.log(nomesMaioresDeIdade);
