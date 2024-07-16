let carrinhoDeCompras = {
    eletronicos: [
        { nome: 'Smartphone', preco: 1500, quantidade: 2 },
        { nome: 'Tablet', preco: 900, quantidade: 1 }
    ],
    vestuario: [
        { nome: 'Camiseta', preco: 30, quantidade: 3 },
        { nome: 'Calça Jeans', preco: 80, quantidade: 2 }
    ],
    alimentos: [
        { nome: 'Arroz', preco: 10, quantidade: 5 },
        { nome: 'Feijão', preco: 8, quantidade: 3 }
    ]
};


let calcularTotalCategoria = (categoria) => {
    let totalCategoria = 0;
    switch (categoria) {
        case 'eletronicos':
        case 'vestuario':
        case 'alimentos':
            for (let produto of carrinhoDeCompras[categoria]) {
                totalCategoria += produto.preco * produto.quantidade;
            }
            break;
        default:
            console.log(`Categoria inválida: ${categoria}`);
            break;
    }
    return totalCategoria;
};


let calcularTotalGeral = () => {
    let totalGeral = 0;
    for (let categoria in carrinhoDeCompras) {
        totalGeral += calcularTotalCategoria(categoria);
    }
    return totalGeral;
};


console.log("Total por Categoria:");
for (let categoria in carrinhoDeCompras) {
    let totalCategoria = calcularTotalCategoria(categoria);
    console.log(`${categoria}: R$ ${totalCategoria.toFixed(2)}`);
}

console.log("-------------------------");
let totalGeral = calcularTotalGeral();
console.log(`Total Geral: R$ ${totalGeral.toFixed(2)}`);