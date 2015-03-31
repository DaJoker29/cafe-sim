var cafe = (function ( game ) {

    game.week = {};
    var current = 1;
    var element = document.querySelector('#week');

    game.week.increment = function() {
        current++;
    };

    game.week.get = function() {
        return current;
    };

    game.week.show = function() {
        element.textContent = current;
    };

    return game;
} ( cafe || {}));