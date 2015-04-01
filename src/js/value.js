function Value ( name, initial ) {
    
    this.element = document.querySelector('#' + name);
    this.current = initial || 0;

    this.set = function ( number ) {
        this.current = number;
    };

    this.get = function() {
        return this.current;
    };

    this.show = function() {
        this.element.textContent = format(this.current);
    };
}

var cafe = (function ( game ) {

    game.revenue = new Value ('revenue');
    game.bank = new Value ('bank');
    game.week = new Value ('week', 1);
    game.customers = new Value ('customers');
    game.expenses = new Value ('expenses');
    game.net = new Value('net');
    game.tips = new Value('tips');

    game.week.show = function() {
        this.element.textContent = this.current;
    };

    game.customers.show = function() {
        this.element.textContent = this.current;
    };

    return game;
} ( cafe || {}));