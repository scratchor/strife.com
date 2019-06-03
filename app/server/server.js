"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("@overnightjs/logger");
// database
const db_1 = require("./database/db");
const logger = new logger_1.Logger();
const app = express_1.default();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', require('./routes/dbUserRoutes'));
app.use('/users', require('./routes/dbFriendRoutes'));
db_1.sequelize
    .authenticate()
    .then(() => {
    logger.info('Connection has been established successfully.');
})
    .catch((err) => {
    logger.warn('Unable to connect to the database:', err);
});
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
