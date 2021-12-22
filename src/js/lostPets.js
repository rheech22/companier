import { getLostPets } from "./getLostPets.js";

const lostPetData = await getLostPets(1);
const { totalCount } = lostPetData; // pagination을 위한 전체 데이터 수
const {
  items: { item: lostPetList },
} = lostPetData;

const createLostPetItem = (item) => {
  const {
    age,
    desertionNo,
    happenDt,
    happenPlace,
    kindCd,
    popfile,
    processState,
    sexCd,
    specialMark,
    weight,
  } = item;

  const lostPetTemplate = `
    <article class="lost-content__item">
      <a href="./lostPets/${desertionNo}">
        <div class="lost-content__img-container">
          <img
            class="lost-content__img"
            src="${popfile}"
          />
        </div>
        <div class="lost-content__info">
          <div class="lost-content__kind-sex">
            <span>${kindCd} / ${sexCd}</span>
          </div>
          <div class="lost-content__age-weight">
            <span>${age} / ${weight}</span>
          </div>
          <div class="lost-content__date">
            <span>${happenDt}</span>
          </div>
          <div class="lost-content__place">
            <span>${happenPlace}</span>
          </div>
          <div class="lost-content__special">
            <span>${specialMark}</span>
          </div>
          <div class="lost-content__state"><span>${processState}</span></div>
        </div>
      </a>
    </article>
`;

  return lostPetTemplate;
};

const paintLostPets = async () => {
  const lostContent = document.querySelector(".lost-content");
  const lostPetItems = lostPetList.map(createLostPetItem);
  lostContent.innerHTML = lostPetItems.join("");
};

paintLostPets();
