const items = document.querySelectorAll(".graphic_item");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal_img");
const close = document.querySelector(".modal_close");

items.forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = item.src;
    modalImg.alt = item.alt;
  });
});

close.addEventListener("click", () => {
  modal.classList.remove("active");
});
