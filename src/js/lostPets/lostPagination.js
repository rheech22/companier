import { getLostPets, searchParams } from "./getLostPets.js";
import { paintLostPets } from "./lostPets.js";

const setPagination = (totalCount, perPage) => {
  let firstPage = 1;
  let selectedPage = firstPage;
  let lastPage = Math.ceil(totalCount / perPage);
  const pageContainer = document.querySelector(".lost .pagination");

  // 페이지 버튼 생성
  const createPageBtns = (container, firstPage) => {
    container.innerHTML = "";
    let pageBtns = `<div class="prev-btn page-btn"><</div>`;
    for (let i = firstPage; i < firstPage + perPage; i++) {
      if (i > lastPage) break;
      if (i === selectedPage) {
        pageBtns += `<div class="page-btn active">${i}</div>`;
      } else {
        pageBtns += `<div class="page-btn">${i}</div>`;
      }
    }
    pageBtns += `<div class="next-btn page-btn">></div>`;
    pageContainer.innerHTML += pageBtns;
  };

  createPageBtns(pageContainer, firstPage);

  // 페이지 보여주기
  const showPageResult = async (page) => {
    let [lostPetList, totalCount] = await getLostPets({
      ...searchParams,
      pageNo: page,
    });
    paintLostPets(lostPetList);
  };

  // 버튼에 이벤트 리스너 등록
  pageContainer.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.innerText === "<") {
      if (firstPage > 1) {
        firstPage -= perPage;
        selectedPage = firstPage;
        createPageBtns(pageContainer, selectedPage);
        showPageResult(selectedPage);
      }
    } else if (e.target.innerText === ">") {
      if (firstPage <= lastPage - perPage) {
        firstPage += perPage;
        selectedPage = firstPage;
        createPageBtns(pageContainer, selectedPage);
        showPageResult(selectedPage);
      }
    } else {
      const activeBtn = document.querySelector(".pagination .active");
      activeBtn.classList.remove("active");
      selectedPage = Number(e.target.innerText);
      e.target.classList.add("active");
      showPageResult(selectedPage);
    }
  });
};

export { setPagination };

// const setOnclickEvent = () => {
//   const pageBtns = document.querySelectorAll(".lost .page-btn");
//   const prevBtn = document.querySelector(".lost .prev-btn");
//   const nextBtn = document.querySelector(".lost .next-btn");

//   pageBtns.forEach((pageBtn) => {
//     pageBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       if (e.target.innerText !== currentPage) {
//         const activeBtn = document.querySelector(".pagination .active");
//         activeBtn.classList.remove("active");
//         currentPage = e.target.innerText;
//         e.target.classList.add("active");
//       }
//       showPageResult(currentPage);
//     });
//   });

//   nextBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     firstPage += 10;
//     createPageBtns(firstPage);
//     showPageResult(firstPage);
//   });

//   prevBtn.addEventListener("click", (e) => {
//     if (firstPage > 1) {
//       e.preventDefault();
//       firstPage -= 10;
//       createPageBtns(firstPage);
//       showPageResult(firstPage);
//     }
//   });
// };

// createPageBtns(firstPage);
// setOnclickEvent();

// Ver. 2
// const renderPagination = async (totalCount, perPage, pageCut, currentPage) => {
//   if (totalCount <= perPage) return;

//   let totalPage = Math.ceil(totalCount / perPage);
//   let pageGroup = Math.ceil(currentPage / pageCut);

//   let last = pageGroup * pageCut;
//   if (last > totalPage) last = totalPage;
//   let first = last - (pageCut - 1) <= 0 ? 1 : last - (pageCut - 1);
//   let next = last + 1;
//   let prev = first - 1;

//   const pageContainer = document.querySelector(".pagination");
//   if (prev > 0) {
//     pageContainer.innerHTML = `
//       <li class="all-prev"><<</li>
//       <li class="prev"><</li>
//       `;
//   }
//   for (let i = first; i <= last; i++) {
//     pageContainer.innerHTML += `<li class="page-btn" id="page-${i}" data-num="${i}">${i}</li>`;
//   }
//   if (last < totalPage) {
//     pageContainer.innerHTML += `
//     <li class="next">></li>
//     <li class="all-next">>></li>
//     `;
//   }

//   const pageList = document.querySelector(".pagination li");
//   pageList.classList.remove("active");
//   const activePage = document.querySelector(
//     `.pagination li#page-${currentPage}`
//   );
//   activePage.classList.add("active");

//   pageList.addEventListener("click", (e) => {
//     e.preventDefault();
//     let id = e.target.id;
//     let selectedPage = e.target.innerText;
//     console.log(id);
//     console.log(selectedPage);

//     if (id == "next") selectedPage = next;
//     if (id == "prev") selectedPage = prev;
//     if (id == "allprev") selectedPage = 1;
//     if (id == "allnext") selectedPage = totalPage;

//     renderPagination(totalCount, perPage, pageCut, selectedPage);
//     showPageResult(selectedPage);
//   });
// };

// const showPageResult = async (selectedPage) => {
//   let [lostPetList, totalCount] = await getLostPets({
//     ...searchParams,
//     pageNo: selectedPage,
//   });
//   paintLostPets(lostPetList);
// };

// export { renderPagination };

// Ver. 1
// function lostPagination(totalPages, lostPetList) {
//   const ul = document.querySelector(".pagination > ul");
//   paintLostPets(lostPetList);
//   element(totalPages, 1);

//   function element(totalPages, page) {
//     let li = "";
//     let activeLi;
//     let beforePages = page > 1 ? page - 2 : page;
//     let afterPages = page + 2;
//     if (page > 1) {
//       li += `<li class="prev"><span><</span></li>`;
//     }

//     if (page > 3) {
//       li += `<li class="numb"><span>1</span></li>`;
//       if (page > 4) {
//         li += `<li class="dots"><span>...</span></li>`;
//       }
//     }

//     for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
//       if (pageLength > totalPages) continue;
//       if (pageLength === 0) pageLength = pageLength + 1;
//       if (page === pageLength) {
//         activeLi = "active";
//       } else {
//         activeLi = "";
//       }
//       li += `<li class="numb ${activeLi}"><span>${pageLength}</span></li>`;
//     }

//     if (page < totalPages - 2) {
//       if (page < totalPages - 3) {
//         li += `<li class="dots"><span>...</span></li>`;
//       }
//       li += `<li class="numb"><span>${totalPages}</span></li>`;
//     }

//     if (page < totalPages) {
//       li += `<li class="next"><span>></span></li>`;
//     }

//     ul.innerHTML = li;
//     if (page > 1) {
//       const prev = document.querySelector(".prev");
//       prev.addEventListener("click", async () => {
//         if (page > 1) {
//           page--;
//           const [lostPetList, totalCount] = await getLostPets({
//             ...searchParams,
//             pageNo: page,
//           });
//           paintLostPets(lostPetList);
//           element(totalPages, page);
//         }
//       });
//     }
//     if (page < totalPages) {
//       const next = document.querySelector(".next");
//       next.addEventListener("click", async () => {
//         if (page < totalPages) {
//           page++;
//           const [lostPetList, totalCount] = await getLostPets({
//             ...searchParams,
//             pageNo: page,
//           });
//           paintLostPets(lostPetList);
//           element(totalPages, page);
//         }
//       });
//     }
//     const numb = document.querySelectorAll(".numb");
//     for (let i = 0; i < numb.length; i++) {
//       numb[i].addEventListener("click", async (e) => {
//         page = Number(e.target.innerText);
//         const [lostPetList, totalCount] = await getLostPets({
//           ...searchParams,
//           pageNo: page,
//         });
//         paintLostPets(lostPetList);
//         element(totalPages, page);
//       });
//     }
//   }
// }

// export { lostPagination };
