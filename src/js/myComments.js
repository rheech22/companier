// 페이지네이션
// 매개변수 : 처리할 JSON data, 화면 Tag, pagination 태그, 처리할 열 갯수, HTML 서식, 내부에 만들 엘리먼트, 엘리먼트에 추가할 class

function pagination(
  data,
  displayTag,
  pageTag,
  rows,
  makeHTML,
  elementName,
  className
) {
  let currentPage = 1;

  // 요청하는 페이지의 컨텐츠를 화면에 표시

  function displayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    paginatedItems.map((obj) => {
      let element = document.createElement(elementName);
      element.classList.add(className);
      // 원하는 키값을 적기.
      const { postLink, content, author, postTitle } = obj;
      element.innerHTML = makeHTML(postLink, content, author, postTitle);
      wrapper.appendChild(element);
    });
  }

  displayList(data, displayTag, rows, currentPage);

  // 컨텐츠 수에 맞는 버튼 수를 계산하고 요청

  function setupPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = "";
    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i <= page_count; i++) {
      let btn = paginationButton(i, items);
      wrapper.appendChild(btn);
    }
  }

  setupPagination(data, pageTag, rows);

  // 버튼 생성

  function paginationButton(page, items) {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = page;
    if (currentPage === page) button.classList.add("active");
    button.addEventListener("click", function () {
      currentPage = page;
      displayList(data, displayTag, rows, currentPage);

      let current_btn = document.querySelector(".pagination button.active");
      current_btn.classList.remove("active");

      button.classList.add("active");
    });
    return button;
  }
}

// 내 댓글 조회하기

function makeComments() {
  // 가짜 데이터

  const user = {
    comments: [
      {
        content:
          "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.",
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

  // 각 컨텐츠 칸을 이루는 HTML 구조

  const rows = 5;
  const elementName = "article";
  const elementClass = "content";
  const data = user.comments;
  const mainContent = document.querySelector(".myComments__list");
  const pages = document.querySelector("#myComments .pagination");

  function makeHTML(postLink, comment, author, postTitle) {
    return `<div class = "content__info">
              <a href=${postLink} class="content__info__link">
                <p class="content__info__comment">${comment}</p>
                <p class="content__info__date">${author}</p>
                <p class="content__info__post">${postTitle}</p>
              </a>
              <div class="deleteBox">
                <button id = "deleteBox__btn" class="btn">삭제</button>
              </div>
            </div>
            <div class="content__seperator">
              <div class="content__seperator__line">
            </div>`;
  }

  pagination(
    data,
    mainContent,
    pages,
    rows,
    makeHTML,
    elementName,
    elementClass
  );

  const deleteBtn = document.getElementById("deleteBox__btn");
  deleteBtn.addEventListener("click", (e) => {
    alert("지우시겠습니까?");
  });
}

makeComments();
