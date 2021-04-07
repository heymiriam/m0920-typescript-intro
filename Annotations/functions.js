"use strict";
var add = function (a, b) {
    // return a + b + '10'
    return a + b;
};
console.log(add(2, 3));
var logger = function (message) {
    console.log(message);
    return message + '!!!!!';
};
logger('Hello there!');
var throwError = function (message) {
    if (!message) {
        throw new Error(message);
    }
};
throwError('test');
var todaysWeather = {
    date: new Date(),
    weather: 'rainy'
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
