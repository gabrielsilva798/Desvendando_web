const salario = 103;
const salario2 = '103.3456 ';

//        não existe limite em JS para casas decimais, ENTÃO SEMPRE QUE POSSÍVEL USE .TOFIXED()
// .TOFIXED(valor) defini quantas casas decimais eu vou mostrar
console.log('Salário: ', salario.toFixed(2));

// Number(string) converte uma STRING para número.
    //.TOFIXED() só funciona com NUMBER, por isso precisa converter
console.log('Salário2 convertido para número: ', Number(salario2).toFixed(1));


// String(valor) tranforma um NUMBER em STRING
console.log(String(salario))
