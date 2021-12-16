const { Router } = require('express');

const router = Router();

const {
  getPosts,
  createPost,
} = require('./postController');

router.get('/', getPosts);
router.post('/', createPost);

module.exports = router;
