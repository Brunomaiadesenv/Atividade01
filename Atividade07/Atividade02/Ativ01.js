const ler = require('readline-sync');

function PesoPlaneta(pesoTerra, NumeroPlaneta) {
    let gravidade;
    let nomePlaneta;

    switch (NumeroPlaneta) {
        case 1:
            Planeta = "Terra";
            gravidade = 0.37;
            break;
        case 2:
            Planeta = "Marte";
            gravidade = 0.88;
            break;
        case 3:
            Planeta = "Marte";
            gravidade = 0.38;
            break;
        case 4:
            Planeta = "Saturno";
            gravidade = 2.64;
            break;
        case 5:
            Planeta = "Saturno";
            gravidade = 1.15;
            break;
        case 6:
            Planeta = "Plutao";
            gravidade = 1.17;
            break;
        default:
            return "Número do planeta inválido.";
    }

    const pesoPlaneta = (pesoTerra / 10) * gravidade;
    return `O seu peso em ${nomePlaneta} seria: ${pesoPlaneta.toFixed(2)} kg`;
}

const pesoTerra = parseFloat(ler.question("Digite o seu peso na Terra (em kg): "));
const numeroPlaneta = parseInt(ler.question(`Escolha um planeta digitando o número correspondente:\n
1 - Mercúrio\n
2 - Vênus\n
3 - Marte\n
4 - Júpiter\n
5 - Saturno\n
6 - Urano\n
Digite o número do planeta: `), 10);

const resultado = PesoPlaneta(pesoTerra, numeroPlaneta);
console.log(resultado);
