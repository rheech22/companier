import { mainTag } from "./main.js";
import { postBody } from "./postBody.js";
import { comments } from "./comments.js";
import { commentPagination } from "./commentPagination.js";
import { commentInput } from "./commentInput.js";

const run = () => {
  window.addEventListener("DOMContentLoaded", () => {
    mainTag();
    postBody();
    comments();
    commentPagination();
    commentInput();
  });
};

run();
