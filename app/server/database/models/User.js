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
var User_1;
('use strict');
const sequelize_typescript_1 = require('sequelize-typescript');
const Friend_1 = require('./Friend');
let User = (User_1 = class User extends sequelize_typescript_1.Model {});
__decorate(
  [
    sequelize_typescript_1.BelongsToMany(
      () => User_1,
      () => Friend_1.Friend,
      'userId',
    ),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
  ],
  User.prototype,
  'id',
  void 0,
);
__decorate(
  [sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)],
  User.prototype,
  'firstName',
  void 0,
);
__decorate(
  [sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)],
  User.prototype,
  'lastName',
  void 0,
);
__decorate(
  [sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)],
  User.prototype,
  'email',
  void 0,
);
__decorate(
  [
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
  ],
  User.prototype,
  'createdAt',
  void 0,
);
__decorate(
  [
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
  ],
  User.prototype,
  'UpdatedAt',
  void 0,
);
__decorate(
  [
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
  ],
  User.prototype,
  'deletionDate',
  void 0,
);
User = User_1 = __decorate([sequelize_typescript_1.Table], User);
exports.User = User;
