import { commentPagination } from './commentPagination.js';

import { getTime } from '../utils.js';

const myComments = async () => {
  const response = await fetch('/api/user-detail');
  const user = await response.json();
  commentsTemplate(user);
};

const commentsTemplate = (user) => {
  // reverse(): 최신순으로 정렬
  const data = user.comments.reverse();
  const displayTag = document.querySelector('.myComments__list');
  const pagesTag = document.querySelector('.myComment__pages ul');
  const elementName = 'article';
  const elementClass = 'content';
  const rows = 5;
  const pageCut = 10;
  const makeHTML = (data) => {
    const {
      parentPost, content, createdAt, _id,
    } = data;
    const parsedTime = getTime(createdAt);
    const { years, month, date } = parsedTime;
    const time = `${years}년 ${month}월 ${date}일`;
    return `<form class = "content__info">
					<a href=/myPetBoard/${parentPost} class="content__info__link">
						<p class="content__info__comment">${content}</p>
						<p class="content__info__post">작성일: ${time}</p>
					</a>
					<div class="deleteBox">
						<button class="btn" data-comment-id="${_id}">삭제</button>
					</div>
				</form>`;
  };

  commentPagination(
    data,
    rows,
    displayTag,
    elementName,
    elementClass,
    makeHTML,
    pagesTag,
    pageCut,
  );

  // const deleteComment = async (id) => {
  //   const res = await fetch(`/api/comments/${id}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //     body: "",
  //     redirect: "follow",
  //   });
  // };

  // const deleteBtns = document.querySelectorAll(".deleteBox > .btn");

  // deleteBtns.forEach((btn) => {
  //   btn.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     if (confirm("댓글을 삭제하시겠습니까?")) {
  //       const id = e.target.getAttribute("data-comment-id");
  //       deleteComment(id);
  //       location.reload();
  //     }
  //   });
  // });
};

export { myComments };
