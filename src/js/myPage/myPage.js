import { line } from "./line.js";

const myPage = async () => {
  const response = await fetch(`/api/user-detail`);
  const user = await response.json();
  myPageTemplate(user);
};

function myPageTemplate(user) {
  line();
  const tabList = document.querySelectorAll(".myPage__select .list a");
  const contents = document.querySelectorAll(".myPage__select__content");
  const email = document.querySelector(".myPage__profile__email");
  const nickname = document.querySelector(".myPage__profile__nickname");
  const createdAt = document.querySelector(".myPage__profile__createdAt");
  email.innerHTML = `이메일 ${user.email}`;
  nickname.innerHTML = `닉네임 ${user.nickname}`;
  createdAt.innerHTML = `가입일 ${user.createdAt.split("-")[0]}년 ${
    user.createdAt.split("-")[1]
  }월 ${user.createdAt.split("-")[2].substr(0, 2)}일`;

  let activeContent = "";

  for (let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener("click", function (e) {
      e.preventDefault();
      for (let j = 0; j < tabList.length; j++) {
        tabList[j].classList.remove("is__on");
        contents[j].style.display = "none";
      }
      e.target.classList.add("is__on");
      activeContent = e.target.getAttribute("href");
      document.querySelector(activeContent).style.display = "block";
    });
  }
}

export { myPage };
