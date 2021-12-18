const makeComments = () => {
	const mainContent = document.querySelector(".comments__list");
	const pages = document.querySelector(".pagination");

	// 가짜 데이터
	const user = {
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

	// 페이지 화면 보여주는 기능
	let currentPage = 1;
	let rows = 5;

	function makeHTML(postLink, comment, author, postTitle) {
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
	}

	function displayList(items, wrapper, rows_per_page, page) {
		wrapper.innerHTML = "";
		page--;

		let start = rows_per_page * page;
		let end = start + rows_per_page;
		let paginatedItems = items.slice(start, end);
		paginatedItems.map((obj) => {
			let element = document.createElement("div");
			element.classList.add("contentsContainer");
			element.innerHTML = makeHTML(
				obj.postLink,
				obj.content,
				obj.author,
				obj.postTitle
			);
			wrapper.appendChild(element);
		});
	}

	displayList(user.comments, mainContent, rows, currentPage);

	// 컨텐츠 수에 맞는 버튼들을 만드는 함수

	function setupPagination(items, wrapper, rows_per_page) {
		wrapper.innerHTML = "";
		let page_count = Math.ceil(items.length / rows_per_page);
		for (let i = 1; i <= page_count; i++) {
			let btn = paginationButton(i, items);
			wrapper.appendChild(btn);
		}
	}

	// 버튼을 만드는 함수

	function paginationButton(page, items) {
		let button = document.createElement("button");
		button.classList.add("btn");
		button.innerText = page;
		if (currentPage === page) button.classList.add("active");

		button.addEventListener("click", function () {
			console.log("asdasd");
			currentPage = page;
			displayList(user.comments, mainContent, rows, currentPage);

			let current_btn = document.querySelector(".pagination button.active");
			current_btn.classList.remove("active");

			button.classList.add("active");
		});
		return button;
	}
	setupPagination(user.comments, pages, rows);
};

makeComments();

const deleteBtn = document.getElementById("deleteComment");
deleteBtn.addEventListener("click", (e) => {
	alert("지우시겠습니까?");
});
