const mainTag = () => {
	const main = document.querySelector("#myComments");

	let mainTemplate = `
  <section class="myComments__list"></section>
  <div class="myComment__pages">
    <div class="prev">이전 페이지</div>
    <ul class="pagination"></ul>
    <div class="next">다음 페이지</div>
  </div>
    `;

	main.innerHTML = mainTemplate;
};

export { mainTag };
