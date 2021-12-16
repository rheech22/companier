const { Router } = require('express');

const router = Router();

const {
  getPosts,
} = require('./postController');

router.get('/', getPosts);

module.exports = router;
