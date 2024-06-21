const ler = require('readline-sync');


    const tamanhoArray = 10;
    let numeros = []; 

    console.log(`Digite ${tamanhoArray} números inteiros:`);


    for (let i = 0; i < tamanhoArray; i++) {
        let numero = ler.questionInt(`Número ${i + 1}: `);
        numeros.push(numero);
    }


    let opt;
    do {
        console.log("-----------Escolha uma opção:----------");
        console.log("1 - Mostrar a lista na ordem direta");
        console.log("2 - Mostrar a lista na ordem inversa");
        console.log("3 - Mostrar a soma total dos valores");
        console.log("0 - Finalizar o programa");
        
        opt = ler.questionInt("opt: ");

        switch (opt) {
            case 0:
                console.log("Programa finalizado.");
                break;
            case 1:
                console.log("Lista na ordem direta:");
                console.log(numeros);
                break;
            case 2:
                console.log("Lista na ordem inversa:");
                console.log(numeros.slice().reverse());
                break;
            case 3:
                let soma = numeros.reduce((acc, cur) => acc + cur, 0);
                console.log(`Soma total dos valores: ${soma}`);
                break;
            default:
                console.log("Opção inválida. Digite 0, 1, 2 ou 3.");
                break;
        }
    } while (opt !== 0);