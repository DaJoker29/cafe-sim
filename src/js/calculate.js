var cafe = (function ( game ) {
    var calcWeek = function() {
        game.week.set( game.week.get() + 1);
    };

    var calcCustomers = function() {
        var customers = game.customers.get();
        var delta = game.data.growthRates[game.bean.get()]; // Change in customers
        var multiplier = game.data.growthFactors[game.price.get()]; // Returning customers
        
        customers = Math.floor(customers * multiplier) + delta ;
        game.customers.set( game.customers.get() + customers);
    };

    var calcRevenue = function () {
        revenue = game.customers.get() * (game.data.beanCosts[game.bean.get()] * game.data.priceModels[game.price.get()]);
        game.revenue.set(revenue);
    };

    var calcExpenses = function() {
        var weeklyCost = game.customers.get() * game.data.beanCosts[game.bean.get()];
        var totalExpenses = game.data.overhead + (game.data.epc * game.customers.get()) + weeklyCost;
        game.expenses.set(totalExpenses);
    };

    var calcTips = function() {
        var tips = 0;
        for( var i = 0; i < game.customers.get(); i++) {
            var percent = random(game.data.tip, 0);
            var ppc = game.data.beanCosts[game.bean.get()] * game.data.priceModels[game.price.get()];
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