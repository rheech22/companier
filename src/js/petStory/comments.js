import { getTime } from '../utils';

const comments = (result, loginInfo) => {
  const commentSection = document.createElement('section');
  commentSection.classList.add('datail-comment__container');

  let commentTemplate = `
      <section class="comment-feed">
        <h1 class="comment-feed__header">댓글 <span>0</span>개</h1>
        <ul class="comment__list">
            {{__comments-list__}}
        </ul>
    </section>              
  `;

  const commentLi = [];
  result.forEach((comment) => {
    const parsedTime = getTime(comment.createdAt);

    const { year, month, date } = parsedTime;

    const time = `${year}년 ${month}월 ${date}일`;

    let commentLiTemplate = `
        <li class="comment__item">
            <article class="comment__wrap">
                <div class="comment__box">
                  <div class="comment__author">${comment.author.nickname}</div>
                  <div class="comment__content">${comment.content}</div>
                  <div class="comment__info">
                      <span class="comment__data">${time}</span>
                      <a href="#" class="comment__link hidden" data-comment-id="${comment._id}">답글쓰기</a>
                  </div>
                </div>
                <div class="comment__reply-list">
                    <!-- 대댓글 -->
                    <ul class="reply-list__container">
                        {{__reply-comments__}}
                    </ul>
                </div>
                <div class="comment__tool hidden" data-comment-author-id="${comment.author._id}">
                    <i class="fas fa-ellipsis-v tool"></i>
                    <div class="tool__box hidden">
                      <ul class="tool__list">
                        <li class="tool__item">
                          <a href="#" class="tool__update" data-comment-id="${comment._id}">수정</a>
                        </li>
                        <li class="tool__item tool__delete" data-comment-id="${comment._id}">삭제
                         <!-- <a href="#" class="tool__delete" data-comment-id="${comment._id}">삭제</a> -->
                        </li>
                      </ul>
                    </div>
                </div>
            </article>
        </li>
    `;

    const reCommentLi = [];
    if (comment.reComments.length > 0) {
      comment.reComments.forEach((reComment) => {
        const reParsedTime = getTime(reComment.createdAt);

        const { year: y, month: m, date: d } = reParsedTime;
        const reCommentTime = `${y}년 ${m}월 ${d}일`;
        reCommentLi.push(`
            <li class="reComment__item">
              <article class="comment__wrap">
                  <div class="comment__box">
                    <div class="comment__author">${reComment.author.nickname}</div>
                    <div class="comment__content">${reComment.content}</div>
                    <div class="comment__info">
                        <span class="comment__data">${reCommentTime}</span>
                        <!-- <a href="#" class="comment__link hidden" data-comment-id="${reComment._id}">답글쓰기</a> -->
                    </div>
                  </div>
                  <div class="comment__tool hidden" data-comment-author-id="${reComment.author._id}">
                      <i class="fas fa-ellipsis-v tool"></i>
                      <div class="tool__box hidden">
                        <ul class="tool__list">
                          <li class="tool__item">
                            <a href="#" class="tool__recomment-update">수정</a>
                          </li>
                          <li class="tool__item tool__delete">삭제
                            <!-- <a href="#" class="tool__recomment-delete">삭제</a> -->
                          </li>
                        </ul>
                      </div>
                  </div>
              </article>
            </li>
          `);
      });
      commentLiTemplate = commentLiTemplate.replace(
        ' {{__reply-comments__}}',
        reCommentLi.join(''),
      );
    } else {
      commentLiTemplate = commentLiTemplate.replace(
        ' {{__reply-comments__}}',
        '',
      );
    }

    commentLi.push(commentLiTemplate);
  });
  commentTemplate = commentTemplate.replace(
    '{{__comments-list__}}',
    commentLi.join(''),
  );

  commentSection.innerHTML = commentTemplate;
  document.querySelector('.mypet-datail__content').appendChild(commentSection);
};

export { comments };
