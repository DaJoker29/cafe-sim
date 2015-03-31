var cafe = (function ( game ) {

    game.customers = {};
    var current = 0;
    var element = document.querySelector('#customers');

    game.customers.change = function( amount ) {
        current += amount;
    };

    game.customers.get = function() {
        return current;
    };

    game.customers.show = function() {
        element.textContent = current;
    };

    return game;
} ( cafe || {}));