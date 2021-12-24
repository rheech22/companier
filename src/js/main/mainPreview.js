const createLostPetPreview = (item) => {
  const { desertionNo, popfile, kindCd, sexCd } = item;

  const lostPetPreviewTemplate = `
        <div class="board__content">
          <a href="/lostPets/${desertionNo}">
            <img
                class="board__img"
                src="${popfile}"
                alt=""
            />
            <h4 class="content__title">${kindCd} / ${sexCd}</h4>
          </a>
        </div>
  `;

  return lostPetPreviewTemplate;
};

const paintLostPetPreview = (lostPetList) => {
  const lostPetItems = lostPetList.map(createLostPetPreview);
  const lostBoardContent = document.querySelector(
    ".board__save .board__contentsBox"
  );
  lostBoardContent.innerHTML = lostPetItems.join("");
};

export { paintLostPetPreview };
