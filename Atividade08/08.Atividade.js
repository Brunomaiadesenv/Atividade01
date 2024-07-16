const ler = require('readline-sync');

const filtrarAprovados = (alunos) => {
    let aprovados = [];
    for (let aluno of alunos) {
        if (aluno.nota >= 60) {
            aprovados.push(aluno.nome.toUpperCase());
        }
    }
    return aprovados;
}

let alunos = [
    { nome: 'João', nota: 55 },
    { nome: 'Maria', nota: 65 },
];

let alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);
