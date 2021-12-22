import { lostPetList, totalCount } from "./getLostPets.js";
import { paintLostPets } from "./lostPets.js";
import { paintLostPetDetail } from "./lostPetsDetail.js";

if (location.pathname === "/lostPets") {
  paintLostPets(lostPetList);
} else {
  paintLostPetDetail(lostPetList);
}
