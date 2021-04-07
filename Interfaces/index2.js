"use strict";
var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () {
        return "Name " + this.name;
    }
};
var drink = {
    color: 'brown',
    carbonate: true,
    sugar: 40,
    summary: function () {
        return "My drink has " + this.sugar + " grams of sugar";
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
