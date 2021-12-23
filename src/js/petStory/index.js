import { mainTag } from "./main.js";
import { postBody } from "./postBody.js";
import { comments } from "./comments.js";
import { commentsBody } from "./commentsBody.js";
import { commentInput } from "./commentInput.js";
import { articleBottomBtns } from "./articleBottomBtns.js";
import { checkLoginUser } from "./checkLoginUser.js";
import { getPetStoryDetail } from "./api/getPetStoryDetail.js";

const run = () => {
  window.addEventListener("DOMContentLoaded", async () => {
    let data = await getPetStoryDetail(location.pathname.split("/")[2]);
    let checkLogin = await checkLoginUser();
    console.log("데이터 확인");
    console.log(data);
    console.log(checkLogin);
    mainTag();
    postBody(data);
    commentsBody();
    comments();
    commentInput();
    articleBottomBtns(data);
  });
};

run();
