// TODO: require is not defined 에러 해결
const convert = require("xml-js");
const request = require("request");

const HOST =
  "http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc";
const SERVICE_KEY = process.env.API_KEY;

const limit = 10;
let pageNo = 1;
let requestUrl = `${HOST}/abandonmentPublic?PageNo=${pageNo}&numOfRows=${limit}&ServiceKey=${SERVICE_KEY}`;

// API 호출하여 화면에 데이터 표시
request.get(requestUrl, (err, res, body) => {
  if (err) {
    console.log(`err => ${err}`);
  } else {
    if (res.statusCode == 200) {
      const animalArr = parseXmlData(body);
      const lostPetList = animalArr.map(createLostPetItem);
      const lostContent = document.querySelector(".lost-content");
      lostContent.innerHTML = lostPetList.join("");
    }
  }
});

// 데이터 가공하는 함수
function parseXmlData(body) {
  const options = {
    compact: true,
    spaces: 4,
    textFn: removeJsonTextAttribute,
  };

  function removeJsonTextAttribute(value, parentElement) {
    try {
      var keyNo = Object.keys(parentElement._parent).length;
      var keyName = Object.keys(parentElement._parent)[keyNo - 1];
      parentElement._parent[keyName] = value;
    } catch (e) {}
  }

  const result = body;
  const xmlToJson = convert.xml2json(result, options);
  const parsedData = JSON.parse(xmlToJson);
  const {
    response: {
      body: {
        items: { item },
      },
    },
  } = parsedData;

  return item;
}

// 템플릿에 데이터 주입하는 함수
function createLostPetItem(animal) {
  const {
    age,
    careAddr,
    careNm,
    careTel,
    chargeNm,
    colorCd,
    desertionNo,
    filename,
    happenDt,
    happenPlace,
    kindCd,
    neuterYn,
    noticeEdt,
    noticeNo,
    noticeSdt,
    officetel,
    orgNm,
    popfile,
    processState,
    sexCd,
    specialMark,
    weight,
  } = animal;

  const template = `
    <article class="lost-content__item">
      <a href="./lostPets/${desertionNo}">
        <img
          class="lost-content__img"
          src="${filename}"
        />
        <div class="lost-content__info">
          <div class="lost-content__kind-sex">
            <span>${kindCd} / ${sexCd}</span>
          </div>
          <div class="lost-content__age-weight">
            <span>${age} / ${weight}</span>
          </div>
          <div class="lost-content__date">
            <span>${happenDt}</span>
          </div>
          <div class="lost-content__place">
            <span>${happenPlace}</span>
          </div>
          <div class="lost-content__special">
            <span>${specialMark}</span>
          </div>
          <div class="lost-content__state"><span>${processState}</span></div>
        </div>
      </a>
    </article>
`;

  return template;
}
