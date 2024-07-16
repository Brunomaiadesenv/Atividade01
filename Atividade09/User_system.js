const usuarios = require('./User_bd');
const ler = require('readline-sync');

const cadUser = () => {
    let x = usuarios.length; 
    let id = x + 1;
    let nome = ler.question("Digite o nome do usuario: ");
    let cpf = ler.questionInt("Informe o cpf: ");
    let telefone = ler.questionInt("Digite o numero do telefone: ");
    let email = ler.questionEMail("Digite e-mail: ");
    adicionarUsuario(id, nome, cpf, telefone, email);
};

const adicionarUsuario = (id, nome, cpf, telefone, email) => {
    usuarios.push({id: id, nome: nome, cfp: cpf, telefone: telefone, email: email});
    console.log("Usuario Cadastrado com Sucesso!!");
    console.log("...");
    ler.question("Pressione Enter para voltar ao MENU");
    console.clear();
};

const listarUser = () => {
    console.log("--------------- Usuarios Cadastrados -------------");
    usuarios.forEach( usuario => console.log(
        `ID: ${usuario.id} -------------
         Nome: ${usuario.nome}
         CPF: ${usuario.cpf}
         Telefone: ${usuario.telefone}
         E-mail: ${usuario.email}
         -------------------------------`
    ));
    console.log("--------------------------------------------------");
    console.log("...");
    ler.question("Pressione Enter para voltar ao MENU");
    console.clear();
};

const atualizarUser = () => {

  let check = true;

  while (check) {
        
    let id = ler.questionInt("Informe o ID do Usuario: ");
    let usuario = usuarios.find(prod => prod.id === id);
    if (usuario) {
        console.log(
            `ID: ${usuario.id} -------------
             Nome: ${usuario.nome}
             CPF: ${usuario.cpf}
             Telefone: ${usuario.telefone}
             E-mail: ${usuario.email}
             -------------------------------`
        );
        let opt = ler.questionInt("Deseja alterar este Usuario? 1.SIM - 2.NAO: ");
        if (opt === 1) {
            console.clear();
            attUsuario(id);
            check = false;
        } else {
            console.clear();
        }
    } else {
        console.clear();
        console.log("...");
        console.log("Usuario não Encontrado!!");
    }
  } 
};

const attUsuario = (id) => {
    let usuario = usuarios.find(user => user.id === id);
    let attnome = ler.question(`Informe o novo nome do usuario [${usuario.nome}]: `);
    let attcpf = ler.questionInt(`Informe a nova cpf [${usuario.cpf}]: `);
    let atttel = ler.questionInt(`Informe o novo telefone [${usuario.telefone}]: `);
    let attemail = ler.questionFloat(`Informe o novo e-mail [${usuario.email}]: `);
    produto.nome = attnome;
    produto.cpf = attcpf;
    produto.preco = atttel;
    produto.email = attemail;
    console.log("Usuario Alterado com Sucesso!!");
    console.log(
        `ID: ${usuario.id} -------------
         Nome: ${usuario.nome}
         CPF: ${usuario.quantidade}
         Telefone: ${usuario.preco}
         E-mail: ${usuario.preco}
         -------------------------------`
    );
    console.log("...");
    ler.question("Pressione Enter para voltar ao MENU");
    console.clear();
};

const listarUserPorId = () => {

  let check = true;

  while (check) {
        
    let id = ler.questionInt("Informe o ID do usuario: ");
    let usuario = usuarios.find(user => user.id === id);
    if (usuario) {
        console.log(
            `ID: ${usuarios.id} -------------
             Nome: ${usuario.nome}
             CPFf: ${usuario.cpf}
             Telefone: ${usuario.telefone}
             E-mail: ${usuario.email}
             -------------------------------`
        );
        let opt = ler.questionInt("Deseja buscar outro Usuario? 1.SIM - 2.NAO: ");
        if (opt === 1) {
            console.clear();
        } else {
            check = false;
            console.clear();
        }
    } else {
        console.clear();
        console.log("...");
        console.log("Usuario não Encontrado!!");
    }
  } 
};

const excluirUser = () => {

    let check = true;
  
    while (check) {
          
      let id = ler.questionInt("Informe o ID do produto: ");
      let usuario = usuarios.find(user => user.id === id);
      let id_ex = usuarios.findIndex(user => user.id === id);
      if (usuario) {
          console.log(
              `ID: ${usuario.id} -------------
               Nome: ${usuario.nome}
               Quantidade: ${usuario.cpf}
               telefone: ${usuario.telefone}
               email: ${usuario.email}
               -------------------------------`
          );
          let opt = ler.questionInt("Tem certeza que deseja excluir este Usuario? 1.SIM - 2.NAO: ");
          if (opt === 1) {
              usuarios.splice(id_ex, 1); // ação de exluir o produto
              console.log("Usuario excluído com Sucesso!!");
              console.log("...");
              ler.question("Pressione Enter para voltar ao MENU");
              check = false;
          } else {
              check = false;
              console.clear();
          }
      } else {
          console.clear();
          console.log("...");
          console.log("Produto não Encontrado!!");
      }
    } 
  };

module.exports = { listarUser, cadUser, atualizarUser, listarUserPorId, excluirUser };