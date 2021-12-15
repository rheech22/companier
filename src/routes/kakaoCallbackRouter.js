const { Router } = require("express");
const axios = require("axios");
const qs = require("qs");

const router = Router();

router.get("/", async (req, res) => {
  let token;
  const kakao = {
    clientID: "7dca59cc856275bad0761da4409be580",
    clientSecret: "kdasYwJPjzGgOZxRbqDdcJFio2Wu4OjA",
    redirectUri: "http://localhost:3000/auth/kakao/callback",
  };

  try {
    token = await axios({
      method: "POST",
      url: "https://kauth.kakao.com/oauth/token",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        grant_type: "authorization_code",
        client_id: kakao.clientID,
        client_secret: kakao.clientSecret,
        redirectUri: kakao.redirectUri,
        code: req.query.code,
      }),
    });
  } catch (err) {
    res.json(err.data);
  }

  let user;

  try {
    user = await axios({
      method: "get",
      url: "https://kapi.kakao.com/v2/user/me",
      headers: {
        Authorization: `Bearer ${token.data.access_token}`,
      }, //헤더에 내용을 보고 보내주겠다.
    });
  } catch (e) {
    res.json(e.data);
  }

  req.session.kakao = user.data;

  console.log("aaaaa req.session 출력하기");
  console.log(req.session);

  res.redirect("/");
});

module.exports = router;
