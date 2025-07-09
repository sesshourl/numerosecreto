let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);
console.log(listaDeNumerosSorteados);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.3, pitch: 1});
}

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()


function verificarChute() {
        let chute = document.querySelector('input').value;
        console.log(chute == numeroSecreto);
        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Parabéns, você acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');

        } else {
            if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor!');
            } else {
            exibirTextoNaTela('p', 'O numero secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosSorteados >= 10) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(NumeroEscolhido);
        return NumeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
}




