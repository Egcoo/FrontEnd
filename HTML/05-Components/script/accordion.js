"use strict";

const icon = document.querySelectorAll(".icon");
const item = document.querySelectorAll(".item");

// 当点击icon按钮时，展开剩余部分
for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function () {
    item[i].classList.toggle("open");
  });
}
