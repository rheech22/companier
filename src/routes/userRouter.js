const { Router } = require('express');

const router = Router();

const { User } = require('../models');

// 모든 유저 반환 - 필요없을 수도...
router.get('/', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// 유저 생성 테스트 전용 API - oauth 구현에 따라 실제 앱에선 필요 없음
router.post('/', async (req, res) => {
  const { email, nickname, password } = req.body;
  try {
    const user = await User.create({
      email,
      nickname,
      password,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });

  if (!user) res.status(404).end();

  res.json(user);
});

// 닉네임 중복에 대한 예외처리 구현은 프론트와 협의
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nickname } = req.body;

  if (!nickname) return res.status(400).end();

  const user = await User.updateOne({ _id: id }, { nickname });

  if (!user) res.status(404).end();

  res.json(user);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.deleteOne({ _id: id });

  if (!user) res.status(404).end();

  res.send(204);
});

module.exports = router;
