function calcularSalarioVendedor(numCarros, totalVendas, valorPorCarro, salarioFixo) {
    // Cálculo da comissão por carros vendidos
    let comissaoCarros = numCarros * valorPorCarro;

    // Cálculo da comissão sobre o total de vendas
    let comissaoTotal = 0.05 * totalVendas;

    // Cálculo do salário total
    let salarioTotal = salarioFixo + comissaoCarros + comissaoTotal;

    return salarioTotal;
}

// Leitura dos dados
let numCarros = parseInt(prompt("Digite o número de carros vendidos: "));
let totalVendas = parseFloat(prompt("Digite o valor total das vendas: "));
let valorPorCarro = parseFloat(prompt("Digite o valor recebido por cada carro vendido: "));
let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: "));

// Chamada da função para calcular o salário total
let resultado = calcularSalarioVendedor(numCarros, totalVendas, valorPorCarro, salarioFixo);

// Exibição do resultado
console.log("O salário total do vendedor é: " + resultado.toFixed(2));
