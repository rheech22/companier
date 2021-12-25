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

const apiUpdateComment = async (updateCommentValue, commentId) => {
  const response = await fetch(`/api/comments/${commentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      content: updateCommentValue,
    }),
  });

  if (response.status === 200) {
    return true;
  } else {
    alert("댓글 입력에 실패했습니다.");
    return false;
  }
};

const apiDeleteComment = async (commentId) => {
  const response = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (response.status === 204) {
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
              <div class="comment__box">
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
              </div>
              <div class="comment__reply-list">
                  <!-- 대댓글 -->
                  <ul class="reply-list__container">
                     
                  </ul>
              </div>
              <div class="comment__tool hidden" data-comment-author-id="${
                loginInfo._id
              }">
                  <i class="fas fa-ellipsis-v tool"></i>
                    <div class="tool__box">
                      <ul class="tool__list">
                        <li class="tool__item">
                          <a href="#" class="tool__update" data-comment-id="${comment._id}">수정</a>
                        </li>
                        <li class="tool__item" tool__delete>
                          <!-- <a href="#" class="tool__delete" data-comment-id="${comment._id}">삭제</a> -->
                        </li>
                      </ul>
                    </div>
              </div>
          </article>
        </li>
      `;
      commentList.append(liTag);
      showHiddenBox(loginInfo, isNotLogin);
      */
      //  임시
      setTimeout(() => {
        location.reload();
      }, 500);
    }

    document.querySelector(".comment-feed__textarea").value = "";
  });
};

const clickCommentToolBox = () => {
  const commentTool = document.querySelectorAll(".comment__tool");
  const commentUl = document.querySelector(".comment__list");

  commentUl.addEventListener("click", (e) => {
    if (e.target.classList.contains("tool")) {
      e.target.nextElementSibling.classList.toggle("hidden");
    }

    // 부모 댓글 수정
    if (e.target.classList.contains("tool__update")) {
      e.preventDefault();
      console.log(e);
      let commentId = e.target.dataset.commentId;
      console.log(commentId);
      let copyParentHTML =
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement.children[0].innerHTML;
      let copyParentContent =
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement.children[0].children[1].innerText;
      let locationComment =
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement.children[0];
      let toolBox =
        e.target.parentElement.parentElement.parentElement.parentElement;
      toolBox.classList.add("hidden");
      locationComment.innerHTML = `
        <div class="comment-feed__input">
          <div class="comment-feed__content">
            <textarea class="comment-feed__textarea" placeholder="댓글을 입력하세요">${copyParentContent}</textarea>
          </div>
          <div class="comment-feed__submit">
            <button class="comment-feed__button update__cancle" type="button">취소</button>
            <button class="comment-feed__button update__submit" type="button">등록</button>
          </div>
        </div>
      `;

      document
        .querySelector(".update__submit")
        .addEventListener("click", (e) => {
          let updateCommentValue =
            e.target.parentElement.parentElement.children[0].children[0].value;
          let success = apiUpdateComment(updateCommentValue, commentId);
          if (success) {
            locationComment.innerHTML = `
                  <div class="comment__author">동길홍</div>
                    <div class="comment__content">${updateCommentValue}</div>
                    <div class="comment__info">
                        <span class="comment__data">2021년 12월 25일</span>
                        <a href="#" class="comment__link" data-comment-id="61c6ab59c97ecabcb5a9421b">답글쓰기</a>
                  </div>
            `;
          }
          toolBox.classList.remove("hidden");
          console.log(e);
        });

      document
        .querySelector(".update__cancle")
        .addEventListener("click", (e) => {
          locationComment.innerHTML = copyParentHTML;
          toolBox.classList.remove("hidden");
        });

      console.log("부모 댓글 수정하기 클릭");
    }

    // 부모 댓글 삭제
    if (e.target.classList.contains("tool__delete")) {
      console.log(e.target);
      let commentId = e.target.dataset.commentId;
      let copyParentContent =
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement.children[0].children[1].innerText;

      const result = confirm("댓글을 삭제하시겠습니까?");
      if (result) {
        let success = apiDeleteComment(commentId);

        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      }
    }

    // 대댓글 수정
    //대댓글 마크업 구조랑 클래스명 재정비 후 작업

    // 대댓글 삭제
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
        console.log(e);
        e.target.parentElement.parentElement.parentElement.children[1].children[0].append(
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
                    <div class="comment__box">
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
                    </div>
                    <div class="comment__tool" data-comment-author-id="${
                      loginInfo._id
                    }">
                        <i class="fas fa-ellipsis-v tool"></i>
                        <div class="tool__box hidden">
                          <ul class="tool__list">
                            <li class="tool__item">
                              <a href="#" class="tool__recomment-update">수정</a>
                            </li>
                            <li class="tool__item tool__delete">삭제
                             <!-- <a href="#" class="tool__recomment-delete">삭제</a> -->
                            </li>
                          </ul>
                        </div>
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
