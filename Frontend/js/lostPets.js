function renderLostPetContent() {
  const lostContent = document.querySelector(".lost-content");
  for (let i = 0; i < 10; i++) {
    const content = `
      <div class="lost-content__item">
        <img
          class="lost-content__img"
          src="https://img.animalplanet.co.kr/news/2021/03/24/700/9919ots6h81rwz2u6609.jpg"
        />
        <div class="lost-content__info">
          <div class="lost-content__kind-sex">
            <span>[개] 믹스견 / 여</span>
          </div>
          <div class="lost-content__age-weight">
            <span>2020(년생) (살) / 4.5(Kg)</span>
          </div>
          <div class="lost-content__date">
            <span>2021년 12월 16일</span>
          </div>
          <div class="lost-content__place">
            <span>경상남도 남해군</span>
          </div>
          <div class="lost-content__special">
            <span>경계심이 있음. 온순함</span>
          </div>
          <div class="lost-content__state"><span>보호중</span></div>
        </div>
      </div>
  `;
    lostContent.innerHTML += content;
  }
}

renderLostPetContent();
