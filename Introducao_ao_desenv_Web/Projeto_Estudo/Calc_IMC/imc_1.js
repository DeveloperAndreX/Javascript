/* Javascript do Index.html projeto IMC - Learning Javascript Mini Projects: 
vamos pegar os Ids dos campos que vou interagir;
o ponto serve para acessarmos uma propriedade dele
nome.value = "preenchendo o nome";
altura.value = 10;
peso.value = "1.57";


const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(Sorry, we are out of ${expr}.);


*/

const resultado = document.getElementById("resultado");

calcular.addEventListener('click', buttons);
function buttons() {
    /** Movendo as minhas variaveis globais para  dentro da function buttons */
    const nome = document.getElementById("nome");
    const altura = document.getElementById("altura");
    const peso = document.getElementById("peso");
    const calcular = document.getElementById("calcular");

    if (nome.value !== '' && peso.value !== '' && altura.value !== '') {
        
        var calc = (peso.value / altura.value * 2);
        var valorIMC = (peso.value / calc).toFixed(2);
        resultado.textContent = valorIMC;
        
        let classificaçao = "";
       
        if(results < 18.5){
            classificaçao = "Abaixo do Peso";

        }else if(valorIMC < 25) {
            classificaçao = "Esta com o Peso Ideal. Parabens";

        }else if(valorIMC < 30){
            classificaçao = "E você esta levemente acima do peso";
        }else if(valorIMC < 35){
            classificaçao = "Você esta com Obsidade grau 1";
        }else if(valorIMC < 40){
            classificaçao = "Voce esta com Obsidade grau 2";
        }else{
            classificaçao = "Voce esta com Obsidade grau 3, com Obsidade Morbida";
        }

        resultado.textContent =  `${nome} seu IMC e: ${valorIMC} e você esta ${classificaçao}`;

        nome.style.background = 'green';
        nome.style.fontFamily = 'vardana';
        nome.style.font = 10;
        nome.focus();
      
        //////////////////////////////
        peso.style.background = 'green';
        peso.style.fontFamily = 'vardana';
        peso.style.font = 10;
        peso.focus();
      
        /////////////////////////////
        altura.style.background = 'green';
        altura.style.fontFamily = 'vardana';
        altura.style.font = 10;
        altura.focus();
                             
                  
    }else{
        /** textContent pega o conteudo dentro da DIV */
        resultado.textContent = 'Preencha todos os campos';
        resultado.style.fontFamily = 'sans-serif';

       

    }


}

