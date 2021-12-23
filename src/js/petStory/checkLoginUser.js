const checkLoginUser = async () => {
  console.log("유저 정보 확인");

  let response = await fetch("/api/get-user");
  let result = await response.json();
  return result;
};

export { checkLoginUser };
