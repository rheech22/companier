// import "../style/index.css";
// import "../style/reset.css";
import { getLostPets, searchParams } from "../lostPets/getLostPets.js";
import { paintLostPetPreview } from "./mainPreview.js";

const SHOWING__CLASS = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");
function slide() {
  const currentSilde = document.querySelector(`.${SHOWING__CLASS}`);
  if (currentSilde) {
    currentSilde.classList.remove(SHOWING__CLASS);
    const nextSlide = currentSilde.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING__CLASS);
    } else {
      firstSlide.classList.add(SHOWING__CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING__CLASS);
  }
}

slide();
setInterval(slide, 2000);

let [lostPetList, totalCount] = await getLostPets({
  ...searchParams,
  numOfRows: 6,
});
paintLostPetPreview(lostPetList);
