/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AnsweredQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      player_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
      gameSet_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'gameSets',
          },
          key: 'id',
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Categories',
          },
          key: 'id',
        },
      },
      question_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Questions',
          },
          key: 'id',
        },
      },
      answered: {
        type: Sequelize.BOOLEAN,
      },
      rightAnswer: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AnsweredQuestions');
  },
};
