const cardItems = getAll(".card__item");

const moveFocusCardItem = (e) => {
  const RIGHT = "ArrowRight";
  const LEFT = "ArrowLeft";
  if (e.key !== RIGHT && e.key !== LEFT) return;

  e.preventDefault();

  const closest = e.target.closest(".card__item");
  let prev = closest.previousElementSibling;
  let next = closest.nextElementSibling;

  if (prev !== null && e.key === LEFT) {
    while (prev !== null && prev.classList.contains(IS_HIDDEN)) {
      prev = prev.previousElementSibling;
    }
    if (prev !== null) prev.querySelector("a").focus();
  }

  if (next !== null && e.key === RIGHT) {
    while (next !== null && next.classList.contains(IS_HIDDEN)) {
      next = next.nextElementSibling;
    }
    if (next !== null) next.querySelector("a").focus();
  }
};

cardItems.forEach((item) => {
  item.addEventListener("keydown", moveFocusCardItem);
});
