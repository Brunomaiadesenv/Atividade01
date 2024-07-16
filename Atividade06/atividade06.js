
let votos = {
    candidatoJoao: [
        { eleitor: 'Eleitor1' },
        { eleitor: 'Eleitor2' },
        { eleitor: 'Eleitor3' }
    ],
    candidatoCarlos: [
        { eleitor: 'Eleitor4' },
        { eleitor: 'Eleitor5' },
        { eleitor: 'Eleitor6' },
        { eleitor: 'Eleitor7' }
    ],
    candidatoMiguel: [
        { eleitor: 'Eleitor8' },
        { eleitor: 'Eleitor9' },
        { eleitor: 'Eleitor10' },
        { eleitor: 'Eleitor11' },
        { eleitor: 'Eleitor12' }
    ]
};


let totalVotos = {};


for (let candidato in votos) {
    totalVotos[candidato] = votos[candidato].length;
}


let vencedor = '';
let maiorVotos = -1; 

for (let candidato in totalVotos) {
    if (totalVotos[candidato] > maiorVotos) {
        maiorVotos = totalVotos[candidato];
        vencedor = candidato;
    } else if (totalVotos[candidato] === maiorVotos) {
        vencedor = 'Empate';
    }
}


console.log("Total de votos por candidato:");
for (let candidato in totalVotos) {
    console.log(`${candidato}: ${totalVotos[candidato]} votos`);
}

if (vencedor === 'Empate') {
    console.log("Houve um empate.");
} else {
    console.log(`O vencedor e o candidato ${vencedor} com ${maiorVotos} votos.`);
}