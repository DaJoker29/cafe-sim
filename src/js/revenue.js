var cafe = (function ( game ) {

    game.revenue = {};
    var current = 0;
    var element = document.querySelector('#revenue');

    game.revenue.change = function( amount ) {
        current = amount;
    };

    game.revenue.reset = function () {
        current = 0;
    };

    game.revenue.get = function() {
        return current;
    };

    game.revenue.show = function() {
        element.textContent = format(current);
    };

    return game;
} ( cafe || {}));