import { getLostPets, searchParams } from "./getLostPets.js";
import { paintLostPets } from "./lostPets.js";
import { paintSearchForm, setSigunguOptions } from "./searchForm.js";
// import { lostPagination } from "./lostPagination.js";

// 번들 만들 시 lostpetsMain페이지의 사실상 index.js의 역할
let [lostPetList, totalCount] = await getLostPets(searchParams);

if (location.pathname === "/lostPets") {
  paintSearchForm();
  paintLostPets(lostPetList);
  // lostPagination(500, lostPetList);

  const sidoSelect = document.querySelector("#sido");
  sidoSelect.addEventListener("change", (e) => {
    setSigunguOptions(e.target.value);
  });

  const showSearchResult = async () => {
    searchParams.upr_cd = document.querySelector("#sido").value;
    searchParams.org_cd = document.querySelector("#sigungu").value;
    searchParams.upkind = document.querySelector("#upkind").value;
    searchParams.state = document.querySelector("#state").value;
    searchParams.bgnde = document.querySelector("#beginDate").value;
    searchParams.endde = document.querySelector("#endDate").value;
    let [lostPetList, totalCount] = await getLostPets(searchParams);
    paintLostPets(lostPetList);
  };

  const searchBtn = document.querySelector(".lost-search .search-btn");
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSearchResult();
  });
}
export { lostPetList };
