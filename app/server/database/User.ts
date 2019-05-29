import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
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
