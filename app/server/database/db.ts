import { Sequelize } from 'sequelize-typescript';
import { User } from './User';
const path = require('path');

const db = new Sequelize('strife', 'postgres', 'scratchor', {
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

db.addModels([User]);

db.sync({ force: true });

export default db;
