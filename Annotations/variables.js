"use strict";
//When to use annotations
//1) Function that return the 'any' type
var json = '{"x": 10, "y":20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
//2) When we declare a variable on one line and init it later
var colors = ['red', 'green', 'blue'];
var foundColor;
for (var i = 0; i < colors.length; i++) {
    if (colors[i] === 'green') {
        foundColor = true;
    }
}
console.log(foundColor);
//3) Variables whose type cannot be inferred correctly
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
console.log(numberAboveZero);
