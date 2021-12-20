const { Router } = require('express');

const router = Router();

const { setLoggedInStatus } = require('../../middlewares');

router.get('/', setLoggedInStatus, (req, res) => {
  // 로그인 상태가 아니면 로그인 페이지로 redirect
  if (!req.isLoggedIn) {
    res.redirect('/login');
    return;
  }

  res.render('modifyMyInfo.html');
});

module.exports = router;
