function conversao(velocidadeKmh) {
    // 1 km/h = 0.277778 m/s
    const fatorConversao = 0.277778;
    return velocidadeKmh * fatorConversao;
}

// Exemplo de uso da função:
const velocidadeKmh = 60; // velocidade de 60 km/h
const velocidadeMs = conversao(velocidadeKmh);
console.log(`${velocidadeKmh} km/h equivale a ${velocidadeMs.toFixed(2)} m/s`);
