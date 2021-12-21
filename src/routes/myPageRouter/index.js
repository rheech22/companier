const { Router } = require("express");

const router = Router();

const { setLoggedInStatus } = require("../../middlewares");

const { User } = require("../../models");

router.get("/", setLoggedInStatus, async (req, res) => {
  // 로그인 상태가 아니면 로그인 페이지로 redirect
  if (!req.isLoggedIn) {
    res.redirect("/login");
    return;
  }

  try {
    const {
      kakao_account: { email },
    } = req.session.kakao;

    const user = await User.findOne({ email });

    res.render("myPage.html", user);
  } catch (error) {
    res.status(500).redirect("/");
  }
});

module.exports = router;
