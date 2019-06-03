import { Sequelize } from 'sequelize-typescript';
import { Logger } from '@overnightjs/logger';
import User from './models/User';
const logger = new Logger();

export const sequelize = new Sequelize('strife', 'postgres', 'scratchor', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  logging: console.log, // TODO change console.log to Logger
  define: {
    charset: 'utf8',
    freezeTableName: true,
    underscored: true,
  },
});

const models = {
  User: User(sequelize),
};

sequelize
  .sync({ force: false })
  .then(async () => {
    logger.info('DB successfully synchronized with models');
  })
  .catch((err: Error) => {
    logger.err(err);
    throw err;
  });

export default models;
