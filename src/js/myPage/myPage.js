const myPage = async () => {
  const response = await fetch(`/api/user-detail`);
  const user = await response.json();
  myPageTemplate(user);
};

function myPageTemplate(user) {
  const tabList = document.querySelectorAll(".myPage__select .list li");
  const contents = document.querySelectorAll(".myPage__select__content");
  const email = document.querySelector(".myPage__profile__email");
  const nickname = document.querySelector(".myPage__profile__nickname");
  const createdAt = document.querySelector(".myPage__profile__createdAt");
  email.innerHTML = `이메일 ${user.email}`;
  nickname.innerHTML = `닉네임 ${user.nickname}`;
  createdAt.innerHTML = `가입일 ${user.createdAt}`;

  let activeContent = "";

  for (let i = 0; i < tabList.length; i++) {
    tabList[i]
      .querySelector(".myPage__select__category")
      .addEventListener("click", function (e) {
        e.preventDefault();
        for (let j = 0; j < tabList.length; j++) {
          tabList[j].classList.remove("is__on");
          contents[j].style.display = "none";
        }
        this.parentNode.classList.add("is__on");
        activeContent = this.getAttribute("href");
        document.querySelector(activeContent).style.display = "block";
      });
  }
}

export { myPage };
