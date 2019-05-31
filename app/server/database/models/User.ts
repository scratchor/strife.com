import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
  PrimaryKey,
  AutoIncrement,
  BelongsToMany,
} from 'sequelize-typescript';
import { Friend } from './Friend';

@Table
export class User extends Model<User> {
  @BelongsToMany(() => User, () => Friend, 'userId')
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.STRING)
  lastName: string;

  @Column(DataType.STRING)
  email: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  UpdatedAt: Date;

  @DeletedAt
  @Column(DataType.DATE)
  deletionDate: Date;
}
