const apiPostComment = async (commentValue) => {
  const response = await fetch(
    `/api/${location.pathname.split("/")[2]}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        content: commentValue,
      }),
    }
  );

  if (response.status === 201) {
    // 댓글 화면에 렌더링, 페이지네이션 함수 재실행
  } else {
    alert("댓글 입력에 실패했습니다.");
  }
};

const handlePostComment = async () => {
  const searchBtn = document.querySelector(".comment-feed__button");
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const commentValue = document.querySelector(
      ".comment-feed__textarea"
    ).value;
    apiPostComment(commentValue);
  });
};

export { handlePostComment };
