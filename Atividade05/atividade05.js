const ler = require('readline-sync');


const funcionarios = [];


const adicionarFuncionario = () => {
  console.log('-------Adicionar Novo Funcionário: ---------');
  const nome = ler.question('Digite o nome do funcionário: ');
  const departamento = ler.question('Digite o departamento do funcionário: ');
  const cargo = ler.question('Digite o cargo do funcionário: ');
  const anosServico = ler.questionInt('Digite os anos de serviço do funcionário: ');

  const novoFuncionario = {
    nome,
    departamento,
    cargo,
    anosServico
  };

  funcionarios.push(novoFuncionario);
  console.log(`${nome} foi adicionado como novo funcionário.`);
};


const exibirFuncionarios = () => {
  console.log('-------------Lista de Funcionários: ------------------');
  funcionarios.forEach(funcionario => {
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Departamento: ${funcionario.departamento}`);
    console.log(`Cargo: ${funcionario.cargo}`);
    console.log(`Anos de Serviço: ${funcionario.anosServico}`);
    console.log('------------------------');
  });
};


const buscarFuncionarioPorNome = () => {
  const nomeBusca = ler.question('Digite o nome do funcionario que deseja buscar: ');
  const funcionarioEncontrado = funcionarios.find(funcionario => funcionario.nome === nomeBusca);

  if (funcionarioEncontrado) {
    console.log('-------------Detalhes do Funcionario:---------------------');
    console.log(`Nome: ${funcionarioEncontrado.nome}`);
    console.log(`Departamento: ${funcionarioEncontrado.departamento}`);
    console.log(`Cargo: ${funcionarioEncontrado.cargo}`);
    console.log(`Anos de Serviço: ${funcionarioEncontrado.anosServico}`);
  } else {
    console.log(`Funcionario com o nome ${nomeBusca} não encontrado.`);
  }
};


console.log('----------Bem-vindo ao Sistema de Registro de Funcionarios! --------------');

while (true) {
  const opt = ler.questionInt(`
Escolha uma opção:
1. Adicionar Funcionário
2. Exibir Funcionários
3. Buscar Funcionário por Nome
4. Encerrar Programa
Opção: `);

  switch (opt) {
    case 1:
      adicionarFuncionario();
      break;
    case 2:
      exibirFuncionarios();
      break;
    case 3:
      buscarFuncionarioPorNome();
      break;
    case 4:
      console.log('Encerrando o programa...');
      process.exit(0);
    default:
      console.log('Opção inválida. Escolha uma opção válida.');
  }
}