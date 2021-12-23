const changeName = async () => {
  const name = document.querySelector(".userInfo__modify__input");
  const btn = document.querySelector("#userInfo__modify__btn");
  const deleteUser = document.querySelector("#userInfo__exit");
  const nameRegex = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;

  const res = await fetch("/api/get-user", {
    method: "GET",
  });
  const data = await res.json();
  const userId = data._id;

  const checkName = async (val) => {
    if (!nameRegex.test(val)) {
      alert("닉네임은 한글, 영문, 숫자 2-10자리만 가능합니다.");
    } else {
      if (confirm("정말로 바꾸시겠어요?")) {
        const newNickname = val;
        const changed = await fetch(`/api/users/${userId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nickname: val,
          }),
        });

        if (changed.status === 200) {
          alert(`${newNickname}님 안녕하세요`);
        } else {
          alert("닉네임 변경에 실패했습니다.");
        }
      }
    }
    name.value = "";
  };

  btn.addEventListener("click", () => {
    checkName(name.value);
  });

  name.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkName(name.value);
  });

  deleteUser.addEventListener("click", () => {
    alert("정말로 탈퇴하시겠어요?");
  });
};

export { changeName };
