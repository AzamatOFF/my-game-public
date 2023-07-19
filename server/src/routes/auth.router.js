const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  res.json(req.session.user || null);
});

router.post('/signup', async (req, res) => {
  try {
    const { name, login, password } = req.body;
    const checkLogin = await User.findOne({ where: { login } });
    if (!checkLogin) {
      const hash = await bcrypt.hash(password, 10);
      const user = (
        await User.create({
          name,
          login,
          password: hash,
        })
      ).get();
      delete user.password;
      delete user.createdAt;
      delete user.updatedAt;
      res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const checkUser = await User.findOne({ where: { login }, raw: true });

    if (checkUser) {
      const checkPass = await bcrypt.compare(password, checkUser.password);
      if (!checkPass) {
        res.status(401).json({ msg: 'Try again' });
      }
      if (checkPass) {
        req.session.user = checkUser;
        res.json(checkUser);
      }
      if (!checkUser) {
        res.status(400).json({ msg: 'Try again' });
      }
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get('/signout', (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('Cookie');
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get('/home', async (req, res) => {
  try {
    res.json({ msg: 'Ok' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
