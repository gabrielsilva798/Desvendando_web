const teste = 'I Love You';

function contarLestras(texto) {
    let textoQuantidadesLetras = "";
    textoSplit = texto.split(' ');
    arrayQuantidadeLetras = textoSplit;

    for (let i = 0; i < textoSplit.length; i++) {
        textoSplit[i] = textoSplit[i].length
    }
    
    for (let i = 0; i < textoSplit.length; i++) {
        textoQuantidadesLetras.concat("-");
        textoQuantidadesLetras.concat(textoSplit[i]);
    }

    console.log(textoQuantidadesLetras)
    console.log('The Biggest Word: ', maiorPalavra(texto))
}




contarLestras(teste);





function maiorPalavra(texto) {
    textoSplit = texto.split(' ');
    textoSplitParaFor = textoSplit;
    let maiorPalavra = "";

    for (let i = 0; i < textoSplit.length; i++) {
        const valorAnterior = i-1;
        if (i > 0 && textoSplitParaFor[i].length > textoSplit[i-1].length) {
            maiorPalavra = textoSplit[i];
        } else if (i === 0 && textoSplitParaFor[i].length > textoSplit[i].length) {
            maiorPalavra = textoSplit[i];
        }
    }

    return maiorPalavra;
}


