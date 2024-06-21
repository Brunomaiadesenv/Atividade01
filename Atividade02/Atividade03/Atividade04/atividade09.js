const ler = require('readline-sync');


    let tamanhoArray = 10;
    let nomes = []; 

    console.log(`Digite ${tamanhoArray} nomes:`);


    for (let i = 0; i < tamanhoArray; i++) {
        let nome = ler.question(`Nome ${i + 1}: `);
        nomes.push(nome);
    }


    let nomeBusca = ler.question("Digite um nome para buscar na lista: ");

    let achou = false;
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nomeBusca) {
            achou = true;
            break;
        }
    }

   
    if (achou) {
        console.log("ACHEI");
    } else {
        console.log("NÃO ACHEI");
    }