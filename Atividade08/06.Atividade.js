const ler = require('readline-sync');

const extrairNomesCompletos = (funcionarios) => {
    return funcionarios.map(funcionario => `${funcionario.primeiroNome} ${funcionario.ultimoNome}`);
}

let funcionarios = [
    { primeiroNome: 'João', ultimoNome: 'Silva' },
    { primeiroNome: 'Maria', ultimoNome: 'Santos' }
];

let nomesCompletos = extrairNomesCompletos(funcionarios);
console.log(nomesCompletos);
