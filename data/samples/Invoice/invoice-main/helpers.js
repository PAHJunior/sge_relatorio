function now() {
    return new Date().toLocaleDateString()
}

function nowPlus20Days() {
    var date = new Date()
    date.setDate(date.getDate() + 20);
    return date.toLocaleDateString();
}

function total(items) {
    var sum = 0
    items.forEach(function (i) {
        console.log('Calculating item ' + i.produto + '; you should see this message in debug run')
        i.precounit = parseFloat(i.precounit)
        sum += i.precounit
    })
    return sum.toFixed(2)
}