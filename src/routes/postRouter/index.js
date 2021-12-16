const { Router } = require('express');

const router = Router();

const {
  getPosts,
  createPost,
  deletePost,
  updatePost,
} = require('./postController');

router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.put('/:id', updatePost);

module.exports = router;
