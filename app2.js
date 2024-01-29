// funao que retorna ola mundo
function olaMundo(){
    return "ola mundo";
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
let nome= "Joao";
function ola(){
    console.log(` Ola ${nome}`);
}
ola();

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function calcularDobro(numero) {
    return numero * 2;
}

// Exemplo de uso:
let numero = 5;
let resultado = calcularDobro(numero);
console.log(resultado); // Imprime: 10


//Criar uma função que recebe três números como parâmetros e retorna a média deles
function mediaNumero(numero1, numero2, numero3){

    return (numero1+numero2+numero3)/3

}
let resultado1= mediaNumero(5,2,3)
console(resultado1);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function retornaMaior( numeroX, numeroY){
    
    if(numeroX>numeroY){
        return  numeroX     
    }else{
        return numeroY  
    }
}

let resultadoMaiorMenor=retornaMaior(5,6)
console.log(resultadoMaiorMenor);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

    function numeroMutiplicacao(numeroF ){
        return numeroF * numeroF; 
    }

    let resultadoMutipli= numeroMutiplicacao(5)
    console.log(resultadoMutipli);


    let senha= 123

    