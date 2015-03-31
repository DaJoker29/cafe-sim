var cafe = (function ( game ) {

    game.expenses = {};
    var current = 0;
    var element = document.querySelector('#expenses');

    game.expenses.change = function( amount ) {
        var overhead = 0.6 * game.customers.get();
        current = amount + overhead;
    };

    game.expenses.reset = function () {
        current = 0;
    };

    game.expenses.get = function() {
        return current;
    };

    game.expenses.show = function() {
        element.textContent = format(current);
    };

    return game;
} ( cafe || {}));