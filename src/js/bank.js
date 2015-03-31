var cafe = (function ( game ) {
    
    game.bank = {};
    var current = 0;
    var element = document.querySelector('#bank');

    game.bank.change = function ( amount ) {
        current += amount;
    };

    game.bank.get = function () {
        return current;
    };

    game.bank.show = function() {
        element.textContent = format(current);
    };

    return game;
} ( cafe || {}));