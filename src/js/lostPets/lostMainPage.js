import { getLostPets, searchParams } from "./getLostPets.js";
import { paintLostPets } from "./lostPets.js";
import { paintSearchForm, setSigunguOptions } from "./searchForm.js";
// import { lostPagination } from "./lostPagination.js";

// 번들 만들 시 lostpetsMain페이지의 사실상 index.js의 역할
const [lostPetList, totalCount] = await getLostPets(searchParams);

if (location.pathname === "/lostPets") {
  paintSearchForm();
  paintLostPets(lostPetList);
  // lostPagination(500, lostPetList);

  const sidoSelect = document.querySelector("#sido");
  sidoSelect.addEventListener("change", (e) => {
    setSigunguOptions(e.target.value);
  });
}

export { lostPetList };
