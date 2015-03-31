var cafe = (function ( game ) {

    game.net = {};
    var current = 0;
    var element = document.querySelector('#net');

    game.net.change = function( amount ) {
        current = amount; 
    };

    game.net.show = function() {
        element.textContent = format(current);
    };

    return game;
} ( cafe || {}));