//                              existem 3 tipos de funções
// EM TODAS A ENTRADA NÃO É OBRIGATÓRIA.
/* mesmo que a função não receba argumento vc pode colocar que não irá dar erro, mas dar no
TypeScript.

 1º função - como sabemos mesmo essas funções são execultadas primeiro,mesmo com variáveis 
e etc. na frente, igual no java que uma função pode ir dentro da outro por isso*/
function calcular(valor) {
    console.log(valor *= 2);
}

calcular(2);

/* 2º função - podemos passar uma função para uma variável, ela vai ser chamada como se fosse
uma função, vc coloca os argumentos entre () */
const calcular2 = function(valor) {
    console.log(valor *= 2);
}

calcular2(4);

/* 3º FUNÇÃO - uma função de uma linha só, igual a de cima, muito usada, principalmente em 
orientação a obejto, JÁ que nesse caso é comun uma função ir dentro da outra*/
const calcular3 = (valor) => console.log( valor *= 2);

calcular3(8);


/* eu posso passar uma função como argumento
nesse caso a função interna TEM QUE RECEBER UM VALOR, a não ser que ela não precise de parâmetro */
const calcular4 = (funcao) => funcao(10);

calcular4(calcular);