import express from 'express';
import sequelize from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { any } from 'prop-types';

// database
import db from './database/db';

const app = express();
const PORT: any = process.env.PORT || 3000;

app.get('/', (req: express.Request, res: express.Response) =>
  res.send('Hello World!'),
);

app.use('/users', require('./routes/dbUserRoutes'));

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
