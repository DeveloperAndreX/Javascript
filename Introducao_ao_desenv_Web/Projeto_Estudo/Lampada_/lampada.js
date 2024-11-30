// iniciando o Javascript:
// fazendo funcionar os botões chamado as variaveis de turnOn e turnOFf

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

// criaremos uma função pra verificar se a lampada esta quebrada ou não:
function isLampBroken(){
    /* Nota: indexof e um metodo que procura uma string dentro string, faz uma varedura procurando
     outro trecho de string */
    return lamp.src.indexOf('quebrada') > -1 // quando ele acha traz um numero maior que -1

}

// criando a function lampOn:

function lampOn(){
// fazer a troca da imagem da lampada:

if(!isLampBroken ()) {
    lamp.src = './img/ligada.jpeg';
    }
}
function lampOff(){
    if (!isLampBroken ()) {
    lamp.src = './img/deslig.jpeg';
    }
}
function lampBroken(){
    lamp.src = './img/quebrada.jpeg';
}
// adicionando um evento ao botão turnOn
turnOn.addEventListener('click', lampOn );
turnOff.addEventListener('click',lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
