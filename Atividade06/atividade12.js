const atividadesAmbi = {
    transporte: [
        { descricao: "Moto", carbono: 10 },
        { descricao: "Carreta", carbono: 5 }
    ],
    residencia: [
        { descricao: "Fogo", carbono: 15 },
        { descricao: "Água", carbono: 8 }
    ]
};


    let impactoTotal = 0;

    for (const categoria in atividadesAmbi) {
        for (const atividade of atividadesAmbi[categoria]) {
            impactoTotal += atividade.carbono;
        }
    }

    console.log(`Impacto total: ${impactoTotal} carbono.`);

