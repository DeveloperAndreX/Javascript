/* Javascript do Index.html projeto IMC - Learning Javascript Mini Projects: 
vamos pegar os Ids dos campos que vou interagir;
o ponto serve para acessarmos uma propriedade dele
nome.value = "preenchendo o nome";
altura.value = 10;
peso.value = "1.57";
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
        
        


        nome.style.background = 'green';
        nome.style.fontFamily = 'vardana';
        nome.style.font = 10;
        nome.focus();
        return false;
        //////////////////////////////
        peso.style.background = 'green';
        peso.style.fontFamily = 'vardana';
        peso.style.font = 10;
        peso.focus();
        return false;
        /////////////////////////////
        altura.style.background = 'green';
        altura.style.fontFamily = 'vardana';
        altura.style.font = 10;
        altura.focus();
        return false;
                       
                  
    }else{
        /** textContent pega o conteudo dentro da DIV */
        resultado.textContent = 'Preencha todos os campos';
        nome.style.background = 'red';
        nome.style.fontFamily = 'vardana';
        nome.style.font = 12;
        nome.focus();

     

        
       

    }


}

