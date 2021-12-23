const articleBottomBtns = (result) => {
  const articleBottomBtnsSection = document.createElement("section");
  articleBottomBtnsSection.classList.add("detail-bottom__button");

  let articleBottomBtnTemplate = `
    <div class="detail-bottom__left">
        <button type="button" class="detail-bottom__update" id="${result._id}">수정</button>
        <button type="button" class="detail-bottom__delete" id="${result._id}">삭제</button>
    </div>
    <div class="detail-bottom__right">
        <div class="detail-bottom__link">
            <a href="#">목록으로</a>
        </div>
    </div>  
  `;

  articleBottomBtnsSection.innerHTML = articleBottomBtnTemplate;
  document
    .querySelector(".mypet-datail__content")
    .appendChild(articleBottomBtnsSection);
};

export { articleBottomBtns };
