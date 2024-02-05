const QUANTIDADE = 6;

//                                    MINHA FORMA
function valoresImpares(valor) {
    for (let i = 0; i < QUANTIDADE ; i++) {
        if (valor % 2 == 0) {
            valor++;
            if(valor % 2 != 0)
            console.log(valor);
        } else {
            console.log(valor += 2);
        }
    }
}

valoresImpares(9);

//                                FORMA FEITA NA AULA
// ELE COLOCA A ENTRADA E MAI 5, A QUESTÃO PEDE 6 NUMEROS IMPARES SEGUIDOS

function numerosImpares(valor) {
    let contar = 0;
    let novoValor = valor;

    while (contar < QUANTIDADE) {
        if (novoValor % 2 !== 0) {
            console.log(novoValor)
            contar++;
        }

        novoValor++;
    }
}

numerosImpares(9);



/*Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.

Exemplo de EntradaExemplo de Saída

entrada: 8



saída:

9
11
13
15
17
19 */
