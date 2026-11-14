// ハンバーガー
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

// ヘッダーのスクロール
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// モーダル
const items = document.querySelectorAll(".graphic_item");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal_img");
const close = document.querySelector(".modal_close");

items.forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.add("active");

    modal.querySelector(".modal_content").scrollTop = 0;

    modalImg.src = item.src;
    modalImg.alt = item.alt;

    modal.querySelector(".modal_title").textContent = item.dataset.title;
    modal.querySelector(".purpose").textContent = item.dataset.purpose;
    modal.querySelector(".target").textContent = item.dataset.target;
    modal.querySelector(".point").textContent = item.dataset.point;
    modal.querySelector(".tool").textContent = item.dataset.tool;
  });
});

close.addEventListener("click", () => {
  modal.classList.remove("active");
});
