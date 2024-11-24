// Para pegarmos os itens pelo ID usamos o getElementByid() correto.

/*  console.log(
    document.getElementByid("p1").innerHTML 
    );

    console.log(
    document.getElementByid("p1").innerHTML = "Alterar texto agora";
    );



*/

/*

// podemos armazenar tudo em variaveis, e utilizar da mesma maneira:
var paragrafo = document.getElementById("p1");
paragrafo.innerHTML = "Novo conteudo";
// posso alterar os estilos de nossos elementos, atraves do objeto style:
paragrafo.style.color = "red";
paragrafo.style.backgroundColor = "green";
paragrafo.style.height = "400px";
// Alem do estilo podemos alterar os atributos:

*/
// Alterando a source e o alt e o width (largura);
var imagem = document.getElementById("imagem");
imagem.src = "html.jpg";
imagem.alt = "teste de Imagem";
imagem.width = "30";

