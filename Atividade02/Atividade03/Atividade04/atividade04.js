const ler = require('readline-sync');


    let elementos = []; 

    console.log("Digite cinco elementos:");

    
    for (let i = 0; i < 5; i++) {
        let elemento = ler.question(`Elemento ${i + 1}: `);
        elementos.push(elemento);
    }


    let elementoBusca = ler.question("Digite um elemento para contar as ocorrências: ");

    let contador = 0;
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i] === elementoBusca) {
            contador++;
        }
    }


    console.log(`O elemento "${elementoBusca}" aparece ${contador} vezes no array.`);
