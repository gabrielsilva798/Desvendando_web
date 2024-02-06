function somaNumeros(valor1, valor2) {
    let valorInicial = 0;
    let valorFinal = 0;
    let resultado = 0;

    if(valor1 <= valor2) {
        valorInicial = valor1;
        valorFinal = valor2;
    } else {
        valorInicial = valor2;
        valorFinal = valor1;
    }

    for (i = valorInicial; i <= valorFinal; i++) {
        if ( i % 13 !== 0) {
            resultado += i;
        }
    }

    console.log(resultado);
}

somaNumeros(200, 100);

//                                      FIZ USANDO O WHILE TAMBÉM
function somaNumerosWhile(valor1, valor2) {
    let valorInicial = 0;
    let valorFinal = 0;

    if(valor1 <= valor2) {
        valorInicial = valor1;
        valorFinal = valor2;
    } else {
        valorInicial = valor2;
        valorFinal = valor1;
    }

    let resultado = 0;
    let i = valorInicial;

    while (i <= valorFinal) {
        if ( i % 13 !== 0) {
            resultado += i;
        }
        i++;
    }

    console.log(resultado);
}

//somaNumerosWhile(200, 100);