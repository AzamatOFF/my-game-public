const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AnsweredQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'player_id' });
      this.belongsTo(models.gameSet, { foreignKey: 'gameSet_id' });
      this.belongsTo(models.Category, { foreignKey: 'category_id' });
      this.belongsTo(models.Question, { foreignKey: 'question_id' });
    }
  }
  AnsweredQuestion.init(
    {
      player_id: DataTypes.INTEGER,
      gameSet_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      question_id: DataTypes.INTEGER,
      answered: DataTypes.BOOLEAN,
      rightAnswer: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'AnsweredQuestion',
    },
  );
  return AnsweredQuestion;
};
