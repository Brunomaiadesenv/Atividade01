const ler = require('readline-sync');

const filtrarIdadesPares = (idades) => {
    return idades.filter(idade => idade % 2 === 0);
}

let idades = ler.question('Informe as idades dos participantes separadas por vírgula: ')
                .split(',')
                .map(Number);

let idadesPares = filtrarIdadesPares(idades);
console.log(idadesPares);
