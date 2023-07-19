const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.gameSet, { foreignKey: 'user_id' });
      this.hasMany(models.AnsweredQuestion, { foreignKey: 'player_id' });
      this.hasOne(models.Statistics, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      login: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
