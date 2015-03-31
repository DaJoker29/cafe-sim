var cafe = (function ( game ) {

    game.calculate = function () {
        var bean = game.bean.get();
        var price = game.price.get();
        var customers = parseInt(game.customers.get());
        var revenue = 0;
        var expenses = 0;
        var tips = 0;
        var net = 0;
        var delta; // Change in customers
        var multiplier; // Returning customers

        switch (bean) {
            case 'gourmet':
                delta = 9;
                break;
            case 'hipster':
                delta = 7;
                break;
            case 'good':
                delta = 5;
                break;
            case 'cheap':
                delta = 3;
                break;
            case 'actual':
                delta = 1;
                break;
        }

        switch (price) {
            case 'well above':
                multiplier = -0.1;
                break;
            case 'above':
                multiplier = -0.02;
                break;
            case 'at':
                multiplier = -0.005;
                break;
            case 'below':
                multiplier = 0.05;
                break;
            case 'well below':
                multiplier = 0.012;
                break;
        }


        ////////////////////
        // Increment Week //
        ////////////////////
        game.week.increment();

        /////////////////////////
        // Calculate Customers //
        /////////////////////////
        customers = Math.floor(customers * multiplier) + delta ;
        game.customers.change(customers);

        ///////////////////////////////////
        // Calculate Revenue and Expense //
        ///////////////////////////////////
        var priceList = {
            'gourmet': 2.55,
            'hipster': 2.25,
            'good': 2.00,
            'cheap': 1.40,
            'actual': 0.90
        };

        var priceFactors = {
            'well above': 2.3,
            'above': 1.8,
            'at': 1.05,
            'below': 1,
            'well below': 0.8
        };

        expenses = game.customers.get() * priceList[bean];
        game.expenses.change(expenses);

        revenue = game.customers.get() * (priceList[bean] * priceFactors[price]);
        game.revenue.change(revenue);

        ////////////////////
        // Calculate Tips //
        ////////////////////
        for( var i = 0; i < game.customers.get(); i++) {
            var percent = Math.random() * 0.3;
            var ppc = priceList[bean] * priceFactors[price];
            var tip = percent * ppc;
            tips += parseFloat(tip);
        }

        game.tips.change(tips);

        ///////////////////
        // Calculate Net //
        ///////////////////
        net = game.revenue.get() + game.tips.get() - game.expenses.get();
        game.net.change(net);

        ////////////////////
        // Calculate Bank //
        ////////////////////
        game.bank.change(net);
    };

    return game;
} ( cafe || {}));