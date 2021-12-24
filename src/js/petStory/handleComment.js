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
    // TODO: 댓글 화면에 렌더링, 페이지네이션 함수 재실행
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
    document.querySelector(".comment-feed__textarea").value = "";
  });
};

const handleCommentToolBox = (loginInfo) => {
  // const commentTool = document.querySelectorAll(".comment__tool");
  // commentTool.forEach((el) => {
  //   if (el.dataset.commentAuthorId === loginInfo._id) {
  //     el.classList.remove("hidden");
  //   }
  // });
};

const clickCommentToolBox = () => {
  const commentTool = document.querySelectorAll(".comment__tool");
  commentTool.forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(e.target);
      // TODO: 수정 삭제 모달창 넣어주기 -> api 요청 -> 화면 렌더링
    });
  });
};

const handleRePostComment = (isNotLogin) => {
  // const reCommentLink = document.querySelectorAll(".comment__link");
  // if (!isNotLogin) {
  //   reCommentLink.forEach((el) => {
  //     el.classList.remove("hidden");
  //     el.addEventListener("click", (e) => {
  //       e.preventDefault();
  //       console.log(e.target);
  //       // TODO:대댓글 입력창 생성 -> api 요청  -> 화면 렌더링(대댓글 css 만들기)
  //     });
  //   });
  // }
};

const showHiddenBox = (loginInfo, isNotLogin) => {
  const commentTool = document.querySelectorAll(".comment__tool");
  commentTool.forEach((el) => {
    if (el.dataset.commentAuthorId === loginInfo._id) {
      el.classList.remove("hidden");
    }
  });

  const reCommentLink = document.querySelectorAll(".comment__link");
  if (!isNotLogin) {
    reCommentLink.forEach((el) => {
      el.classList.remove("hidden");
    });
  }

  const articleBottomBtn = document.querySelector(".detail-bottom__left");
  if (loginInfo._id === articleBottomBtn.dataset.authorId) {
    articleBottomBtn.classList.remove("hidden");
  }
};

export {
  handlePostComment,
  handleCommentToolBox,
  clickCommentToolBox,
  handleRePostComment,
  showHiddenBox,
};
