const router = require('express').Router();
const {
  gameSet, Category, Question, AnsweredQuestion, Statistics, User,
} = require('../../db/models');

router.get('/table', async (req, res) => {
  try {
    const decks = await Category.findAll({
      attributes: ['id', 'name'],
      order: [[Question, 'score', 'ASC']],
      include: {
        model: Question,
        attributes: ['id', 'score', 'text', 'answer'],
      },

    });
    res.json(decks.map((deck) => deck.get()));
  } catch (err) {
    console.log({ msg: err.message });
  }
});

router.get('/statistics', async (req, res) => {
  try {
    const result = await User.findAll({
      order: [['id', 'ASC']],
      attributes: ['id', 'name'],
      include: {
        model: Statistics,
        attributes: ['user_id', 'score'],
      },
    });
    const response = result.map((el) => el.get({ plain: true }));
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

router.post('/ansquestions', async (req, res) => {
  const {
    playerId, gameSetId, categoryId, questionId, answered, rightAnswer,
  } = req.body;

  try {
    const result = await AnsweredQuestion.create({
      player_id: playerId,
      gameSet_id: gameSetId,
      category_id: categoryId,
      question_id: questionId,
      answered,
      rightAnswer,
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

router.post('/statistics', async (req, res) => {
  const {
    gameSetId, score, userId,
  } = req.body;

  try {
    const findStats = await Statistics.findOne({ where: { user_id: userId } });
    let result;
    if (findStats) {
      result = await Statistics.increment({ score: +score }, { where: { user_id: userId } });
    } else {
      result = await Statistics.create({
        gameSet_id: gameSetId,
        score,
        user_id: userId,
      });
    }

    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

router.post('/gameset', async (req, res) => {
  try {
    const result = await gameSet.create({
      name: '1',
    });
    res.json(result);
  } catch (err) {
    console.log({ msg: err.message });
  }
});

module.exports = router;
