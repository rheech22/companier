const createSearchForm = () => {
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

  return searchFormTemplate;
};

const searchOptions = {
  sido: "시/도",
  sigungu: "시/군/구",
  shelter: "보호소",
  upkind: "축종",
  kind: "품종",
  state: "상태",
};

const setInitialOption = () => {
  const selects = document.querySelectorAll(".lost-search select");
  selects.forEach((select) => {
    const optionName = searchOptions[select.id];
    select.innerHTML = `
        <option value="" disabled selected hidden>${optionName} 선택</option>
        <option value="">전체</option>
    `;
  });
};

// const sidoSelect = document.querySelector("#sido");
// const sigunguSelect = document.querySelector("#sigungu");
// const shelterSelect = document.querySelector("#shelter");
// const upkindSelect = document.querySelector("#upkind");
// const kindSelect = document.querySelector("#kind");
// const stateSelect = document.querySelector("#state");

const paintSearchForm = () => {
  const searchForm = createSearchForm();
  document.querySelector(".lost-search").innerHTML = searchForm;
  setInitialOption();
};

export { paintSearchForm };
