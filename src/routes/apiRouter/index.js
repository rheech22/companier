const { Router } = require("express");

const router = Router();

const {
  createComment,
  deleteComment,
  updateComment,
  createReComment,
  deleteReComment,
  updateReComment,
  getPost,
  createPost,
  deletePost,
  updatePost,
  getUserDetail,
  updateUser,
  deleteUser,
} = require("./apiController");

const { isLoggedIn } = require("../../middlewares");

router.get("/user-detail", isLoggedIn, getUserDetail);
router.put("/user-detail", updateUser);
router.delete("/user-detail", isLoggedIn, deleteUser);

router.post("/posts", isLoggedIn, createPost);
// id => post.id
router.get("/posts/:id", getPost);
router.delete("/posts/:id", isLoggedIn, deletePost);
router.put("/posts/:id", isLoggedIn, updatePost);

router.post("/:id/comments", isLoggedIn, createComment); // 댓글 생성

// id => comment.id
router.delete("/comments/:id", isLoggedIn, deleteComment); // 댓글 삭제
router.put("/comments/:id", isLoggedIn, updateComment); // 댓글 수정
router.post("/:id/recomments", isLoggedIn, createReComment); // 대댓글 생성

// id => recomment.id
router.delete("/recomments/:id", isLoggedIn, deleteReComment); // 대댓글 삭제
router.put("/recomments/:id", isLoggedIn, updateReComment); // 대댓글 수정

module.exports = router;
