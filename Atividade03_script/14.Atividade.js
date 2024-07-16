const ler = require('readline-sync');

let votosCandidato1 = 0;
let votosCandidato2 = 0;
let votosCandidato3 = 0;
let votosBrancos = 0;
let votosNulos = 0;
let totalVotos = votosCandidato1 + votosCandidato2 + votosCandidato3 + votosBrancos + votosNulos;
let vencedor = (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) ? 1 :
               (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) ? 2 : 3;

               
while (true) {
  let voto = parseInt(prompt("Digite seu voto (1, 2, 3 para candidatos, 0 para branco, 4 para nulo, -1 para finalizar):"));
  if (voto === -1) break;

  switch (voto) {
    case 1:
      votosCandidato1++;
      break;
    case 2:
      votosCandidato2++;
      break;
    case 3:
      votosCandidato3++;
      break;
    case 0:
      votosBrancos++;
      break;
    case 4:
      votosNulos++;
      break;
    default:
      console.log("Voto inválido.");
  }
}



console.log(`Candidato vencedor: ${vencedor}`);
console.log(`Número de votos em branco: ${votosBrancos}`);
console.log(`Número de votos nulos: ${votosNulos}`);
console.log(`Número de eleitores que compareceram às urnas: ${totalVotos}`);
