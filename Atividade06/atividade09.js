let jogadores = [
    { nome: "Bruno ", pontuacao: 1500 },
    { nome: "Fabio", pontuacao: 1200 },
    { nome: "Bernardo", pontuacao: 1800 },
    { nome: "Daniela", pontuacao: 1350 },
    { nome: "Guilherme", pontuacao: 1650 }
  ];
  
    jogadores.sort((a, b) => b.pontuacao - a.pontuacao);
  
    console.log("Ranking de Jogadores:\n");
    for (let i = 0; i < jogadores.length; i++) {
      console.log(`${i + 1}. ${jogadores[i].nome} - Pontuação: ${jogadores[i].pontuacao}`);
    }
  
  

