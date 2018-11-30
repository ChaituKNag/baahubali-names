var uniqueRandomArray = require('unique-random-array');
var baahubaliNames = require('./baahubali-names.json');

module.exports = {
    all: baahubaliNames,
    random: uniqueRandomArray(baahubaliNames)
}