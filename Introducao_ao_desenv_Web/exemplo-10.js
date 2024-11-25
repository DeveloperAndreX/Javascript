/**Aprendendo sobre children e insertBefore: */
// recuperando as listas;

var lista = document.getElementsByTagName("ol");
//var itens = document.getElementsByTagName("li");
//A variavel itens vai receber os elementos filhos desta Lista usando:
var itens = lista.children;

// vamos criar um novo itens que queremos inserir na lista:

var novoItem = document.createElement("li");
novoItem.textContent = "suco de laranja";

//Para trabalhar com InsertBefore, selecionamos o elemento PAI:
// Passamos 02 parametros no InsertBefore("O novo item, e o novo item que vai entrar antes na lista");

lista.insertBefore(novoItem, itens[0]); // vai inserir o suco de laranja antes do cafe;
lista.insertBefore(novoItem, itens[2]);

console.log(lista);
// vamos especificar o indice da lista que queremos:
