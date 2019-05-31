import express from 'express';
import { Friend } from '../database/models/Friend';
import { User } from '../database/models/User';
const router = express.Router();

router.get('/addfiend', (req: express.Request, res: express.Response) => {
  const data = {
    id: '1',
    FriendsID: '2',
  };

  const { id, FriendsID } = data;
  Friend.create({ id, FriendsID })
    .then((user: any) => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch((err: any) => console.log(err));
});

router.get('/findfriends', (req: express.Request, res: express.Response) => {
  Friend.find({ firstName, lastName, email })
    .then((user: any) => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch((err: any) => console.log(err));
});

module.exports = router;
