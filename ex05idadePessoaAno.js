function idadeEmDias(anos, meses, dias) {
    // Convertendo a idade para dias considerando um ano com 365 dias e um mês com 30 dias
    let idadeEmDias = (anos * 365) + (meses * 30) + dias;
    return idadeEmDias;
}

// Lendo a idade da pessoa em anos, meses e dias
let anos = parseInt(prompt("Digite a quantidade de anos: "));
let meses = parseInt(prompt("Digite a quantidade de meses: "));
let dias = parseInt(prompt("Digite a quantidade de dias: "));

// Calculando a idade em dias
let idadeEmDiasResultado = idadeEmDias(anos, meses, dias);

// Exibindo o resultado
console.log("A idade da pessoa em dias é aproximadamente " + idadeEmDiasResultado + " dias.");
