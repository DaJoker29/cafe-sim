var cafe = (function ( game ) {

    var options = ['well below', 'below', 'at', 'above', 'well above'];
    var element = document.querySelector('#price');

    var callback = function ( event ) {
        game.price.set(event.target.value);
        event.stopPropagation();
    };

    game.price = {};

    game.price.set = function ( string ) {
        if(options.indexOf(string) >= 0) {
            localStorage.price = string;

            if(element.value !== string) {
                element.value = string;
            }
        }

    };

    game.price.get = function() {
        return localStorage.price;
    };

    game.price.listen = function () {
        element.addEventListener('change', callback);
    };
    
    return game;
} ( cafe || {}));