const { Router } = require('express');

const router = Router();

const {
  getPosts,
  createPost,
  deletePost,
} = require('./postController');

router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);

module.exports = router;
