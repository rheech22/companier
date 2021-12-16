const { Router } = require('express');

const router = Router();

const {
  getPosts,
  getPostDetail,
  createPost,
  deletePost,
  updatePost,
} = require('./postController');

router.get('/', getPosts);
router.get('/:id', getPostDetail);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.put('/:id', updatePost);

module.exports = router;
