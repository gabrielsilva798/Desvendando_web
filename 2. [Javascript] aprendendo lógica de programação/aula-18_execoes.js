
function calcular(valor) {
    if (valor === 0 ) {
        throw new Error('Não pode ser 0') // ele dar o erro, mas quebra a aplicação
    }

    return valor/ 2;
}


// para corrigir a QUEBRA DE APLICAÇÃO é feita a seguinte estrutura.
try {
    console.log(calcular(0))
} catch (error) {
    console.log(error.message)
} finally { // FINALLY não é muito utilizado
    console.log("EXPLICAÇÃO TÃO LIXO QUANTO A CARA DELE")
}

// o JS retorna 0 em divisão por 0, mas era para retornar ERRO
console.log(calcular(0));