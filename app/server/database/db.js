"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
const path = require('path');
const db = new sequelize_typescript_1.Sequelize('strife', 'postgres', 'scratchor', {
    host: 'localhost',
    dialect: 'postgres',
    // models: [`${path.dirname}/app/server/database/User.ts`],
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
db.addModels([User_1.User]);
db.sync({ force: true });
exports.default = db;
