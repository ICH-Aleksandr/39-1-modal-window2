const openModalBtn = document.querySelector(".openModalBtn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modalBody");

const toggleModalWindow = () => {
  modal.classList.toggle("modalHidden");
};

openModalBtn.addEventListener("click", toggleModalWindow);
modal.addEventListener("click", toggleModalWindow);
modalBody.addEventListener("click", (e) => e.stopPropagation());

// close via esc
// close via btn(close icon)

// закрытие через esc:
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("modalHidden")) {
    toggleModalWindow();
  }
});

// закрытие через крестик:
const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", toggleModalWindow);
