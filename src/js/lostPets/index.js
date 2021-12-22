import { lostPetList, totalCount } from "./getLostPets.js";
import { paintLostPets } from "./lostPets.js";
import { paintLostPetDetail } from "./lostPetsDetail.js";
import { createBackBtn } from "./backBtn.js";

if (location.pathname === "/lostPets") {
  paintLostPets(lostPetList);
  // 페이지네이션 추가
} else {
  paintLostPetDetail(lostPetList);
  createBackBtn();
}
