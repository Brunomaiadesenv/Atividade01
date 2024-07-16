const doar = [
    { nomeDoador: "Carlos", valor: 100 },
    { nomeDoador: "Fabio", valor: 50 },
    { nomeDoador: "Djalma", valor: 200 }
];

const instituicoes = ["Instituicao 1", "Instituicao 2", "Instituicao 3"];
    const valorPorInstituicao = Array(instituicoes.length).fill(0);

    
    for (let i = 0; i < doar.length; i++) {
        const indiceInstituicao = i % instituicoes.length;
        valorPorInstituicao[indiceInstituicao] += doar[i].valor;
    }

    console.log("Detalhes da distribuição de doacoes:");
    for (let i = 0; i < instituicoes.length; i++) {
        console.log(`${instituicoes[i]} recebeu R$ ${valorPorInstituicao[i]}`);
    }


