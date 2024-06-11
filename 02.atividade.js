const ler = require('readline-sync');




    const nome = ler.question("Digite o nome da pessoa: ");
    const sexo = ler.question("Digite o sexo da pessoa (M ou F): ").toUpperCase();
    const estadoCivil = ler.question("Digite o estado civil da pessoa (SOLTEIRO, CASADO, DIVORCIADO ou VIUVO): ").toUpperCase();


    if (sexo === 'F' && estadoCivil === 'CASADA') {

        const tempoCasada = ler.questionInt("Digite o tempo de casamento (em anos): ");
        console.log(`${nome} está casada há ${tempoCasada} anos.`);
    } else {
        console.log(`${nome} não atende aos critérios de sexo feminino e estado civil casada.`);
    }
