// 페이지네이션
// 매개변수 :
// 처리할 data, 처리할 열 갯수, 화면 적용할 Tag,
// Tag 내부의 element, element의 class, element.innerHTML, pagination할 Tag

const pagination = (
	data,
	rows,
	displayTag,
	elementName,
	className,
	makeHTML,
	pageTag
) => {
	let currentPage = 1;

	// 요청하는 페이지의 컨텐츠를 화면에 표시

	function displayList(items, wrapper, rows_per_page, page) {
		wrapper.innerHTML = "";
		page--;

		const start = rows_per_page * page;
		const end = start + rows_per_page;
		const paginatedItems = items.slice(start, end);

		paginatedItems.map((obj) => {
			const element = document.createElement(elementName);
			element.classList.add(className);
			element.innerHTML = makeHTML(obj);
			wrapper.appendChild(element);
		});
	}

	// 컨텐츠 수에 맞는 버튼 수를 계산하고 요청

	function setupPagination(items, wrapper, rows_per_page) {
		const page_count = Math.ceil(items.length / rows_per_page);
		for (let i = 1; i <= page_count; i++) {
			const btn = paginationButton(i);
			wrapper.appendChild(btn);
		}
	}

	// 버튼 생성

	function paginationButton(page) {
		const button = document.createElement("button");
		button.classList.add("btn");
		button.innerText = page;

		if (currentPage === page) button.classList.add("active");
		button.addEventListener("click", function () {
			currentPage = page;
			displayList(data, displayTag, rows, currentPage);
			const current_btn = document.querySelector(".pagination button.active");
			current_btn.classList.remove("active");
			button.classList.add("active");
		});
		return button;
	}

	displayList(data, displayTag, rows, currentPage);
	setupPagination(data, pageTag, rows);
};
