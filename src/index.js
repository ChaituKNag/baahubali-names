var uniqueRandomArray = require('unique-random-array');
var baahubaliNames = require('./baahubali-names.json');
var getRandomItem = uniqueRandomArray(baahubaliNames);
module.exports = {
    all: baahubaliNames,
    random: random
}

function random(number) {
    if(number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for(var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}