import { lostPetList } from "./lostMainPage.js";
import { paintLostPetDetail } from "./lostPetsDetail.js";
import { createBackBtn } from "./backBtn.js";
// 번들 만들 시 lostpetsdetail페이지의 사실상 index.js의 역할
paintLostPetDetail(lostPetList);
createBackBtn();
