/**
 * como funciona o AppendChild e o removeChild
 */
var p = document.createElement("p");
p.innerHTML = "Ola Pessoal!";
var img = document.createElement("img");
img.src = ".HTML.jpeg";
img.width = 40


document.getElementById("conteudo").appendChild(p);
document.getElementById("conteudo").appendChild(img);

// document.getElementById("conteudo").removeChild(img);




