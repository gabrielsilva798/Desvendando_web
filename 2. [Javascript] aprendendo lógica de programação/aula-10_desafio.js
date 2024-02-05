const CONSUMO_AUTOMOVEL = 12; //costande ficam em caixa alta igual o JAVA. 

function gastoCombustive(tempoGasto, velocidadeMedia) {
    const gastoPorHora = velocidadeMedia / CONSUMO_AUTOMOVEL;
    const consumoTotal = gastoPorHora * tempoGasto;

    return consumoTotal.toFixed(3);
}
console.log("litros necessária para realizar a viagem: ");
console.log(gastoCombustive(10, 85));
console.log(gastoCombustive(2, 92));
console.log(gastoCombustive(22, 67));