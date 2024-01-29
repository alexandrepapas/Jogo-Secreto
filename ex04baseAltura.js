
// codigo pra le dimensao de um retangulo 

let base= parseFloat(prompt("Digite o valor da base "));
let altura= parseFloat(prompt("dIGITE O VALOR DA ALTURA "));

function dimensaoRetangulo(base, altura){
   
    return base* altura;
}

let resultado = dimensaoRetangulo(base,altura);

console.log("A dimensão do retângulo é: " + resultado);

