import { mainTag } from "./main.js";
import { postBody } from "./postBody.js";
import { comments } from "./comments.js";
import { commentPagination } from "./commentPagination.js";
import { commentInput } from "./commentInput.js";
import { articleBottomBtns } from "./articleBottomBtns.js";
import { checkLoginUser } from "./checkLoginUser.js";
import { getPetStoryDetail } from "./api/getPetStoryDetail.js";

const run = () => {
  window.addEventListener("DOMContentLoaded", async () => {
    let data = await getPetStoryDetail(location.pathname.split("/")[2]);
    let checkLogin = await checkLoginUser();

    console.log(checkLogin);
    mainTag();
    postBody(data);
    comments();
    commentPagination();
    commentInput();
    articleBottomBtns(data);
  });
};

run();
