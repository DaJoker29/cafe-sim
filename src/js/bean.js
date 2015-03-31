var cafe = (function ( game ) {

    var options = ['gourmet', 'hipster', 'good', 'cheap', 'actual'];
    var element = document.querySelector('#bean');

    var callback = function ( event ) {
        game.bean.set(event.target.value);
        event.stopPropagation();
    };

    game.bean = {};

    game.bean.set = function ( string ) {
        if(options.indexOf(string) >= 0) {
            localStorage.bean = string;

            if(element.value !== string) {
                element.value = string;
            }
        }

    };

    game.bean.get = function() {
        return localStorage.bean;
    };

    game.bean.listen = function () {
        element.addEventListener('change', callback);
    };
    

    return game;
} ( cafe || {}));