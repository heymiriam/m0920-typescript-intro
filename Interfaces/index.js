"use strict";
var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () {
        return "Name " + this.name;
    }
};
var printVehicle = function (vehicle) {
    // console.log(`Name: ${vehicle.name}`)
    // console.log(`Year: ${vehicle.year}`)
    // console.log(`Broken: ${vehicle.broken}`)
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
