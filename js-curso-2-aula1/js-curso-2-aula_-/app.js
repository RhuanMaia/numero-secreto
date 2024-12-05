let listaDeNumeros = [];
let numeroLimite = 777;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
};

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do Número secreto.');
    exibirTexto('p', 'Escolha um número entre 1 e 777');
}

exibirMensagemInicial()

exibirTexto('h1', 'Jogo do Número secreto.');
exibirTexto('p', 'Escolha um número entre 1 e 777');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTexto('h1', 'Jackpot!');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Você teve  sorte grande com apenas ${tentativas} ${palavraTentativa}`
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTexto('p', `O número secreto é menor que ${chute}`)
        } else {
            exibirTexto('p', `O número Secreto é maior que ${chute}`)};
        tentativas++;
        limparCampo();
    };s
};

function gerarNumero() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
   let quantidadeDeElementos = listaDeNumeros.length;

   if(quantidadeDeElementos == numeroLimite) {
    listaDeNumeros = [];
   };
   if(listaDeNumeros.includes(numeroEscolhido)) {
    return gerarNumero();
   } else {
    listaDeNumeros.push(numeroEscolhido);
    console.log(listaDeNumeros);
    return numeroEscolhido
   };
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};
function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
};

function reiniciarjogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}