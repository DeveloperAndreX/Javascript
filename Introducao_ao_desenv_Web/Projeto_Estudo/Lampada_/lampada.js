// iniciando o Javascript:
// fazendo funcionar os botões chamado as variaveis de turnOn e turnOFf

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

// criando a function lampOn:

function lampOn(){
// fazer a troca da imagem da lampada:
    lamp.src = './img/ligada.jpeg';
}
function lampOff(){
    lamp.src = './img/deslig.jpeg';
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
