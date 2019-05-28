"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize = require('sequelize');
var User = sequelize.define('user', {
    // attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
    },
}, {
// options
});
