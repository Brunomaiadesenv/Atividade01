const ler = require('readline-sync');

let produto = [];

let check = true;


while (check) {
    let nome = ler.question("Digite o nome do seu produto: ");
    let quantidade = ler.questionInt("Informe a quantidade: ");


    produto.push({nome: nome, quantidade: quantidade});

    let x = ler.question("Dados cadastrados! 'enter' cadastrar outro cliente ou 'sair' para finalizar: ").toLowerCase();
    if (x === 'sair') {
        check = false;
        console.log("Cadastro Finalizado");
    } 
}

console.table(produto);

let ordem_alfa = produto.sort((a, b) => a.nome.localeCompare(b.nome));

let filtrar_quantidade = ordem_alfa.filter(q => q.quantidade > 0);
console.tab(filtrar_quantidade);
