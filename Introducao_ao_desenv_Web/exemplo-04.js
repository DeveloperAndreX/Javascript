/** Create Element aprendendo a utilização */
// podemos criar tags e outras imagens dentro do createElement, ele cria elementos para nós;
var imagem = document.createElement("img")
imagem.src = "";
imagem.alt = "";

var paragrafo = document.createElement("p");
paragrafo.innerHTML = "'Ola Pessoal, tudo bem!";


console.log(
    imagem, paragrafo
)