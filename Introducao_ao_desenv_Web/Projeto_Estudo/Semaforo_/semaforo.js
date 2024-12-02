// codigo javascript para o Semaforo funcionar;
const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
console.log(alert ("teste de Javascript!"));



// criando uma arrow function da função trafficLight:
// arrow function se declara assim () => {}
/* eu vou receber um evento do addEventListener,
então e importante verificar o que eu estou recebendo ! */

const trafficLight = ( event) => {
    console.log( event );
    
}
buttons.addEventListener('click', trafficLight);

