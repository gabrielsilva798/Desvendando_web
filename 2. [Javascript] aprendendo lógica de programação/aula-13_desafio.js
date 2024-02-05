function somaNumeros(valorInicial, valorFinal) {
    let resultado = 0;

    for (i = valorInicial; i <= valorFinal; i++) {
        if ( i % 13 !== 0) {
            resultado += i;
        }
    }

    console.log(resultado);
}

somaNumeros(100, 200);