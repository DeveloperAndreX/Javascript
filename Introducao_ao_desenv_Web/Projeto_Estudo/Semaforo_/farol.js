// codigo javascript para o Semaforo funcionar;

const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
console.log(alert ("teste de Javascript!"));

// criando uma arrow function da função trafficLight:
// arrow function se declara assim () => {}
/* eu vou receber um evento do addEventListener,
então e importante verificar o que eu estou recebendo ! 
Desta forma ele traz o id do target no evento, note que o botão traz a cor do ID.
*/

const trafficLight = (event) => {
    console.log( event.target.id );
    
}

// Vamos criar um objeto literal chamado TurnOn para armazenar as funções:
const turnOn = {
    'red': () => img.src = "vermelho",
    'yellow': () => img.src = "amarelo",
    'green': () => img.src = "verde"
};

buttons.addEventListener('click', trafficLight);
