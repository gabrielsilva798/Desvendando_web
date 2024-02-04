// não é o ideal, mas ele aceita diferentes tipos de variáveis em  só array, diferente do JAVA
const idades = [18, 14, 53, 88,66 , 41];

//mostra um valor do array
console.log(idades[0]); //começa do 0, igual PYTHON e JAVA.

// .LENGTH começa a conta do 1, como o JAVA, logo vai dar 6.
console.log(idades.length) //comando igual o do JAVA para ver a quantidade de itens no ARRAY.

//para imprimir todo o array é bem básico, igual no PYTHON
console.log(idades)

for (let i = 0; i < idades.length; i++) {
    console.log("idades", idades[i]);
}