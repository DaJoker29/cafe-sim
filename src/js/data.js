var cafe = (function ( game ) {
    
    game.data = {};

    game.data.beanCosts = {
        'gourmet': 2.55,
        'hipster': 2.25,
        'good': 2.00,
        'cheap': 1.40,
        'actual': 0.90
    };

    game.data.priceModels = {
        'well above': 2.3,
        'above': 1.8,
        'at': 1.05,
        'below': 1,
        'well below': 0.8
    };

    game.data.growthRates = {
        'gourmet': 9,
        'hipster': 7,
        'good': 5,
        'cheap': 3,
        'actual': 1
    };

    game.data.growthFactors = {
        'well above': -0.1,
        'above': -0.02,
        'at': -0.005,
        'below': 0.05,
        'well below': 0.012
    };

    game.data.overhead = 1;
    game.data.epc = 0.3;

    game.data.tip = 0.3;

    return game;
} ( cafe || {}));