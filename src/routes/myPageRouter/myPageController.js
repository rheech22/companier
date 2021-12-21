const { Router } = require("express");
const { User } = require("../../models");
const router = Router();

const logined = async (req, res) => {
  try {
    if (!req.isLoggedIn) {
      res.redirect("/login");
      return;
    }

    const {
      kakao_account: { email },
    } = req.session.kakao;

    const user = await User.findOne({ email });

    res.render("myPage.html", user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const changeNickname = async (req, res) => {
  try {
    // if (!req.isLoggedIn) {
    //   res.redirect("/login");
    //   return;
    // }
    const { nickname } = req.params;
    const email = "1kimdg1@gmail.com"; // 원래는 req.session.kakao.kakao_account.email; 가 들어가야함
    await User.updateOne(
      { email },
      {
        nickname: nickname,
      }
    );
    const user = await User.findOne({ email });

    res.render("myPage.html", user);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { logined, changeNickname };
