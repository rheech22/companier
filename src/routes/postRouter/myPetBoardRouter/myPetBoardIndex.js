const { Router } = require('express');

const router = Router();

const { setLoggedInStatus } = require('../../../middlewares');

const {
  getPosts,
  getPostDetail,
  createPost,
  deletePost,
  updatePost,
} = require('./myPetBoardController');

router.get('/', setLoggedInStatus, getPosts); // 게시물 전체 라우터
router.get('/:id', setLoggedInStatus, getPostDetail); // 상세 페이지 라우터
router.post('/', createPost);
router.delete('/:id', deletePost);
router.put('/:id', updatePost);

module.exports = router;
