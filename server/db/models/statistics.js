'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.gameSet, { foreignKey: 'gameSet_id' });
    }
  }
  Statistics.init(
    {
      gameSet_id: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Statistics',
    }
  );
  return Statistics;
};
