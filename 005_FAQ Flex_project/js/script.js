const articleQuestion = document.querySelectorAll(".question");
const plusIcon = document.querySelectorAll(".plus-icon");
const minusIcon = document.querySelectorAll(".minus-icon");
const questionText = document.querySelector(".question-text");

plusIcon.forEach((plusIcons, index) => {
  plusIcons.addEventListener("click", () => {
    articleQuestion[index].classList.add("show-text");
  });
});

minusIcon.forEach((minusIcons, index) => {
  minusIcons.addEventListener("click", () => {
    articleQuestion[index].classList.remove("show-text");
  });
});
