"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    var userid = 10;
    logTodo(id, completed, title, userid);
});
var logTodo = function (id, completed, title, userId) {
    if (userId === void 0) { userId = 30; }
    console.log("\n    The Todo with ID: " + id + "\n    Has a title of: " + title + "\n    Is it finished? " + completed + "\n");
};
