// 받아올 데이터 구조
const result = {
  _id: "1",
  title: "게시글 상세 제목입니다.",
  content: "내용입니다.",
  author: "홍길동",
  time: "2021.12.17. 15:56",
  likes: 0,
  views: 0,
  comments: [],
};

// 게시글 제목, 본문
const makeDetail = () => {
  let postTemplate = `
    <header class="mypet-datail__header">
      <div class="mypet-datail__title">
          <h1>${result.title}</h1>
      </div>
      <div class="mypet-datail__profile">
          <div class="profile__info">
              <span>작성자: <span>${result.author}</span></span>
              <span>${result.time}</span>
          </div>
          <div>
              <span>조회수 : <span>${result.views}</span></span>
          </div>
      </div>
     </header>
    <section class="mypet-datail__body">${result.content}</section>
  `;

  return postTemplate;
};

// 본문 댓글
const makeComment = () => {
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
        <ul class="list-paginator">
            <li>
                <button type="button" class="list-paginator__pageBtn selected">1</button>
            </li>
            <li>
                <button type="button" class="list-paginator__pageBtn">2</button>
            </li>
        </ul>
        <form class="comment-feed__form">
            <div class="comment-feed__input">
                <div class="comment-feed__content">
                    <textarea class="comment-feed__textarea" placeholder="댓글을 입력하세요"></textarea>
                </div>
                <div class="comment-feed__submit">
                    <button class="comment-feed__button" type="submit">등록</button>
                </div>
            </div>
        </form>
    </section>              
  `;
  return commentTemplate;
};

// [반려 이야기] 게시글 상세 페이지 렌더링
const Paint = () => {
  let myPetDetailTemplate = `
  <article class="mypet-datail__container">
    <section class="mypet-datail__content">
        {{__content-title-body__}}

        <section class="datail-comment__container">
          {{__comments__}}
        </section>
    </section>
  </article>
  `;

  myPetDetailTemplate = myPetDetailTemplate.replace(
    "{{__content-title-body__}}",
    makeDetail()
  );

  myPetDetailTemplate = myPetDetailTemplate.replace(
    "{{__comments__}}",
    makeComment()
  );

  const wrap = document.querySelector("#warp");

  const main = document.createElement("main");
  main.innerHTML = myPetDetailTemplate;
  wrap.appendChild(main);
};

export { Paint };
