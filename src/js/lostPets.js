// import { lostPetList } from './lostPetsApi';

// 유기동물 목록 HTML을 생성하는 함수
// const createLostPetItem = (item) => {
//   const {
//     age,
//     desertionNo,
//     happenDt,
//     happenPlace,
//     kindCd,
//     popfile,
//     processState,
//     sexCd,
//     specialMark,
//     weight,
//   } = item;

//   const lostPetTemplate = `
//     <article class="lost-content__item">
//       <a href="./lostPets/${desertionNo}">
//         <div class="lost-content__img-container">
//           <img
//             class="lost-content__img"
//             src="${popfile}"
//           />
//         </div>
//         <div class="lost-content__info">
//           <div class="lost-content__kind-sex">
//             <span>${kindCd} / ${sexCd}</span>
//           </div>
//           <div class="lost-content__age-weight">
//             <span>${age} / ${weight}</span>
//           </div>
//           <div class="lost-content__date">
//             <span>${happenDt}</span>
//           </div>
//           <div class="lost-content__place">
//             <span>${happenPlace}</span>
//           </div>
//           <div class="lost-content__special">
//             <span>${specialMark}</span>
//           </div>
//           <div class="lost-content__state"><span>${processState}</span></div>
//         </div>
//       </a>
//     </article>
// `;

//   return lostPetTemplate;
// };

// 데이터를 받아와서 화면에 뿌려주는 함수
// const paintLostPets = async () => {
// const lostContent = document.querySelector('.lost-content');
// const lostPetItems = lostPetList.map(createLostPetItem);
// lostContent.innerHTML = lostPetItems.join('');
// };

// paintLostPets();

// 우선 함수 파라미터 기본값 설정해놓고 받는 식으로 작성했는데 편하신 대로 바꾸시면 됩니다!
const getLostPets = async (pageNo = 1, limit = 10) => {
  try {
    // 아래와 같이 쿼리를 넘겨주시면 됩니다
    const response = await fetch(`/api/lost-pets/?pageNo=${pageNo}&limit=${limit}`);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const lostPetList = await getLostPets(5);

console.log(lostPetList);
