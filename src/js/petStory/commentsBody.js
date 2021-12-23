const commentsBody = () => {
  const commentSection = document.createElement("section");
  commentSection.classList.add("datail-comment__container");
  commentSection.innerHTML = `
  <section class="comment-feed">
        <h1 class="comment-feed__header">댓글 <span>0</span>개</h1>
        <div class="comment__pages">
        <div class="prev">이전 페이지</div>
        <ul class="pagination"></ul>
        <div class="next">다음 페이지</div>
      </div>
        <ul class="comment__list">
        </ul>
        </section>
        `;

  document.querySelector(".mypet-datail__content").appendChild(commentSection);
};

export { commentsBody };
