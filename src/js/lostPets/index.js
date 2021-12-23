import { getLostPets } from "./getLostPets.js";
import { paintLostPets } from "./lostPets.js";
import { paintLostPetDetail } from "./lostPetsDetail.js";
import { paintSearchForm } from "./searchForm.js";
import { createBackBtn } from "./backBtn.js";

let pageNo = 1;
let limit = 10;
const [lostPetList, totalCount] = await getLostPets(pageNo, limit);

if (location.pathname === "/lostPets") {
  paintSearchForm();
  paintLostPets(lostPetList);
  // TODO: 페이지네이션 추가
} else {
  paintLostPetDetail(lostPetList);
  createBackBtn();
}
