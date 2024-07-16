let ler = require('readline-sync');


let sujeitos = [
    "Um cachorro",
    "Uma criança",
    "Um astronauta",
    "Um cientista",
    "Um alienígena"
];

let verbos = [
    "comeu",
    "encontrou",
    "descobriu",
    "correu atrás de",
    "brincou com"
];

let objetos = [
    "um biscoito",
    "um tesouro",
    "vida em outro planeta",
    "um foguete",
    "um brinquedo"
];


console.log("História gerada:");

for (let i = 0; i < 5; i++) {
    let randomSujeitoIndex = Math.floor(Math.random() * sujeitos.length);
    let randomVerboIndex = Math.floor(Math.random() * verbos.length);
    let randomObjetoIndex = Math.floor(Math.random() * objetos.length);

    let sujeito = sujeitos[randomSujeitoIndex];
    let verbo = verbos[randomVerboIndex];
    let objeto = objetos[randomObjetoIndex];

    console.log(`${sujeito} ${verbo} ${objeto}.`);
}