const mainTag = () => {
	const main = document.querySelector("#myComments");

	let mainTemplate = `
  <section class="myComments__list"></section>
  <div class="myComment__pages">
    <ul class="pagination"></ul>
  </div>
    `;

	main.innerHTML = mainTemplate;
};

export { mainTag };
