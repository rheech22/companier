let count = 0;

const getLostPetData = async (lastDay, today) => {
  let dogCount = 0;
  let catCount = 0;
  let otherCount = 0;

  // 1. ?​bgnde=${lastWeek}&endde=${today}&state=protect로 요청해서 다시 작성
  // 2. 응답 -> total count, kind 가져와서 count증가 시키고 뿌려주기
  await fetch("/api/lost-pets/?pageNo=1&limit=100", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const dataArr = data.items.item;
      for (let key in dataArr) {
        const animal = dataArr[key];

        if (animal.processState === "보호중") {
          if (animal.kindCd.includes("[개]")) {
            dogCount++;
          } else if (animal.kindCd.includes("[고양이]")) {
            catCount++;
          } else {
            otherCount++;
          }
          count++;
        }
      }
    });
  console.log(dogCount, catCount, otherCount);
};

// 오늘 날짜와 일주일 전 날짜를 비교하는 함수
const countLastPets = async () => {
  const date = new Date();

  const lastWeek = new Date(date.setDate(date.getDate() - 7))
    .toLocaleDateString()
    .replace(/\./gi, "")
    .replace(/\ /gi, "");
  const today = new Date()
    .toLocaleDateString()
    .replace(/\./gi, "")
    .replace(/\ /gi, "");

  await getLostPetData(Number(lastWeek), Number(today));
};
countLastPets();
