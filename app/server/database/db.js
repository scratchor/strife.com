"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const logger_1 = require("@overnightjs/logger");
const User_1 = __importDefault(require("./models/User"));
const logger = new logger_1.Logger();
exports.sequelize = new sequelize_typescript_1.Sequelize('strife', 'postgres', 'scratchor', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    logging: console.log,
    define: {
        charset: 'utf8',
        freezeTableName: true,
        underscored: true,
    },
});
const models = {
    User: User_1.default(exports.sequelize),
};
exports.sequelize
    .sync({ force: false })
    .then(() => __awaiter(this, void 0, void 0, function* () {
    logger.info('DB successfully synchronized with models');
}))
    .catch((err) => {
    logger.err(err);
    throw err;
});
exports.default = models;
