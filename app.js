
let listaDeNumerosSorteados = []
let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length 
let numeroLimite = 10
numeroSecreto = gerarNumero()

function textoNaTela( tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate:1.2})
}

let tentativas = 1
function exibirMensagemInicial()
{
    textoNaTela('h1','Jogo do número secreto');
    textoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial()

function verificarChute(){
    
    let chute = document.querySelector('input').value 
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!` 

    if (chute == numeroSecreto){
        textoNaTela ('h1', 'Acertou!')
        textoNaTela ('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        if (chute > numeroSecreto){ textoNaTela ('p', 'O número secreto é menor')}
        else {textoNaTela('p', 'O número secreto é maior')}
} tentativas++
limparCampo()
}
function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}
function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}
function reiniciarJogo(){
    tentativas = 1
    numeroSecreto = gerarNumero()
    limparCampo()
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}