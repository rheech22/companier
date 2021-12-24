import { pagination } from "../component/pagination.js";
import { user } from "./dummyUser.js";

const comments = () => {
  const displayTag = document.querySelector(".comment__list");
  const elementName = "li";
  const elementClass = "comment__item";
  const pageTag = document.querySelector(".comment__pages ul");
  let commentTemplate = (obj) => {
    const { content, author, timestamps } = obj;
    return `<article class="comment__wrap">
      <div class="comment__author">${author}</div>
      <div class="comment__content">${content}</div>
      <div class="comment__info">
        <span class="comment__data">${timestamps}</span>
        <a href="#" class="comment__link">
          답글쓰기
        </a>
      </div>
      <div class="comment__reply-list">
        <ul>
          <li></li>
        </ul>
      </div>
      <div class="comment__tool">
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </article>`;
  };

  //   let data = {
  //     comment: [
  //       {
  //         1: {},
  //         2: {},
  //         2: {},
  //         2: {},
  //         2: {},
  //         2: {},
  //         2: {},
  //         2: {},
  //         2: {},
  //         2: {},
  //         2: {},
  //         2: {},
  //         2: {},
  //       },
  //     ],
  //   };

  pagination(
    user.comments,
    5,
    displayTag,
    elementName,
    elementClass,
    commentTemplate,
    pageTag,
    5
  );
};

export { comments };
