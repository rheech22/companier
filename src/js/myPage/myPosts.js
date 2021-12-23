import { pagination } from "../component/pagination.js";

const myPosts = (user) => {
	const displayTag = document.querySelector(".main-content__section");
	const pagesTag = document.querySelector(".main__container > .pagination");
	const data = user.posts;
	const elementName = "article";
	const elementClass = "main-content__article";
	const rows = 8;
	const makeHTML = (obj) => {
		const { title, author, views } = obj;
		return `<a href="./myPage.html">
              <div class="main-content__wrap">
                <div class="main-content__img">
                  <img src="https://via.placeholder.com/200x250/B2B2B2/FFFFFF/?text=NO%20Image" alt="">
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
            `;
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
};

export { myPosts };
