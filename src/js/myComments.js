// 내 댓글 조회하기

function makeComments() {
	// 각 컨텐츠 칸을 이루는 HTML 구조

	const data = user.comments;
	const displayTag = document.querySelector(".myComments__list");
	const pagesTag = document.querySelector("#myComments > .pagination");
	const elementName = "article";
	const elementClass = "content";
	const rows = 5;
	const makeHTML = (obj) => {
		const { parentPost, content, timestamps } = obj;
		return `<form class = "content__info">
              <a href=${parentPost} class="content__info__link">
                <p class="content__info__comment">${content}</p>
				<p class="content__info__post">${timestamps}</p>
              </a>
              <div class="deleteBox">
                <button class="btn">삭제</button>
              </div>
            </form>
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
	const deleteBtns = document.querySelectorAll(".deleteBox > .btn");
	deleteBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			// console.log(e.path[2]);
			console.log(e);
		});
	});
}

makeComments();
