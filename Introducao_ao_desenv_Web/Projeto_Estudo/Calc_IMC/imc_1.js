/* Javascript do Index.html projeto IMC - Learning Javascript Mini Projects: 
vamos pegar os Ids dos campos que vou interagir;
o ponto serve para acessarmos uma propriedade dele
nome.value = "preenchendo o nome";
altura.value = 10;
peso.value = "1.57";
*/

const resultado = document.getElementById("resultado");

calcular.addEventListener('click', buttons);
function buttons(){
/** Movendo as minhas variaveis globais para  dentro da function buttons */
const nome = document.getElementById("nome");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const calcular = document.getElementById("calcular");

if(nome !== ''){
    alert("este campo esta vazio");
    
}

}

