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
	let currentPage = 31;
	const totalPage = Math.ceil(data.length / rows);
	let pageGroup = Math.ceil(currentPage / 10);
	let last = pageGroup * 10;
	let first = last <= 9 ? 1 : last - 9;
	last = last > totalPage ? totalPage : last;
	const prev = document.querySelector(".prev");
	const next = document.querySelector(".next");

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

	// 요청된 페이지 생성

	function setupPagination(start, end, wrapper) {
		wrapper.innerHTML = "";
		for (let i = start; i <= end; i++) {
			const btn = paginationButton(i);
			wrapper.appendChild(btn);
		}
	}

	// 버튼 생성

	function paginationButton(page) {
		const li = document.createElement("li");
		li.classList.add("btn");
		li.innerHTML = `<a href="#">${page}</a>`;

		if (currentPage === page) li.classList.add("active");
		li.addEventListener("click", function (e) {
			e.preventDefault();
			currentPage = page;
			displayList(data, displayTag, rows, currentPage);
			const current_btn = document.querySelector(".pagination li.active");
			current_btn.classList.remove("active");
			li.classList.add("active");
		});
		return li;
	}

	prev.addEventListener("click", () => {
		first = first > 10 ? first - 10 : first;
		currentPage = first;
		last = last < 11 ? 10 : last === totalPage ? first + 9 : last - 10;
		displayList(data, displayTag, rows, currentPage);
		setupPagination(first, last, pageTag);
	});

	next.addEventListener("click", () => {
		last = last + 10 > totalPage ? totalPage : last + 10;
		first = first + 10 > totalPage ? first : first + 10;
		currentPage = first;
		displayList(data, displayTag, rows, currentPage);
		setupPagination(first, last, pageTag);
	});

	displayList(data, displayTag, rows, currentPage);
	setupPagination(first, last, pageTag);
};
