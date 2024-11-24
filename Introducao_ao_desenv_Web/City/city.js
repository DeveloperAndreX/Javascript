var City = function (title, id, className) {
    this.children = [];
    this.element = document.createElement("div");
    var h2 = document.createElement("h2");
    this.element.id = id;
    if (className) this.element.className = className;
    h2.textContent = title;
    this.element.appendChild(h2);
}

City.prototype = {
    add: function (child) {
        this.children.push(child);
        this.element.appendChild(child.getElement());
    },

    remove: function (child) {    
        for (var node, i = 0; node = this.getChild(i); i++) {
            if (node == child) {
                this.children.splice(i, 1);
                this.element.removeChild(child.getElement());
                return true;
            }
        }

        return false;
    },

    getChild: function (i) {
        return this.children[i];
    },

    getElement: function () {
        return this.element;
    }
}

// Instanciamos os objetos e montamos a estrutura:
var cities = newCity('', 'cities');
var saoPaulo = newCity('São Paulo', 'sao-paulo');
var rioDeJaneiro = newCity('Rio de Janeiro', 'rio-de-janeiro');
var ipiranga = newCity('ipiranga', 'ipiranga');
var lapa = newCity('Lapa', 'lapa');
var leblon = newCity('Leblon', 'leblon');
var casa1 = newCity('Casa1', 'casa-1', 'composite-house');
var casa2 = newCity('Casa2','casa-2','composite-house');
var casa3 = newCity('Casa3', 'casa-3', 'composite-house');
var casa4 = newCity('Casa4', 'casa-4', 'composite-house');
var casa5 = newCity('Casa5', 'casa-5', 'composite-house');
var casa6 = newCity('Casa6', 'casa-6', 'composite-house');
var casaRemove7 = newCity('casa Remover 7', 'casa-remover-7', 'composite-house');

liberdade.add(casa1);
ipiranga.add(casa3);
add(casaRemove7);
ipiranga.remove(casaRemover7); //Removido
lapa.add(casa4);
leblon.add(casa5);
leblon.add(casa6);

saoPaulo.add(liberdade);
saoPaulo.add(ipiranga);
rioDeJaneiro.add(lapa);
rioDeJaneiro.add(leblon);

cities.add(saoPaulo);
cities.add(rioDeJaneiro);

document.body.appendChild(cities.getElement());

