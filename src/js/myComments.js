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

	const data = user.comments;
	const displayTag = document.querySelector(".myComments__list");
	const pagesTag = document.querySelector("#myComments .pagination");
	const elementName = "article";
	const elementClass = "content";
	const rows = 5;
	const makeHTML = (obj) => {
		const { postLink, content, author, postTitle } = obj;
		return `<div class = "content__info">
              <a href=${postLink} class="content__info__link">
                <p class="content__info__comment">${content}</p>
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
	};

	pagination(
		data,
		rows,
		displayTag,
		elementName,
		elementClass,
		makeHTML,
		pagesTag
	);

	const deleteBtn = document.getElementById("deleteBox__btn");
	deleteBtn.addEventListener("click", (e) => {
		alert("지우시겠습니까?");
	});
}

makeComments();
