"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const path = require('path');
const db = new sequelize_typescript_1.Sequelize('strife', 'postgres', 'scratchor', {
    host: 'localhost',
    dialect: 'postgres',
    models: [`${__dirname}/models`],
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
//db.addModels([User]);
db.sync({ force: true }).then(() => console.log('Synchronization complete!'));
exports.default = db;
