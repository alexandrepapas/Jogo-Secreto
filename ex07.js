function calcularNovoSalario() {
    // Leitura do salário mensal atual e do percentual de reajuste
    let salarioAtual = parseFloat(prompt("Digite o salário mensal atual: "));
    let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste: "));

    // Verifica se as entradas são números válidos
    if (isNaN(salarioAtual) || isNaN(percentualReajuste)) {
        console.log("Por favor, insira valores numéricos válidos.");
    } else {
        // Cálculo do novo salário
        let novoSalario = salarioAtual * (1 + percentualReajuste / 100);

        // Exibição do resultado
        console.log("O novo salário é: " + novoSalario.toFixed(2));
    }
}

// Chamada da função para realizar o cálculo
calcularNovoSalario();
