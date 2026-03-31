let tentativas = 1;
let maximoTentativas = 5;
let numeroMaximo = 10;
let numerosChutados = [];
document.getElementById('btnChutar').removeAttribute('disabled');

function gerarNumeroSecreto(){
    return parseInt((Math.random() * numeroMaximo) + 1);
}

let numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto);

function exibirTextoDeBaixo(id, texto){
    let mensagem = document.getElementById(id);
    mensagem.innerHTML = texto;
}

function exibirTextoDeCima(id, texto){
    let mensagemDeCima = document.getElementById(id);
    mensagemDeCima.innerHTML = texto;
}
let mensagemInicial = exibirTextoDeCima('textoCima', `Escolha um número entre 1 e ${numeroMaximo}.`);

function limparCampo(){
    document.getElementById('inputNumero'). value = '';
}

function botoesFim(){
    document.getElementById('btnChutar').setAttribute('disabled', true);
    document.getElementById('btnReiniciar').removeAttribute('disabled');
}

function botoesInicio(){
    document.getElementById('btnReiniciar').setAttribute('disabled', true);
    document.getElementById('btnChutar').removeAttribute('disabled');
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    exibirTextoDeCima('textoCima', `Escolha um número entre 1 e ${numeroMaximo}`);
    exibirTextoDeBaixo('mensagem', '');
    limparCampo();
    tentativas = 1;
    botoesInicio();
    numerosChutados = [];
}

function limiteTentativas(){
    if (tentativas > maximoTentativas){
        exibirTextoDeCima('textoCima', `Você atingiu o limite de tentativas.<br>O número secreto era ${numeroSecreto}.`);
        exibirTextoDeBaixo('mensagem', "Tente novamente em 'Reiniciar'.");
        botoesFim();
    }
}

function verificarValor(numerosChutados, chute, numeroSecreto){
        numerosChutados.push(chute);
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        if (chute == numeroSecreto){
            botoesFim();
            exibirTextoDeCima('textoCima', `Parabéns, você adivinhou o número secreto em ${tentativas} ${palavraTentativa}!<br>Os números chutados foram: ${numerosChutados}.`);
            exibirTextoDeBaixo('mensagem', 'Aperte "Reiniciar" para jogar novamente.');
        }
        else{
            tentativas++;
            limparCampo();
            if(chute > numeroSecreto){
                exibirTextoDeBaixo('mensagem', `Você errou! O número secreto é menor que ${b}`);
            }
            else{
               exibirTextoDeBaixo('mensagem', `Você errou! O número secreto é maior que ${b}`);
            }
        }
}

function verificarChute(){
    let chute = parseInt(document.getElementById('inputNumero').value);
    if (chute <1 || chute > numeroMaximo || isNaN(chute)){
        exibirTextoDeBaixo('mensagem', 'Valor inválido.');
        limparCampo();
    }
    else if(numerosChutados.includes(chute)){
        exibirTextoDeBaixo('mensagem', 'Você já informou esse valor anteriormente.');
        limparCampo();
    }
    else{
        verificarValor(numerosChutados, chute, numeroSecreto);
    }
    limiteTentativas();
}