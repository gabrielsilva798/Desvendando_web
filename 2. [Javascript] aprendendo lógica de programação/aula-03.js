const idade = 8;
const nome = "João";
let podeEntrar = false;


//              || = OR           && = AND          igual ao java
if (idade >= 18 || nome === "João") {
    podeEntrar = true;
    console.log("ENTROU !!")
} else {
    console.log("NÃO ENTRA !!")
}

console.log("Usuário pode entrar: ", podeEntrar)

// === compara os dados e tbm o tipo
/* == compara os dados mesmo sendo de tipos diferentes.
    2 == "2" true
*/