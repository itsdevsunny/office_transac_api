const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://assignment:2159@localhost:5432/assignment');

class OfficeTransaction extends Model {};


OfficeTransaction.init({
  transaction_type: DataTypes.INTEGER,
  amount: DataTypes.INTEGER,
  description: DataTypes.STRING,
  running_balance: DataTypes.INTEGER,
}, { sequelize, modelName: 'office_transactions' });

(async () => {
  await sequelize.sync({ force: true });
})();


module.exports = {
  OfficeTransaction,
  sequelize
}