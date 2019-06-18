'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const sequelize_1 = require('sequelize');
// TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.
exports.default = sequelize => {
  return sequelize.define('User', {
    id: {
      primaryKey: true,
      type: sequelize_1.DataTypes.INTEGER,
    },
  });
};
