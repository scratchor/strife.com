'use strict';
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
const sequelize_typescript_1 = require('sequelize-typescript');
const User_1 = require('./User');
let Friend = class Friend extends sequelize_typescript_1.Model {};
__decorate(
  [
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
  ],
  Friend.prototype,
  'userId',
  void 0,
);
__decorate(
  [sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)],
  Friend.prototype,
  'FriendID',
  void 0,
);
__decorate(
  [
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
  ],
  Friend.prototype,
  'createdAt',
  void 0,
);
__decorate(
  [
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
  ],
  Friend.prototype,
  'UpdatedAt',
  void 0,
);
__decorate(
  [
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
  ],
  Friend.prototype,
  'deletionDate',
  void 0,
);
Friend = __decorate([sequelize_typescript_1.Table], Friend);
exports.Friend = Friend;
