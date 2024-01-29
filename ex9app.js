let n1=parseInt(prompt("Digite a primeira nota "))
let n2=parseInt(prompt("Digite a segunda nota "))
let n3=parseInt(prompt("Digite a terceira nota "))


function mediaFinal(n1, n2,n3){

    let mediaFinalAlunos= (n1*2) + (n2*3) + (n3*5)/10

    return mediaFinalAlunos;

}


let resultadoTotal = mediaFinal(n1,n2,n3);
 
console.log(resultadoTotal);


