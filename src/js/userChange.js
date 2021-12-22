const changeName = () => {
	const name = document.querySelector(".userInfo__modify__input");
	const btn = document.querySelector("#userInfo__modify__btn");
	const deleteUser = document.querySelector("#userInfo__exit");
	const nameRegex = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;
	const checkName = (val) => {
		if (!nameRegex.test(val)) {
			alert("닉네임은 한글, 영문, 숫자 2-10자리만 가능합니다.");
		} else {
			if (confirm("정말로 바꾸시겠어요?")) {
				user.name = val;
				alert(`'${user.name}'님 안녕하세요.`);
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

changeName();
