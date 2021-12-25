import { mainTag } from "./main.js";
import { myComments } from "./myComments.js";
import { myPage } from "./myPage.js";
import { changeName } from "./userChange.js";
import { myPosts } from "./myPosts.js";
import "../../style/myPage.css";
import "../../style/index.css";
import "../../style/myPetBoard.css";

const run = () => {
  window.addEventListener("DOMContentLoaded", () => {
    mainTag();
    myPage();
    changeName();
    myPosts();
    myComments();
  });
};

run();
