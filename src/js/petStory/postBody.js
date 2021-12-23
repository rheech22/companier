const postBody = (result) => {
  console.log(result);
  const time = `${result.createdAt.split("-")[0]}년 ${
    result.createdAt.split("-")[1]
  }월 ${result.createdAt.split("-")[2].substr(0, 2)}일`;

  const postHeader = document.createElement("header");
  const postSection = document.createElement("section");

  postHeader.classList.add("mypet-datail__header");
  postSection.classList.add("mypet-datail__body");
  let postHeaderTemplate = `
        <div class="mypet-datail__title">
            <h1>${result.title}</h1>
        </div>
        <div class="mypet-datail__profile">
            <div class="profile__info">
                <span>작성자: <span>${result.author.nickname}</span></span>
                <span>${time}</span>
            </div>
            <div>
                <span>조회수 : <span>${result.views}</span></span>
            </div>
        </div>
    `;

  let postSectionTemplate = `${result.content}`;

  postHeader.innerHTML = postHeaderTemplate;
  postSection.innerHTML = postSectionTemplate;

  document.querySelector(".mypet-datail__content").appendChild(postHeader);
  document.querySelector(".mypet-datail__content").appendChild(postSection);
};

export { postBody };
