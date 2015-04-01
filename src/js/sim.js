var cafe = (function ( game ) {
    game.refresh = function() {
        for (var value in game) {
            if( game.hasOwnProperty(value) && game[value].show) {
                game[value].show();
            }
        }
    };

    game.listen = function() {
        for (var option in game) {
            if (game.hasOwnProperty(option) && game[option].listen) {
                game[option].listen();
            }
        }
    };

    game.unlisten = function() {
        for (var option in game) {
            if (game.hasOwnProperty(option) && game[option].unlisten) {
                game[option].unlisten();
            }
        }
    };

    game.start = function() {
        game.listen();
        game.refresh();
    };

    game.end = function() {
        console.log('Game over');
        game.unlisten();
    };

    game.next = function() {
        if( game.week.get() <= 51 ) {
            game.calculate();
            game.refresh(); 
        } else {
            game.end();
        }
    };

    return game;
}( cafe || {}));