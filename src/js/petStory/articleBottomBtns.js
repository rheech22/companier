const articleBottomBtns = (result) => {
  const articleBottomBtnsSection = document.createElement("section");
  articleBottomBtnsSection.classList.add("detail-bottom__button");

  let articleBottomBtnTemplate = `
    <div class="detail-bottom__left hidden" data-author-id="${result.author._id}">
        <a class="detail-bottom__update" href="/myPetBoard/writePage/${result._id}">수정</a>
        <button type="button" class="detail-bottom__delete" data-post-id="${result._id}">삭제</button>
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
