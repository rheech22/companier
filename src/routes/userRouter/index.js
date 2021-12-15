const { Router } = require('express');

const router = Router();

const {
  getUser,
  getUserDetail,
  createUser,
  updateUser,
  deleteUser,
} = require('./userController');

router.get('/', getUser);
router.post('/', getUserDetail);
router.get('/:id', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
