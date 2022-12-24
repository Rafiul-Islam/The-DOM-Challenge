const RATING_ICONS = document.querySelectorAll(".rating-icon");
const TOTAL_RATING_ICONS = document.querySelectorAll(".rating-icon").length;
let activestar = 0;

RATING_ICONS.forEach((ratingIcon) => {
  ratingIcon.addEventListener("mouseover", handleMouseOver);
  ratingIcon.addEventListener("mouseleave", handleMouseLeave);
  ratingIcon.addEventListener("click", handleMouseClick);
});

function handleMouseOver(e) {
  const ratingvalue = e.target.getAttribute("data-star");
  fill(ratingvalue);
}

function fill(ratingvalue) {
  for (let index = 0; index < TOTAL_RATING_ICONS; index++) {
    if (index < ratingvalue) {
      RATING_ICONS[index].classList.add("fa-star");
    } else {
      RATING_ICONS[index].classList.remove("fa-star");
    }
  }
}

function handleMouseLeave() {
  fill(activestar);
}

function handleMouseClick(e) {
  activestar = e.target.getAttribute("data-star");
  fill()
  writeValueToDom()
}

function writeValueToDom(){
  document.querySelector(".rating-txt").textContent = activestar;
}
