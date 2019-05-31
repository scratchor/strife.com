"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Friend_1 = require("../database/models/Friend");
const router = express_1.default.Router();
router.get('/addfiend', (req, res) => {
    const data = {
        id: '1',
        FriendsID: '2',
    };
    const { id, FriendsID } = data;
    Friend_1.Friend.create({ id, FriendsID })
        .then((user) => {
        console.log(user);
        res.sendStatus(200);
    })
        .catch((err) => console.log(err));
});
router.get('/findfriends', (req, res) => {
    Friend_1.Friend.find({ firstName, lastName, email })
        .then((user) => {
        console.log(user);
        res.sendStatus(200);
    })
        .catch((err) => console.log(err));
});
module.exports = router;
