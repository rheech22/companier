const { Router } = require('express');

const router = Router();

const { User } = require('../models/schemas/user');

// const users = [
//   { id: 1, name: 'zed' },
// ];

router.get('/', async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

router.post('/add_user', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// router.get('/:id', ctrl.show);

// router.delete('/:id', ctrl.destroy);

// router.post('/', ctrl.create);

// router.put('/:id', ctrl.update);

module.exports = router;
