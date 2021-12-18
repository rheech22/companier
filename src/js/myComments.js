const makeComments = () => {
  const mainContent = document.querySelector(".comments__list");

  const makeHTML = (postLink, comment, author, postTitle) => {
    return `<article class="content">
              <a href=${postLink}>
                <div class = "content__info">
                  <p class="content__info__comment">${comment}</p>
                  <p class="content__info__date">${author}</p>
                  <p class="content__info__post">${postTitle}</p>
                </div>
              </a>
            <button id = "deleteComment" class="btn">삭제</button>
            </article>
            <div class="content__seperator">
              <div class="content__seperator__line"></div>
            </div>`;
  };

  const user = {
    posts: [
      { title: "제목입니다.", content: "내용입니다.", views: "123" },
      { title: "제목입니다1", content: "내용입니다2", views: "1323" },
    ],
    comments: [
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용321입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
    ],
  };

  mainContent.innerHTML = user.comments
    .map((obj) =>
      makeHTML(obj.postLink, obj.content, obj.author, obj.postTitle)
    )
    .join("");
};

makeComments();

const deleteBtn = document.getElementById("deleteComment");
deleteBtn.addEventListener("click", (e) => {
  alert("지우시겠습니까?");
});
