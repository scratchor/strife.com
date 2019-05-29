import express from 'express';
import { User } from '../database/User';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  /*  User.sync({ force: true }).then(() =>
    User.findAll()
      .then((users: any) => {
        console.log(users);
        res.sendStatus(200);
      })
      .catch((err: any) => console.log(err)),
  );*/

  User.findAll()
    .then((users: any) => {
      console.log(users);
      res.sendStatus(200);
    })
    .catch((err: any) => console.log(err));
});

router.get('/add', (req: express.Request, res: express.Response) => {
  const data = {
    firstName: 'Vladislav',
    lastName: 'Tsarapkin',
    email: 'scratchor@mail.ru',
  };

  const { firstName, lastName, email } = data;
  User.create({ firstName, lastName, email })
    .then((user: any) => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch((err: any) => console.log(err));
});

module.exports = router;
