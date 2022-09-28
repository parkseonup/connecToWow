const opacityButtons = [...getAll(".button--opacity")];

opacityButtons.forEach(($button, i) => {
  const clickHandler = (e) => {
    opacityButtons[i].classList.toggle(IS_ACTIVE);
    if (opacityButtons[i].classList.contains(IS_ACTIVE)) {
      e.target.innerHTML = `<span
      class="icon icon--bell--empty"
      aria-hidden="true"
    ></span>
    알림받는 중`;
    } else {
      e.target.innerHTML = `<span
      class="icon icon--bell--empty"
      aria-hidden="true"
    ></span>
    알림받기`;
    }
  };

  $button.addEventListener("click", clickHandler);
});

const fatButtons = [...getAll(".button--fat")];

fatButtons.forEach(($button, i) => {
  const clickHandler = (e) => {
    console.log(e.target.innerHTML);
    fatButtons[i].classList.toggle(IS_ACTIVE);
    if (fatButtons[i].classList.contains(IS_ACTIVE)) {
      e.target.innerHTML = `<span
      class="icon icon--arrow"
      aria-hidden="true"
    ></span>
      <span>팔로잉</span>
    `;
    } else {
      e.target.innerHTML = ` <span class="icon icon--plus"></span>
      <span>팔로우</span>`;
    }
  };

  $button.addEventListener("click", clickHandler);
});
