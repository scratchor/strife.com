import { Table, Column, Model, HasMany } from 'sequelize-typescript';

const sequelize = require('sequelize');
import db from './db';

const User = sequelize.define(
  'user',
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      // allowNull defaults to true
    },
  },
  {
    // options
  },
);
