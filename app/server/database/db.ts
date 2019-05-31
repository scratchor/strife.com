import { Sequelize } from 'sequelize-typescript';
import { User } from './models/User';
const path = require('path');

const db = new Sequelize('strife', 'postgres', 'scratchor', {
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

export default db;
