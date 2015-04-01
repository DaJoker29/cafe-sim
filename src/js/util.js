function format ( number ) {
    return '$' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function random ( min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}