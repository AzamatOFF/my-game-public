'use strict';
const { Model } = require('sequelize');
const gameset = require('./gameset');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.gameSet, { foreignKey: 'gameSet_id' });
      this.hasMany(models.Question, { foreignKey: 'category_id' });
      this.hasMany(models.AnsweredQuestion, { foreignKey: 'category_id' });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      gameSet_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );
  return Category;
};
