function myPage() {
	const tabList = document.querySelectorAll(".myPage__select .list li");
	const contents = document.querySelectorAll(".myPage__select__content");
	let activeContent = "";

	for (let i = 0; i < tabList.length; i++) {
		tabList[i]
			.querySelector(".myPage__select__category")
			.addEventListener("click", function (e) {
				e.preventDefault();
				for (let j = 0; j < tabList.length; j++) {
					tabList[j].classList.remove("is__on");
					contents[j].style.display = "none";
				}
				this.parentNode.classList.add("is__on");
				activeContent = this.getAttribute("href");
				document.querySelector(activeContent).style.display = "block";
			});
	}
}

export { myPage };
