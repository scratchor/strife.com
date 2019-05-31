import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
  ForeignKey,
  PrimaryKey,
} from 'sequelize-typescript';
import { User } from './User';

@Table
export class Friend extends Model<Friend> {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @Column(DataType.INTEGER)
  FriendID: number;

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
