const ler = require('readline-sync');


let pesoTerra = parseFloat(ler.question('Digite o peso da pessoa na Terra (em kg): '));


console.log('Escolha o planeta:');
console.log('1 - Mercurio');
console.log('2 - Venus');
console.log('3 - Marte');
console.log('4 - Jupiter');
console.log('5 - Saturno');
console.log('6 - Urano');


let opt = ler.questionInt('Digite o numero do planeta desejado: ');


let gravidadeRelativa;
let nomePlaneta;
switch (opt) {
    case 1:
        gravidadeRelativa = 0.37;
        nomePlaneta = 'Mercurio';
        break;
    case 2:
        gravidadeRelativa = 0.88;
        nomePlaneta = 'Venus';
        break;
    case 3:
        gravidadeRelativa = 0.38;
        nomePlaneta = 'Marte';
        break;
    case 4:
        gravidadeRelativa = 2.64;
        nomePlaneta = 'Jupiter';
        break;
    case 5:
        gravidadeRelativa = 1.15;
        nomePlaneta = 'Saturno';
        break;
    case 6:
        gravidadeRelativa = 1.17;
        nomePlaneta = 'Urano';
        break;
    default:
        console.log('Opção inválida. Por favor, selecione um número de planeta válido.');
        process.exit(1); 
}


let pesoPlaneta = pesoTerra * gravidadeRelativa;


console.log(`O peso da pessoa em ${nomePlaneta} é ${pesoPlaneta.toFixed(2)} kg`);