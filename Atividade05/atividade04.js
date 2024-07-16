const ler = require('readline-sync');


const participantsToRegister = [];


const addParticipant = (nome) => {
  
  if (participantsToRegister.includes(nome)) {
    console.log(`${nome} já esta na lista de participantes.`);
  } else {
    participantsToRegister.push(nome);
    console.log(`${nome} foi adicionado à lista de participantes.`);
  }
};


const registerParticipant = (nome) => {
  const index = participantsToRegister.indexOf(nome);
  if (index !== -1) {
    participantsToRegister.splice(index, 1);
    console.log(`${nome} foi registrado com sucesso.`);
  } else {
    console.log(`${nome} não está na lista de participantes.`);
  }
};


const showParticipantsList = () => {
  console.log('---------- Participantes a serem registrados: -----------');
  participantsToRegister.forEach((participant, index) => {
    console.log(`${index + 1}. ${participant}`);
  });
  console.log(); 
};


participantsToRegister.push('Bruno', 'Fabio', 'Alex');


showParticipantsList();


while (true) {
  const option = ler.question(`Escolha uma opção:\n1. Adicionar participante\n2. Registrar participante\n3. Sair\nOpção: `);

  switch (option) {
    case '1':
      const nomeAdd = ler.question('Digite o nome do participante a ser adicionado: ');
      addParticipant(nomeAdd);
      break;
    case '2':
      const nomeReg = ler.question('Digite o nome do participante a ser registrado: ');
      registerParticipant(nomeReg);
      break;
    case '3':
      console.log('Encerrando o programa...');
      process.exit(0); 
    default:
      console.log('Opção invalida. Escolha uma opção valida.');
  }

 
  showParticipantsList();
}