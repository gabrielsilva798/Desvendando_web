// é igual o if, se vc passa uma valor ele vai ver qual condição se adequar.
// caso o valor não esteja registrado entra o DEFAULT. 

function test(key) {
    switch (key) {
        case 'julio':      // eu posso passar vários casos para uma condição só 
        case 'brigadeiro': // tanto brigadeiro quanto júlio retornam "É O JÚLIO"
            console.log("é o julio")
            break;
        
        case 'dani':
            console.log("é a dani")
            break;

        case 'lorena': // não precisa do BREAK;   
            return console.log('é a lorena'); // NDA ACONTECE DEPOIS DE UM RETURN, IGUAL NO JAVA

        default:
            console.log('valor não encontrado')
            break;
    }
}

test('julio')