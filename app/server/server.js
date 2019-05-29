"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// database
const db_1 = __importDefault(require("./database/db"));
const app = express_1.default();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', require('./routes/dbUserRoutes'));
db_1.default.authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch((err) => {
    console.error('Unable to connect to the database:', err);
});
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
