const comments = (result, loginInfo) => {
  console.log(loginInfo._id); // 로그인한 유저 id
  console.log(loginInfo);
  const commentSection = document.createElement("section");
  commentSection.classList.add("datail-comment__container");

  let commentTemplate = `
      <section class="comment-feed">
        <h1 class="comment-feed__header">댓글 <span>0</span>개</h1>
        <ul class="comment__list">
            {{__comments-list__}}
        </ul>
    </section>              
  `;

  let commentLi = [];
  result.forEach((comment) => {
    const time = `${comment.createdAt.split("-")[0]}년 ${
      comment.createdAt.split("-")[1]
    }월 ${comment.createdAt.split("-")[2].substr(0, 2)}일`;

    let commentLiTemplate = `
        <li class="comment__item">
            <article class="comment__wrap">
                <div class="comment__author">${comment.author.nickname}</div>
                <div class="comment__content">${comment.content}</div>
                <div class="comment__info">
                    <span class="comment__data">${time}</span>
                    <a href="#" class="comment__link hidden" data-comment-id="${comment._id}">답글쓰기</a>
                </div>
                <div class="comment__reply-list">
                    <!-- 대댓글 -->
                    <ul class="reply-list__container">
                        {{__reply-comments__}}
                    </ul>
                </div>
                <div class="comment__tool hidden" data-comment-author-id="${comment.author._id}">
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </article>
        </li>
    `;

    console.log(comment.reComments);
    let reCommentLi = [];
    if (comment.reComments.length > 0) {
      comment.reComments.forEach((reComment) => {
        const reCommentTime = `${reComment.createdAt.split("-")[0]}년 ${
          reComment.createdAt.split("-")[1]
        }월 ${reComment.createdAt.split("-")[2].substr(0, 2)}일`;
        reCommentLi.push(`
            <li class="reComment__item">
              <article class="comment__wrap">
                  <div class="comment__author">${reComment.author.nickname}</div>
                  <div class="comment__content">${reComment.content}</div>
                  <div class="comment__info">
                      <span class="comment__data">${reCommentTime}</span>
                      <!-- <a href="#" class="comment__link hidden" data-comment-id="${reComment._id}">답글쓰기</a> -->
                  </div>
                  <div class="comment__tool hidden" data-comment-author-id="${reComment.author._id}">
                      <i class="fas fa-ellipsis-v"></i>
                  </div>
              </article>
            </li>
          `);
      });
      commentLiTemplate = commentLiTemplate.replace(
        " {{__reply-comments__}}",
        reCommentLi.join("")
      );
    }

    commentLi.push(commentLiTemplate);
  });
  commentTemplate = commentTemplate.replace(
    "{{__comments-list__}}",
    commentLi.join("")
  );

  commentSection.innerHTML = commentTemplate;
  document.querySelector(".mypet-datail__content").appendChild(commentSection);
};

export { comments };
