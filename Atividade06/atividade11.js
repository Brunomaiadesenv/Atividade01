const matrizLetras = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y']
];

const selecionarMensagemOculta = (linhasSelecionadas, colunasSelecionadas) => {
    let mensagem = "";

    for (let i = 0; i < linhasSelecionadas.length; i++) {
        const linha = linhasSelecionadas[i] - 1;
        const coluna = colunasSelecionadas[i] - 1;

        if (linha >= 0 && linha < matrizLetras.length && coluna >= 0 && coluna < matrizLetras[0].length) {
            mensagem += matrizLetras[linha][coluna];
        }
    }

    console.log("Mensagem oculta: ", mensagem);
};

selecionarMensagemOculta([1, 2, 3], [1, 2, 3]);
