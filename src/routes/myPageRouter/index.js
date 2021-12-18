const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  if (!req.session.kakao) {
    //카카오 로그인을 안해서 세션에 없으면 로그인을 하도록 루트 페이지로 이동시킴
    res.send(
      "<script>alert('로그인이 필요한 기능입니다.');location.href='/';</script>"
    );
    return;
  } else {
    //카카오 로그인을 해서 세션에 kakao가 존재하면
    res.render("myPage.html");
  }
});

module.exports = router;
