const postBtn = document.querySelector(".editor__content__submit");
const title = document.querySelector(".editor__options__title-input");

// Quill editor
let option = {
  placeholder: "내용을 입력해주세요.",
  theme: "snow",
  modules: {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }, { font: [] }, { align: [] }],
        ["image"],
      ],
      handlers: {
        // image: imageHandler,
      },
    },
  },
};

let quill = new Quill("#quill", option);

async function sendPost(e) {
  e.preventDefault();

  const content = quill.root.innerHTML; //quill editor에 담긴 전체 글 내용 및 태그
  const contentValidate = "<p><br></p>"; //user가 내용을 작성하지 않았을 때, content의 초기값

  // 값을 입력했는지 검증
  if (content === contentValidate && !title.value) {
    return alert("제목과 내용을 입력하세요.");
  } else if (!title.value) {
    return alert("제목을 입력하세요");
  } else if (content === contentValidate) {
    return alert("내용을 입력하세요.");
  }
  const postResponse = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title.value,
      content: content,
    }),
  });

  if (postResponse.status === 201) {
    alert("게시물이 등록되었습니다!");
    window.location.assign("/myPetBoard");
  } else {
    alert("오류가 발생했습니다.");
  }
}
postBtn.addEventListener("click", sendPost);

//이미지 처리를 하는 핸들러, 고민 중...
// const imageHandler = () => {
//   console.log("에디터에서 이미지 버튼이 클릭되었습니다");

//   const input = document.createElement("input");

//   input.setAttribute("type", "file");
//   input.setAttribute("accept", "image/*");
//   input.click();

//   input.addEventListener("change", async () => {
//     const file = input.files[0];
//     // multer에 맞는 형식으로 데이터 만들어준다.
//     const formData = new FormData();
//     formData.append("img", file);

//     try {
//     } catch (error) {
//       console.log("error");
//     }
//   });
// };
