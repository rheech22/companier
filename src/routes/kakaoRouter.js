const { Router } = require("express");

const router = Router();
const clientID = "7dca59cc856275bad0761da4409be580";
const redirectUri = "http://localhost:3000/auth/kakao/callback";
// 템플릿 engine 저장 안한 경로: C:\Users\(사용자명)\Desktop\teamProject\project-template\routes
router.get("/", (req, res) => {
  const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&response_type=code&scope=profile_nickname,profile_nickname`;
  res.redirect(kakaoAuthURL);
});

router.get("/logout", (req, res) => {
  delete req.session.kakao; //세션 목록에서 kakao 제거
  console.log(req.session);
  req.session.save(() => {
    //제거 성공시 루트 페이지로 이동
    res.redirect("/");
  });
});

module.exports = router;
