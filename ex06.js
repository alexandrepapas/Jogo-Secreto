// Leitura dos dados
let totalEleitores = parseInt(prompt("Digite o número total de eleitores: "));
let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));


function calcularPercentual(votos, totalEleitores) {
    return (votos / totalEleitores) * 100;
}

function exibirPercentuais(totalEleitores, votosBrancos, votosNulos, votosValidos) {
    let porcentagemBrancos = calcularPercentual(votosBrancos, totalEleitores);
    let porcentagemNulos = calcularPercentual(votosNulos, totalEleitores);
    let porcentagemValidos = calcularPercentual(votosValidos, totalEleitores);

    console.log("Percentual de votos brancos: " + porcentagemBrancos.toFixed(2) + "%");
    console.log("Percentual de votos nulos: " + porcentagemNulos.toFixed(2) + "%");
    console.log("Percentual de votos válidos: " + porcentagemValidos.toFixed(2) + "%");
}

// Chamada da função para calcular e exibir os percentuais
exibirPercentuais(totalEleitores, votosBrancos, votosNulos, votosValidos);

