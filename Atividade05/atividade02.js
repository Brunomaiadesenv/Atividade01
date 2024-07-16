const ler = require('readline-sync');


let chamadas = [];
let altaPrioridade = [];


let capturarChamadas = () => {
  console.log('Digite "parar" para finalizar a entrada de chamadas.');

  let check = true;

  while (check) {
    let tipo = ler.question('Digite o tipo de chamada (por exemplo, "Incendio"): ');
    if (tipo.toLowerCase() === 'parar') {

      filtrarChamadas();
      check = false;
      return;
    }

    let mensagem = ler.question('Digite a mensagem breve da chamada: ');

 
    let chamada = {
      tipo: tipo,
      mensagem: mensagem
    };

 
    chamadas.push(chamada);
  }
};


let filtrarChamadas = () => {
  altaPrioridade = chamadas.filter(chamada => chamada.tipo.toLowerCase() === 'incendio');
  chamadas = chamadas.filter(chamada => chamada.tipo.toLowerCase() !== 'incendio');
  
  exibirChamadas();
};


let exibirChamadas = () => {
  console.log('-----Chamadas de Emergencia ---');
  console.log('Todas as chamadas:');
  console.table(chamadas);
  console.log('-------Chamadas de alta prioridade:--------');
  console.table(altaPrioridade);
};


capturarChamadas();