const { Router } = require('express');

const router = Router();

const {
  createComment,
  deleteComment,
} = require('./apiController');

router.post('/:id/comments', createComment); // 댓글 생성
router.delete('/:id/delete-comment', deleteComment); // 댓글 삭제

module.exports = router;
