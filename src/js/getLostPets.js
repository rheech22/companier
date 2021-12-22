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

export { getLostPets };
