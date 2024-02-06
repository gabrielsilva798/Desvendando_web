//                 FUNÇÕES DA STRING

//  .LENGTH
const numCaractere = '.LENGTH calcular number of caracteres.'; //igual no JAVA
console.log(numCaractere.length)



// CONCAT
// MAIS LENTO QUE O +, é uma diferença não tão importante, mas prefira o ULTIMO
const mensagem1 = 'valor a concatenar.'
console.log(mensagem1.concat(numCaractere)) // O PRIMEIRO VALOR VEM PRIMEIRO.
console.log(mensagem1 + numCaractere) // com +
console.log(`mensagem: ${mensagem1}`) //igual o FSTRING, mas com CRASE inves de VÍRGULA.


// SUBSTRING
// começa a conta do ZERO.--POSSO INVERTE A ORDEM QUE FUNCIONA (END, START)
const mensagem2 = "gabriel silva"
console.log(mensagem2.substring(8,13)) //start, end(opcional)


// SPLIT
// cria uma ARRAY da STRING, o separador vai dizer onde separar os elementos do ARRAY.
const mensagem3 = 'GABRIEL SILVA'; 
console.log(mensagem3.split('L')) // SPLIT feito por um L. --ELE REMOVER A LETRA DEPOIS
console.log(mensagem3.split('')) //sem argumentos, cada caractere virá um itém do ARRAY.


//toUpperCase()
const mensagem4 = "Gabriel Silva"
console.log(mensagem4.toUpperCase()) //deixa tudo em MAIÚSCULO

//toUpperCase()
const mensagem5 = "Gabriel Silva"
console.log(mensagem5.toLowerCase()) //deixa tudo em MINÚSCULO

// REPLACE
// 1º ARGUEMENTO: valor a ser substituído      2º ARGUMENTO: novo valor.
const mensagem6 = "Gabriel Silva"
console.log(mensagem6.replace('Silva','Santos'))