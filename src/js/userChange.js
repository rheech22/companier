const changeName = () => {
  const name = document.querySelector(".userInfo__modify__input");
  const btn = document.querySelector("#userInfo__modify__btn");
  const deleteUser = document.querySelector("#userInfo__exit");
  const nameRegex = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;

  const user = {
    name: "유저네임",
    posts: [
      { title: "제목입니다.", content: "내용입니다.", views: "123" },
      { title: "제목입니다1", content: "내용입니다2", views: "1323" },
    ],
    comments: [
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
      {
        content: "내용321입니다.",
        author: "작성자",
        views: "123",
        postLink: "#",
        postTitle: "글 제목",
      },
    ],
  };

  btn.addEventListener("click", () => {
    if (!nameRegex.test(name.value)) {
      alert("닉네임은 한글, 영문, 숫자 2-10자리만 가능합니다.");
    } else {
      if (confirm("정말로 바꾸시겠어요?")) {
        user.name = name.value;
        alert(`'${user.name}'님 안녕하세요.`);
      } else {
        name.value = "";
      }
    }
  });

  deleteUser.addEventListener("click", () => {
    alert("정말로 탈퇴하시겠어요?");
  });
};

changeName();
