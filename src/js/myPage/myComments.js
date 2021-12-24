import { pagination } from "../component/pagination.js";

const myComments = async () => {
  const response = await fetch(`/api/user-detail`);
  const user = await response.json();
  commentsTemplate(user);
};

const commentsTemplate = (user) => {
  const data = user.comments;
  const displayTag = document.querySelector(".myComments__list");
  const pagesTag = document.querySelector(".myComment__pages ul");
  const elementName = "article";
  const elementClass = "content";
  const rows = 5;
  const pageCut = 10;
  const makeHTML = (data) => {
    console.log(data);
    const { parentPost, content, createdAt, _id } = data;
    return `<form class = "content__info">
					<a href=${parentPost} class="content__info__link">
						<p class="content__info__comment">${content}</p>
						<p class="content__info__post">${createdAt}</p>
					</a>
					<div class="deleteBox">
						<button class="btn" comment__id="${_id}">삭제</button>
					</div>
				</form>
				<div class="content__seperator">
					<div class="content__seperator__line">
				</div>`;
  };

  pagination(
    data,
    rows,
    displayTag,
    elementName,
    elementClass,
    makeHTML,
    pagesTag,
    pageCut
  );

  const deleteComment = async (id) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: "",
      redirect: "follow",
    });
  };

  const deleteBtns = document.querySelectorAll(".deleteBox > .btn");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (confirm("댓글을 삭제하시겠습니까?")) {
        const id = e.target.getAttribute("comment__id");
        deleteComment(id);
        location.reload();
      }
    });
  });
};

export { myComments };
