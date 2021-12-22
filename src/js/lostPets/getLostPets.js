const getLostPets = async (pageNo = 1, limit = 10) => {
  try {
    const response = await fetch(
      `/api/lost-pets/?pageNo=${pageNo}&limit=${limit}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLostPetList = (data) => {
  const {
    items: { item: lostPetList },
    totalCount,
  } = data;
  return [lostPetList, totalCount];
};

let pageNo = 1;
const lostPetData = await getLostPets(pageNo);
const [lostPetList, totalCount] = getLostPetList(lostPetData);

export { lostPetList, totalCount };
