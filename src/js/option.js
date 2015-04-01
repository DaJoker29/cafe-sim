function Option ( name, options ) {
    var context = this;

    this.options = options;
    this.element = document.querySelector('#' + name);

    this.set = function ( string ) {
        if(this.options.indexOf( string ) >= 0 && this.element.value !== string) {
            this.element.value = string;
        }
    };
    this.get = function () {
        return this.element.value;
    };
    this.callback = function ( event ) {
        context.set(event.target.value);
        event.stopPropagation();
    };
    this.listen = function() {
        context.element.addEventListener('change', this.callback);
    };
    this.unlisten = function() {
        context.element.removeEventListener('change', this.callback);
    };
}

var cafe = (function ( game ) {

    game.bean = new Option ( 'bean', ['gourmet', 'hipster', 'good', 'cheap', 'actual']);
    game.price = new Option ('price', ['well below', 'below', 'at', 'above', 'well above']);

    return game;
} ( cafe || {}));