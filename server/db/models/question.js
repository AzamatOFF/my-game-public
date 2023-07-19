'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, { foreignKey: 'category_id' });
      this.hasMany(models.AnsweredQuestion, { foreignKey: 'question_id' });
    }
  }
  Question.init(
    {
      score: DataTypes.INTEGER,
      text: DataTypes.STRING,
      answer: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
