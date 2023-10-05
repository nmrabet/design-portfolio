const prevButton = document.getElementById("arrow-prev");
const nextButton = document.getElementById("arrow-next");
const slide = document.querySelector(".slide");
const caroussel = document.querySelector(".caroussel");

nextButton.addEventListener("click", (e) => {
  const slideWidth = slide.clientWidth;
  caroussel.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  caroussel.scrollLeft -= slideWidth;
});
