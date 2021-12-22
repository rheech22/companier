const articleBottomBtns = () => {
  const articleBottomBtnsSection = document.createElement("section");
  articleBottomBtnsSection.classList.add("detail-bottom__button");

  let articleBottomBtnTemplate = `
    <div class="detail-bottom__left">
        <button type="button" class="detail-bottom__update">수정</button>
        <button type="button" class="detail-bottom__delete">삭제</button>
    </div>
    <div class="detail-bottom__right">
        <div class="detail-bottom__link">
            <a href="">목록으로</a>
        </div>
    </div>  
  `;

  articleBottomBtnsSection.innerHTML = articleBottomBtnTemplate;
  document
    .querySelector(".mypet-datail__content")
    .appendChild(articleBottomBtnsSection);
};

export { articleBottomBtns };
