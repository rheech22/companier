const getLostPetData = async (pageNo, limit) => {
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

// let pageNo = 1;
// const lostPetData = await getLostPetData(pageNo);
// const [lostPetList, totalCount] = getLostPetList(lostPetData);

const getLostPets = async (pageNo = 1, limit = 10) => {
  const lostPetData = await getLostPetData(pageNo, limit);
  const [lostPetList, totalCount] = getLostPetList(lostPetData);
  return [lostPetList, totalCount];
};

export { getLostPets };
// export { lostPetList, totalCount };
