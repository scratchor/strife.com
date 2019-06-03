import express from 'express';
import { Logger } from '@overnightjs/logger';

// database
import { sequelize } from './database/db';

const logger = new Logger();

const app = express();
const PORT: any = process.env.PORT || 5000;

app.get('/', (req: express.Request, res: express.Response) =>
  res.send('Hello World!'),
);

app.use('/users', require('./routes/dbUserRoutes'));
app.use('/users', require('./routes/dbFriendRoutes'));

sequelize
  .authenticate()
  .then(() => {
    logger.info('Connection has been established successfully.');
  })
  .catch((err: any) => {
    logger.warn('Unable to connect to the database:', err);
  });

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
