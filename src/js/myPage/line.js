function line() {
  let myPage = document.querySelector(".myPage__profile");
  let i = 0;
  let drop = document.createElement("i");
  drop.style.width = "300px";
  drop.style.height = "1px";
  myPage.appendChild(drop);
}

export { line };
