/** retornar um numero de nós de um objeto: */
console.log(
    document.body.childNodes
);
var lista = document.body.childNodes
alert(lista.length); // ele vai retornar o numero de Nós desse Node-List
alert(lista[5].innerHTML); //retorna o conteudo HTML;
alert(lista[5].nodeName); // NodeName que vai retornar o nome do Nó;
alert(lista[5].nodeType); // retorna o tipo que vai ser o numero 8;
alert(lista[5].nodeValue); // sempre vai retornar Nulo para Nós de elementos, pode retornar um valor de um atributo
alert(lista[5].childNodes[3].nodeValue) // retorna;
