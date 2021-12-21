// API 요청 파라미터
const HOST =
  "http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc";
const SERVICE_KEY =
  "f%2FQNSysGNfjGPazrwAxOM2R3codDXXs%2BG2kMyeDHZXlKwvZJri12vRSfrhsoQ88zhBTiiQ0j0mK%2FwXOh%2BXAdcg%3D%3D";

const limit = 10;
let pageNo = 1;
let requestUrl = `${HOST}/abandonmentPublic?PageNo=${pageNo}&numOfRows=${limit}&ServiceKey=${SERVICE_KEY}`;

// API 호출하여 데이터 받아오는 함수
const getLostPets = async () => {
  try {
    const {
      data: {
        response: {
          body: {
            items: { item },
          },
        },
      },
    } = await axios.get(requestUrl);
    return item;
  } catch (error) {
    console.error(error);
  }
};

const lostPetList = await getLostPets();
export { lostPetList };
