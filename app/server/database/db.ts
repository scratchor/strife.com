import { Sequelize } from 'sequelize-typescript';

const db = new Sequelize('strife', 'postgres', 'scratchor', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
export default db;
