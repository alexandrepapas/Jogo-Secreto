// escrever um algortimo para ler um valor ( do teclado ) e escreva na tela seu antecessor 


function exibirAntecessor() {
    // Leitura do valor do teclado
    let valorDigitado = prompt("Digite um número: ");

    // Convertendo o valor para um número
    let valor = parseFloat(valorDigitado);

    // Verificando se a conversão foi bem-sucedida
    if (!isNaN(valor)) {
        // Calculando o antecessor
        let antecessor = valor - 1;

        // Exibindo na tela
        console.log("O antecessor de " + valor + " é: " + antecessor);
    } else {
        // Exibindo mensagem de erro se o valor não for um número válido
        console.log("Por favor, digite um número válido.");
    }
}

// Chamando a função para execução
exibirAntecessor();




