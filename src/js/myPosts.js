const makeMyPosts = () => {
  const mainContent = document.querySelector(".main-content__section");

  const makeHTML = (title, author, views) => {
    return `<article class="main-content__article">
                <a href="./myPage.html">
                    <div class="main-content__wrap">
                        <div class="main-content__img">
                            <img src="https://via.placeholder.com/200x250/B2B2B2/FFFFFF/?text=NO%20Image"
                                alt="">
                        </div>
                        <div class="main-content__info">
                            <p class="main-content__title">${title}</p>
                            <span class="main-content__author">${author}</span>
                            <div class="main-content__cnt">
                                <span>조회수</span>
                                <span>${views}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </article>
  `;
  };

  const user = {
    posts: [
      {
        title: "제목입니다1",
        author: "작성자",
        content: "내용입니다2",
        views: "1323",
      },
      {
        title: "제목입니다1",
        author: "작성자",
        content: "내용입니다2",
        views: "1323",
      },
      {
        title: "제목입니다1",
        author: "작성자",
        content: "내용입니다2",
        views: "1323",
      },
      {
        title: "제목입니다1",
        author: "작성자",
        content: "내용입니다2",
        views: "1323",
      },
    ],
    comments: [
      { content: "내용입니다.", author: "작성자", views: "123" },
      { content: "내용입니다.", author: "작성자", views: "123" },
      { content: "내용입니다.", author: "작성자", views: "123" },
      { content: "내용입니다.", author: "작성자", views: "123" },
      { content: "내용입니다.", author: "작성자", views: "123" },
      { content: "내용입니다.", author: "작성자", views: "123" },
      { content: "내용입니다.", author: "작성자", views: "123" },
      { content: "내용입니다.", author: "작성자", views: "123" },
    ],
  };

  mainContent.innerHTML = user.posts
    .map((post) => {
      return makeHTML(post.title, post.author, post.views);
    })
    .join("");
};

makeMyPosts();
