var cafe = (function ( game ) {

    var defaults = {
        'bean': 'cheap',
        'price': 'below'
    };

    game.start = function() {
        game.bean.set(defaults.bean);
        game.bean.listen();
        game.price.set(defaults.price);
        game.price.listen();
        game.week.show();
        game.customers.show();
        game.revenue.show();
        game.expenses.show();
        game.tips.show();
        game.net.show();
        game.bank.show();
    };

    game.end = function() {
        console.log('Game over');
    };

    game.next = function() {
        if( game.week.get() <= 51 ) {
            game.calculate();
            game.week.show();
            game.customers.show();
            game.revenue.show();
            game.expenses.show();
            game.tips.show();
            game.net.show();
            game.bank.show();  
        } else {
            game.end();
        }
    };

    return game;
}( cafe || {}));