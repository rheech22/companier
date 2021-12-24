import { mainTag } from "./main.js";
import { postBody } from "./postBody.js";
import { comments } from "./comments.js";
import { commentPagination } from "./commentPagination.js";
import { commentInput } from "./commentInput.js";
import { articleBottomBtns } from "./articleBottomBtns.js";
import { checkLoginUser } from "./checkLoginUser.js";
import { getPetStoryDetail, getReComments } from "./api.js";
import {
  handlePostComment,
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
    comments(data.comments, loginInfo);
    commentPagination();
    commentInput(isNotLogin);
    articleBottomBtns(data);

    showHiddenBox(loginInfo, isNotLogin);
    handlePostComment();
    handleRePostComment(loginInfo);
    clickCommentToolBox();
  });
};

run();
