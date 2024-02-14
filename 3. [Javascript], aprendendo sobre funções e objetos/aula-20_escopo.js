const idade = 12;

const exibirIdade = () => {
    const idade = 23; //n pode ser acessada de fora, vc já sabe disso, mas...
    console.log(idade); //vai exibir 23, ele considera o que está no escopo dele
}

exibirIdade();
console.log(idade);