import { getLostPets } from "./getLostPets.js";
import { paintLostPets } from "./lostPets.js";
import { paintSearchForm } from "./searchForm.js";
// 번들 만들 시 lostpetsMain페이지의 사실상 index.js의 역할
let pageNo = 1;
let limit = 10;
const [lostPetList, totalCount] = await getLostPets(pageNo, limit);

if (location.pathname === "/lostPets") {
  paintSearchForm();
  paintLostPets(lostPetList);
  // TODO: 페이지네이션 추가
}

export { lostPetList };
