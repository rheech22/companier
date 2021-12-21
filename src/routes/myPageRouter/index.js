const { Router } = require("express");

const router = Router();

const { Post, User, Comment, ReComment } = require("../../models");

router.get("/", async (req, res) => {
  // 카카오 로그인을 안해서 세션에 없으면 로그인을 하도록 루트 페이지로 이동시킴
  if (!req.session.kakao) {
    res.send(
      "<script>alert('로그인이 필요한 기능입니다.');location.href='/';</script>"
    );
  } else {
    const {
      kakao_account: { email },
    } = req.session.kakao;

    // 카카오 로그인을 해서 세션에 kakao가 존재하면 user 객체와 함께 페이지 렌더링
    const user = await User.findOne({ email });

    res.render("myPage.html", user);
  }
});

//내가 쓴 글 받아오는 api
router.get("/posts", async (req, res) => {
  const email = req.session.kakao.kakao_account.email;
  const user = await User.findOne({ email }); // 세션의 카카오 이메일로 유저를 찾음
  const posts = await Post.find({ author: user }).populate("author");
});

//내가 쓴 댓글, 대댓글 받아오는 api
router.get("/comments", async (req, res) => {
  const email = req.session.kakao.kakao_account.email;
  const user = await User.findOne({ email }); // 세션의 카카오 이메일로 유저를 찾음
  const comments = await Comment.find({ author: user }).populate("author");
  const recomments = await ReComment.find({ author: user }).populate("author");
});

module.exports = router;
