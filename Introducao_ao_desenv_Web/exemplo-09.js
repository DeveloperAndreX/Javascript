// Exemplo sobre o getAttribute, setAttribute, RemoveAttribute();
// Vamos escutar um evento com AddEventListernet();
/** Preciso passar 02 parametros, 1° Click, 2° uma function, quando clicarmos no "btn-set iremos atribuir um
 * atributo a esse <h1></h1>
*/
document.getElementById("btn-set").addEventListener("click",function(){

    /* passamos o ID do titulo, o 1° parametro que vamos passar e qual atributo vamos atribuir: 
    Uma classe e o valor da classe ("class", "red"), no meu caso vermelho*/
    document.getElementById("title").setAttribute("class","red");

});

document.getElementById("btn-remove").addEventListener("click",function(){

// agora seto qual atributo ele vai remover, que e o vermelho do class
document.getElementById("title").removeAttribute("class");

})

/* ultimo elemento e o get, para sabermos o valor do nosso atributo: quando eu clicar em get
 ele pega o valor e joga dentro do paragrafo que esta com o ID class*/
document.getElementById("btn-get").addEventListener("click",function(){
// A ideia aqui e criar uma variavel:
var value = document.getElementById("title").getAttribute("class"); // O valor vai ser atribuido a value

// Para jogarmos esse conteudo dentro do paragrafo, cujo o id e "class":
document.getElementById("class").innerHTML = value;

})
