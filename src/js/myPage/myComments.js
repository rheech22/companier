import { pagination } from "../component/pagination.js";

const myComments = (user) => {
	const data = user.comments;
	const displayTag = document.querySelector(".myComments__list");
	const pagesTag = document.querySelector(".myComment__pages ul");
	const elementName = "article";
	const elementClass = "content";
	const rows = 5;
	const makeHTML = (data) => {
		const { parentPost, content, timestamps } = data;
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
		btn.addEventListener("click", function (e) {
			e.preventDefault();
			const ele = this.parentElement.parentElement.parentElement;
			if (confirm("댓글을 지우시겠어요?")) {
				displayTag.removeChild(ele);
			}
		});
	});
};

export { myComments };
