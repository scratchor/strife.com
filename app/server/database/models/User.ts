import { DataTypes, Model, BuildOptions, Sequelize } from 'sequelize';

interface MyModel extends Model {
  readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
type MyModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): MyModel;
};

// TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.
export default (sequelize: Sequelize) => {
  return <MyModelStatic>sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  });
};
