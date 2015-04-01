var cafe = (function ( game ) {
    var COSTS = {
        'gourmet': 2.55,
        'hipster': 2.25,
        'good': 2.00,
        'cheap': 1.40,
        'actual': 0.90
    };
    var PRICE_MODEL = {
        'well above': 2.3,
        'above': 1.8,
        'at': 1.05,
        'below': 1,
        'well below': 0.8
    };

    var DELTAS = {
        'gourmet': 9,
        'hipster': 7,
        'good': 5,
        'cheap': 3,
        'actual': 1
    };

    var MULTIPLIERS = {
        'well above': -0.1,
        'above': -0.02,
        'at': -0.005,
        'below': 0.05,
        'well below': 0.012
    };

    var calcWeek = function() {
        game.week.set( game.week.get() + 1);
    };

    var calcCustomers = function() {
        var customers = game.customers.get();
        var delta = DELTAS[game.bean.get()]; // Change in customers
        var multiplier = MULTIPLIERS[game.price.get()]; // Returning customers
        
        customers = Math.floor(customers * multiplier) + delta ;
        game.customers.set( game.customers.get() + customers);
    };

    var calcRevenue = function () {
        revenue = game.customers.get() * (COSTS[game.bean.get()] * PRICE_MODEL[game.price.get()]);
        game.revenue.set(revenue);
    };

    var calcExpenses = function() {
        var OVERHEAD = 1; // Flat overhead expense
        var EPC = 0.3; // Expenses per customer
        var weeklyCost = game.customers.get() * COSTS[game.bean.get()];
        var totalExpenses = OVERHEAD + (EPC * game.customers.get()) + weeklyCost;
        game.expenses.set(totalExpenses);
    };

    var calcTips = function() {
        var tips = 0;
        for( var i = 0; i < game.customers.get(); i++) {
            var percent = Math.random() * 0.3;
            var ppc = COSTS[game.bean.get()] * PRICE_MODEL[game.price.get()];
            var tip = percent * ppc;
            tips += parseFloat(tip);
        }

        game.tips.set(tips);
    };

    var calcNet = function() {
        var net = game.revenue.get() + game.tips.get() - game.expenses.get();
        game.net.set(net);        
    };

    var calcBank = function() {
        game.bank.set( game.bank.get() + game.net.get() );
    };

    game.calculate = function () {
        //////////////////////
        // Run Calculations //
        //////////////////////
        calcWeek();
        calcCustomers();
        calcRevenue();
        calcExpenses();
        calcTips();
        calcNet();
        calcBank();
    };

    return game;
} ( cafe || {}));