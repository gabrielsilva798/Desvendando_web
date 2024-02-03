const quantidade = 10;
let soma = 1;

//1: variável, o I           2: a validação para ocorrer o FOR      3: o que vai acontecer
for(let i=0; i < quantidade; i++) {
    console.log(i)
    soma += i;
}

console.log("ACABOU.", soma)