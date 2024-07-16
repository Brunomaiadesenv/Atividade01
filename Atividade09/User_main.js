const ler = require('readline-sync');
const { listarUser, cadUser, atualizarUser, listarUserPorId, excluirUser } = require('./User_system');
const usuarios = require('./User_bd');

// Função para realizar o login
function login() {
    const username = ler.question("Digite o seu login: ");
    const user = usuarios.find(u => u.nome.split(' ')[0] === username); // Verifica se o primeiro nome corresponde ao login

    if (user) {
        const cpfDigits = String(user.cpf).slice(0, 6); // Obtém os 6 primeiros dígitos do CPF
        const password = ler.question("Digite a sua senha (6 primeiros dígitos do CPF): ");

        if (password === cpfDigits) {
            console.log(`Bem-vindo, ${user.nome}!\n`);
            return true;
        } else {
            console.log("Senha incorreta. Tente novamente.\n");
            return false;
        }
    } else {
        console.log("Login incorreto. Tente novamente.\n");
        return false;
    }
}

// Loop principal
let check = true;

while (check) {
    console.log("--------------Sistema de Cadastro de Usuários --------------");
    console.log("----------------- Escolha as Opções Abaixo: -----------------");
    console.log("1. Adicionar Novo Usuário -----------------------------------");
    console.log("2. Atualizar Usuário ----------------------------------------");
    console.log("3. Listar Usuários ------------------------------------------");
    console.log("4. Listar Usuário por ID ------------------------------------");
    console.log("5. Excluir Usuário ------------------------------------------");
    console.log("6. Sair do Sistema ------------------------------------------");
    console.log("--------------------------------------------------------------");

    if (login()) {
        let opt = ler.questionInt("=> ");

        switch (opt) {
            case 1:
                console.clear();
                cadUser();
                break;
            case 2:
                console.clear();
                atualizarUser();
                break;
            case 3:
                console.clear();
                listarUser();
                break;
            case 4:
                console.clear();
                listarUserPorId();
                break;
            case 5:
                console.clear();
                excluirUser();
                break;
            case 6:
                check = false;
                break;
            default:
                console.log("Opção Inválida! Tente novamente!!");
                break;
        }
    }
}

console.log("Sistema Finalizado!");
