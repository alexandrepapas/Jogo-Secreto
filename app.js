/*let titulo= document.querySelector('h1')
titulo.innerHTML='Jogo do Numero Secreto ';
*/


/*let paragrafo= document.querySelector('p');
paragrafo.innerHTML= "Escolha um numero entre  1 a 10";
*/
let listaDeNumerosSorteados=[]
let numeroLimite= 10;
let numeroSecreto= gerNumeroAleatorio();
let tentativas=1

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
}


function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do numero Secreto ');
  exibirTextoNaTela('p', 'Escolha um numero entre 1 a 10');
}

exibirMensagemInicial();

function verificarChute(){
  let chute = document.querySelector('input').value;
  
  if(chute == numeroSecreto){
    exibirTextoNaTela('h1',' Acertou !!! ');
    let palavraTentativa=  tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativas= `voce acertou o numero secreto com  ${tentativas}  ${palavraTentativa} !`
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');

  }else{
    if(chute > numeroSecreto){
      exibirTextoNaTela('p',' O numero secreto é menor ');
    }else{
      exibirTextoNaTela('p', 'o numero secreto e maior ');
    }
    tentativas++;
    limparCampo();
  }
}

function limparCampo(){
  chute= document.querySelector('input');
  chute.value='';
}

function gerNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados=[];
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerNumeroAleatorio();
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }

}

function reiniciarJogo(){
  numeroSecreto= gerNumeroAleatorio;
  limparCampo();
  tentativas=1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disable', true);

}
