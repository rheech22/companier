const comments = () => {
  const commentSection = document.createElement("section");
  commentSection.classList.add("datail-comment__container");

  let commentTemplate = `
      <section class="comment-feed">
        <h1 class="comment-feed__header">댓글 <span>0</span>개</h1>
        <ul class="comment__list">
            <li class="comment__item">
                <article class="comment__wrap">
                    <div class="comment__author">홍길동</div>
                    <div class="comment__content">내용</div>
                    <div class="comment__info">
                        <span class="comment__data">2021.12.17. 15:56</span>
                        <a href="#" class="comment__link">답글쓰기</a>
                    </div>
                    <div class="comment__reply-list">
                        <!-- 대댓글 -->
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div class="comment__tool">
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                </article>
            </li>
        </ul>
    </section>              
  `;

  commentSection.innerHTML = commentTemplate;
  document.querySelector(".mypet-datail__content").appendChild(commentSection);
};

export { comments };
