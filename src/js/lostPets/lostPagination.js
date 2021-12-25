import { getLostPets } from "./getLostPets.js";
import { paintLostPets } from "./lostPets.js";

function lostPagination(totalPages, lostPetList) {
  const ul = document.querySelector(".pagination > ul");
  paintLostPets(lostPetList);
  element(totalPages, 1);

  function element(totalPages, page) {
    let li = "";
    let activeLi;
    let beforePages = page > 1 ? page - 2 : page;
    let afterPages = page + 2;
    if (page > 1) {
      li += `<li class="prev"><span><</span></li>`;
    }

    if (page > 3) {
      li += `<li class="numb"><span>1</span></li>`;
      if (page > 4) {
        li += `<li class="dots"><span>...</span></li>`;
      }
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
      if (pageLength > totalPages) continue;
      if (pageLength === 0) pageLength = pageLength + 1;
      if (page === pageLength) {
        activeLi = "active";
      } else {
        activeLi = "";
      }
      li += `<li class="numb ${activeLi}"><span>${pageLength}</span></li>`;
    }

    if (page < totalPages - 2) {
      if (page < totalPages - 3) {
        li += `<li class="dots"><span>...</span></li>`;
      }
      li += `<li class="numb"><span>${totalPages}</span></li>`;
    }

    if (page < totalPages) {
      li += `<li class="next"><span>></span></li>`;
    }

    ul.innerHTML = li;
    if (page > 1) {
      const prev = document.querySelector(".prev");
      prev.addEventListener("click", async () => {
        if (page > 1) {
          page--;
          const [lostPetList, totalCount] = await getLostPets(page, 10);
          paintLostPets(lostPetList);
          element(totalPages, page);
        }
      });
    }
    if (page < totalPages) {
      const next = document.querySelector(".next");
      next.addEventListener("click", async () => {
        if (page < totalPages) {
          page++;
          const [lostPetList, totalCount] = await getLostPets(page, 10);
          paintLostPets(lostPetList);
          element(totalPages, page);
        }
      });
    }
    const numb = document.querySelectorAll(".numb");
    for (let i = 0; i < numb.length; i++) {
      numb[i].addEventListener("click", async (e) => {
        page = Number(e.target.innerText);
        const [lostPetList, totalCount] = await getLostPets(page, 10);
        paintLostPets(lostPetList);
        element(totalPages, page);
      });
    }
  }
}

export { lostPagination };
