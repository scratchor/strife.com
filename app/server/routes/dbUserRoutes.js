'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const User_1 = require('../database/models/User');
const router = express_1.default.Router();
router.get('/', (req, res) => {
  User_1.User.findAll()
    .then(users => {
      console.log(users);
      res.sendStatus(200);
    })
    .catch(err => console.log(err));
});
router.get('/add', (req, res) => {
  const data = {
    firstName: 'Vladislav',
    lastName: 'Tsarapkin',
    email: 'scratchor@mail.ru',
  };
  const { firstName, lastName, email } = data;
  User_1.User.create({ firstName, lastName, email })
    .then(user => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch(err => console.log(err));
});
module.exports = router;
