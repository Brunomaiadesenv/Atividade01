function calcularAnos(alturaJorge, alturaRoberto, taxaCrescimentoJorge, taxaCrescimentoRoberto) {
    let anos = 0;
    while (alturaRoberto <= alturaJorge) {
      alturaJorge += taxaCrescimentoJorge;
      alturaRoberto += taxaCrescimentoRoberto;
      anos++;
    }
    return anos;
  }
  
 
    const alturaInicialJorge = 1.72;
    const alturaInicialRoberto = 1.65;
    const taxaCrescimentoJorge = 0.03;
    const taxaCrescimentoRoberto = 0.04;
  
    const anos = calcularAnos(alturaInicialJorge, alturaInicialRoberto, taxaCrescimentoJorge, taxaCrescimentoRoberto);
  
    console.log(`Serao necessarios ${anos} anos para que Roberto seja maior que Jorge.`);

  