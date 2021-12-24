const apiPostComment = async (commentValue, wroteReComment) => {
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
    return true;
  } else {
    alert("댓글 입력에 실패했습니다.");
    return false;
  }
};

const apiPostReComment = async (commentId, wroteReComment) => {
  const response = await fetch(`/api/${commentId}/recomments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      content: wroteReComment,
    }),
  });

  if (response.status === 201) {
    return true;
  } else {
    alert("댓글 입력에 실패했습니다.");
    return false;
  }
};

const handlePostComment = async (loginInfo, isNotLogin) => {
  const submitCommentBtn = document.querySelector(".comment-feed__button");
  submitCommentBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const commentValue = document.querySelector(
      ".comment-feed__textarea"
    ).value;

    let success = apiPostComment(commentValue);
    if (success) {
      /*
      const commentList = document.querySelector(".comment__list");
      let liTag = document.createElement("li");
      liTag.innerHTML = `
        <li class="comment__item">
          <article class="comment__wrap">
              <div class="comment__author">${loginInfo.nickname}</div>
              <div class="comment__content">${commentValue}</div>
              <div class="comment__info">
                  <span class="comment__data">${new Date().getFullYear()}년 ${
        new Date().getMonth() + 1
      }월 ${new Date().getDate()}일</span>
                  <a href="#" class="comment__link hidden" data-comment-id="${
                    loginInfo._id
                  }">답글쓰기</a>
              </div>
              <div class="comment__reply-list">
                  <!-- 대댓글 -->
                  <ul class="reply-list__container">
                     
                  </ul>
              </div>
              <div class="comment__tool hidden" data-comment-author-id="${
                loginInfo._id
              }">
                  <i class="fas fa-ellipsis-v"></i>
              </div>
          </article>
        </li>
      `;
      commentList.append(liTag);
      showHiddenBox(loginInfo, isNotLogin);
      */
      //  임시
      location.reload();
    }
    // TODO: 댓글 화면에 렌더링, 페이지네이션 함수 재실행

    document.querySelector(".comment-feed__textarea").value = "";
  });
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

const handleRePostComment = (loginInfo) => {
  const reCommentLinks = document.querySelectorAll(".comment__link");

  reCommentLinks.forEach((reCommentLink) => {
    let flag = true;

    reCommentLink.addEventListener("click", (e) => {
      e.preventDefault();

      if (flag) {
        const li = document.createElement("li");
        li.classList.add("reComment__item");
        li.innerHTML = `
            <div class="comment-feed__input">
              <div class="comment-feed__content">
                <textarea class="comment-feed__textarea" placeholder="댓글을 입력하세요"></textarea>
              </div>
              <div class="comment-feed__submit">
                <button class="reComment-feed__button" type="button">등록</button>
              </div>
            </div>
          `;
        e.target.parentElement.parentElement.children[3].firstElementChild.append(
          li
        );
        flag = false;

        const submitReCommentBtn = document.querySelectorAll(
          ".reComment-feed__button"
        );
        submitReCommentBtn.forEach((submitReComment) => {
          submitReComment.addEventListener("click", (e) => {
            let wroteReComment =
              e.target.parentElement.previousElementSibling.children[0].value;

            let success = apiPostReComment(
              reCommentLink.dataset.commentId,
              wroteReComment
            );
            if (success) {
              li.innerHTML = `
                <article class="comment__wrap">
                    <div class="comment__author">${loginInfo.nickname}</div>
                    <div class="comment__content">${wroteReComment}</div>
                    <div class="comment__info">
                        <span class="comment__data">${new Date().getFullYear()}년 ${
                new Date().getMonth() + 1
              }월 ${new Date().getDate()}일</span>
                        <!-- <a href="#" class="comment__link hidden" data-comment-id="${
                          loginInfo._id
                        }">답글쓰기</a> -->
                    </div>
                    <div class="comment__tool" data-comment-author-id="${
                      loginInfo._id
                    }">
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                </article>
              `;
            }

            flag = true;
          });
        });
      }
    });
  });
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
  clickCommentToolBox,
  handleRePostComment,
  showHiddenBox,
};
