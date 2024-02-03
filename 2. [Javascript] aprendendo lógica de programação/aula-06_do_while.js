let idade = 18;

//       IGUAL O WHILE, MAS MUDA A ORDEM
do {
    console.log("Idade antes do LOOP: ", idade) //começa no 0, termina no 17
    idade += 1;
    console.log("Idade depois do LOOP: ", idade) //começa no 1, termina no 18
} while (idade < 18);

/* DIFERENTE DO WHILE, ELE EXECULTA 1 VEZ CASO JÁ COMECE COMO FALSO, COMO AQUI QUE A IDADE JÁ 
ENTRA FORA DO REQUSITO DE SER MENOR DE 18, NO WHILE PADRÃO NÃO RODARIA E NÃO TERIA RETORNO */

//SE FOR PRECISO QUE PASSE PELO MENOS 1 VEZ, MESMO SENDO FALSO, USA-SE ELE