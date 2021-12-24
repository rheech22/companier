import { mainTag } from "./main.js";
import { postBody } from "./postBody.js";
// import { comments } from "./comments_temp.js";
// import { commentsBody } from "./commentsBody_temp.js";
import { comments } from "./comments.js";
import { commentPagination } from "./commentPagination.js";
import { commentInput } from "./commentInput.js";
import { articleBottomBtns } from "./articleBottomBtns.js";
import { checkLoginUser } from "./checkLoginUser.js";
import { getPetStoryDetail, getReComments } from "./api.js";
import {
  handlePostComment,
  handleCommentToolBox,
  clickCommentToolBox,
  handleRePostComment,
  showHiddenBox,
} from "./handleComment.js";

import "../../style/reset.css";
import "../../style/index.css";
import "../../style/myPetBoard.css";
import "../../style/myPetBoardDetail.css";

const run = () => {
  window.addEventListener("DOMContentLoaded", async () => {
    let data = await getPetStoryDetail(location.pathname.split("/")[2]);
    let checkLogin = await checkLoginUser();
    let isNotLogin = Object.keys(checkLogin).length === 0;
    let loginInfo = checkLogin;

    mainTag();
    postBody(data);
    // commentsBody();
    // comments();
    comments(data.comments, loginInfo);
    commentPagination();
    commentInput(isNotLogin);
    articleBottomBtns(data);

    showHiddenBox(loginInfo, isNotLogin);
    handlePostComment();
    handleCommentToolBox(loginInfo);
    handleRePostComment(isNotLogin);
    clickCommentToolBox();
  });
};

run();
