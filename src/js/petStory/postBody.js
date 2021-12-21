const postBody = () => {
  const postHeader = document.createElement("header");
  const postSection = document.createElement("section");

  postHeader.classList.add("mypet-datail__header");
  postSection.classList.add("mypet-datail__body");
  let postHeaderTemplate = `
        <div class="mypet-datail__title">
            <h1>타이틀 들어가기</h1>
        </div>
        <div class="mypet-datail__profile">
            <div class="profile__info">
                <span>작성자: <span>작성자 들어가기</span></span>
                <span>작성시간 들어가기</span>
            </div>
            <div>
                <span>조회수 : <span>조회수 들어가기</span></span>
            </div>
        </div>
    `;

  let postSectionTemplate = `
        임시 내용
    `;

  postHeader.innerHTML = postHeaderTemplate;
  postSection.innerHTML = postSectionTemplate;

  document.querySelector(".mypet-datail__content").appendChild(postHeader);
  document.querySelector(".mypet-datail__content").appendChild(postSection);
};

export { postBody };
