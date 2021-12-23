const searchFormTemplate = `
  <div class="lost-search__box">
    <form
      id="lostSearchForm"
      method="get"
      action="./"
      accept-charset="utf-8"
      autocomplete="off"
    >
      <div class="lost-search__date">
        <span>날짜</span>
        <input type="date" id="beginDate" name="bgnde" />
        <span>~</span>
        <input type="date" id="endDate" name="endde" />
      </div>
      <div class="lost-search__place">
        <span>지역</span>
        <select id="sido" name="upr_cd"></select>
        <select id="sigungu" name="org_cd"></select>
        <select id="shelter" name="care_reg_no"></select>
      </div>
      <div class="lost-search__kind">
        <span>품종</span>
        <select id="upkind" name="up_kind_cd"></select>
        <select id="kind" name="kind_cd"></select>
        <div class="lost-search__state">
          <span>상태</span>
          <select id="state" name="state"></select>
        </div>
      </div>
      <div class="search-btn-container">
        <button class="btn search-btn"><a href="#">검색</a></button>
      </div>
    </form>
  </div>
`;

const searchOptions = {
  sido: "시/도",
  sigungu: "시/군/구",
  shelter: "보호소",
  upkind: "축종",
  kind: "품종",
  state: "상태",
};

const parentOptions = {
  sido: {
    서울특별시: "6110000",
    부산광역시: "6260000",
    대구광역시: "6270000",
    인천광역시: "6280000",
    광주광역시: "6290000",
    대전광역시: "6300000",
    울산광역시: "6310000",
    세종특별자치시: "5690000",
    경기도: "6410000",
    강원도: "6420000",
    충청북도: "6430000",
    충청남도: "6440000",
    전라북도: "6450000",
    전라남도: "6460000",
    경상북도: "6470000",
    경상남도: "6480000",
    제주특별자치도: "6500000",
  },
  upkind: {
    개: "417000",
    고양이: "422400",
    기타: "429900",
  },
  state: {
    공고중: "notice",
    보호중: "protect",
  },
};

const setInitialOption = () => {
  const selects = document.querySelectorAll(".lost-search select");
  selects.forEach((select) => {
    const { id } = select;
    const optionName = searchOptions[id];
    select.innerHTML = `
        <option value="" disabled selected hidden>${optionName} 선택</option>
        <option value="">전체</option>
        `;

    if (id in parentOptions) {
      createOptions(select, parentOptions[id]);
    }
  });
};

const createOptions = (select, options) => {
  for (const [key, value] of Object.entries(options)) {
    select.innerHTML += `<option value="${value}">${key}</option>`;
  }
};
// const sidoSelect = document.querySelector("#sido");
// const sigunguSelect = document.querySelector("#sigungu");
// const shelterSelect = document.querySelector("#shelter");
// const upkindSelect = document.querySelector("#upkind");
// const kindSelect = document.querySelector("#kind");
// const stateSelect = document.querySelector("#state");

const paintSearchForm = () => {
  document.querySelector(".lost-search").innerHTML = searchFormTemplate;
  setInitialOption();
};

export { paintSearchForm };
