var cafe = (function ( game ) {

    game.tips = {};
    var current = 0;
    var element = document.querySelector('#tips');

    game.tips.change = function( amount ) {
        current = amount;
    };

    game.tips.reset = function () {
        current = 0;
    };

    game.tips.get = function() {
        return current;
    };

    game.tips.show = function() {
        element.textContent = format(current);
    };

    return game;
} ( cafe || {}));