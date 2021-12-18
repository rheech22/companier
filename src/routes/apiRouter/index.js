const { Router } = require('express');

const router = Router();

const {
  createComment,
  deleteComment,
  updateComment,
  createReComment,
  deleteReComment,
  updateReComment,
} = require('./apiController');

// URL은 논의 후에 확정하는 걸로...

// id => post.id
router.post('/:id/comments', createComment); // 댓글 생성

// id => comment.id
router.delete('/comments/:id', deleteComment); // 댓글 삭제
router.put('/comments/:id', updateComment); // 댓글 수정
router.post('/:id/recomments', createReComment); // 대댓글 생성

// id => recomment.id
router.delete('/recomments/:id', deleteReComment); // 대댓글 삭제
router.put('/recomments/:id', updateReComment); // 대댓글 수정

module.exports = router;
