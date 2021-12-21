const { Router } = require("express");

const router = Router();

const { setLoggedInStatus } = require("../../middlewares");
const { logined, changeNickname } = require("./myPageController");

router.get("/", setLoggedInStatus, logined);
router.post("/modify/:nickname", changeNickname);

module.exports = router;
