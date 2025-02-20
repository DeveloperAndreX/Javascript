// codigo javascript para o Semaforo funcionar;
let colorIndex = 0;
let intervalId = null;
const img = document.getElementById('img');
const buttons = document.getElementById('buttons');


// criando uma arrow function da função trafficLight:
// arrow function se declara assim () => {}
/* eu vou receber um evento do addEventListener,
então e importante verificar o que eu estou recebendo ! 
Desta forma ele traz o id do target no evento, note que o botão traz a cor do ID.
*/

const trafficLight = ( event ) => {
   //console.log( event.target.id );
   /* Como chamo um metodo de um objeto: */
   turnOn[event.target.id]();
   stopAutomatic();
}
/* posso utilizar o settimeout, me da um callback pra executar (ChangeColor(), de quanto em quanto tempo),
posso utilizar o setinterval (vou executar essa função changeColor,
 a cada 1000 segundos e executar ela) */
const nextIndex = () => {
/* Ele ira terque verificar se ele e 02 vamos fazer uma validação basica: */

// posso usar um ternario assim = color_index = color_index < 2 ? color_index++ ;0

    if (colorIndex < 2) {
        ++colorIndex
    }else{
        colorIndex = 0;
    }
}

const changecolor = () => {
    // o que ela vai fazer:
    const colors = ['red','yellow','green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
} 

// vamos criar uma função para o stopAutomatic para parar;
const stopAutomatic = () => {
    /*setInterval Ele retorna um ID, esse ID ele deve ser global, pois irá interagir com varias funções */
    clearInterval(intervalId);
    // ele vai parar o processo quando alguem clicar no botão;

}



// Vamos criar um objeto literal chamado TurnOn para armazenar as funções:
const turnOn = {
    'red':       () => img.src = './img/vermelho.png',
    'yellow':    () => img.src = './img/amarelo.png',
    'green':     () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changecolor(), 1000)
};
buttons.addEventListener('click',trafficLight);
