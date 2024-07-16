const ler = require('readline-sync');

const aplicarAumento = (precos, aumentoPercentual) => {
    return precos.map(preco => preco * (1 + aumentoPercentual / 100));
}

let precos = ler.question('Informe os preços dos produtos separados por vírgula: ')
                .split(',')
                .map(Number);
let aumento = ler.questionFloat('Informe o aumento percentual: ');

let novosPrecos = aplicarAumento(precos, aumento);
console.log(novosPrecos);
