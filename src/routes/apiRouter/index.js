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

router.get('/', (req, res) => {
  res.send('Hello API');
});

router.post('/:id/comments', createComment); // 댓글 생성
router.delete('/:id/delete-comment', deleteComment); // 댓글 삭제
router.put('/:id/update-comment', updateComment); // 댓글 수정

router.post('/:id/recomments', createReComment); // 대댓글 생성
router.delete('/:id/delete-recomment', deleteReComment); // 대댓글 삭제
router.put('/:id/update-recomment', updateReComment); // 대댓글 수정

module.exports = router;
