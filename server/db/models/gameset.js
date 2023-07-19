'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gameSet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.hasMany(models.Category, { foreignKey: 'gameSet_id' });
      this.hasMany(models.AnsweredQuestion, { foreignKey: 'gameSet_id' });
      this.hasOne(models.Statistics, { foreignKey: 'gameSet_id' });
    }
  }
  gameSet.init(
    {
      name: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'gameSet',
    }
  );
  return gameSet;
};
