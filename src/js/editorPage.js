const postBtn = document.querySelector(".editor__content__submit");
const title = document.querySelector(".editor__options__title-input");

let array = []; // 나중에 이미지를 삭제할 때 비교할 비교용 배열

const imageHandler = () => {
  const input = document.createElement("input");

  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.addEventListener("change", async () => {
    const file = input.files[0];
    // multer에 맞는 형식으로 데이터 만들어준다.
    const formData = new FormData();
    formData.append("img", file);

    try {
      const result = await axios.post("/api/imgFirst", formData, {
        headers: {
          "Content-Type":
            "application/json; application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
      });

      const IMG_URL = result.data.url;
      array.push(IMG_URL); // 비교용 배열에 img_url 추가
      const range = quill.getSelection();
      quill.insertEmbed(range, "image", IMG_URL);
    } catch (error) {
      console.log(error);
    }
  });
};

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
        image: imageHandler,
      },
    },
  },
};

let quill = new Quill("#quill", option);

async function sendPost(e) {
  e.preventDefault();

  const content = quill.root.innerHTML; //quill editor에 담긴 전체 글 내용 및 태그
  const contentValidate = "<p><br></p>"; //user가 내용을 작성하지 않았을 때, content의 초기값

  // 정규식을 이용해 content에서 img url만 뽑아내는 코드
  let pattern = /<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>/g;
  let matches = [];
  let temp = "";
  let deleteFileNames = [];

  while ((temp = pattern.exec(content))) {
    matches.push(temp[1]);
  }
  // 삭제될 것들만 골라냄
  let filtered = array.filter((x) => {
    if (!matches.includes(x)) return true;
  });

  for (let i = 0; i < filtered.length; i++) {
    let temp = filtered[i].substring(34); // 파일 이름만 남기고 앞의 주소는 삭제
    deleteFileNames.push(temp);
  }

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
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title.value,
      content: content,
      deleteFileNames: deleteFileNames,
      thumbnail: matches[0],
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
