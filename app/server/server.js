"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//database
var db_1 = __importDefault(require("./database/db"));
var app = express_1.default();
var PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
    return res.send('Hello World!');
});
db_1.default.authenticate()
    .then(function () {
    console.log('Connection has been established successfully.');
})
    .catch(function (err) {
    console.error('Unable to connect to the database:', err);
});
app.listen(PORT, function () {
    console.log("Server is running in http://localhost:" + PORT);
});
