const dayList = get(".day__list");

const handelLinupList = (event) => {
  if (event.target === "BUTTON") return;

  const lineupTabPanel = get("#lineupTabpanel");
  const lineupCardItem = getAll(".lineup .card__item");
  const dayButtons = getAll(".day__list button");
  const target = event.target;
  const targetDay = target.id;
  const dayArray = getAll(`[data-${targetDay}="true"`);

  lineupTabPanel.setAttribute("aria-labelledby", `${targetDay}`);
  lineupTabPanel.setAttribute("aria-live", true);

  lineupCardItem.forEach((item) => {
    item.classList.remove(IS_SHOW);
    item.classList.add(IS_HIDDEN);
  });

  dayButtons.forEach((button) => {
    if (button !== target) {
      button.setAttribute("aria-selected", false);
      button.setAttribute("aria-live", false);
      button.classList.remove(IS_ACTIVE);
    } else {
      button.setAttribute("aria-live", true);
      button.setAttribute("aria-selected", true);
      button.classList.add(IS_ACTIVE);
    }
  });

  dayArray.forEach((item) => {
    if (item.classList.contains(IS_HIDDEN)) item.classList.remove(IS_HIDDEN);
    item.classList.add(IS_SHOW);
  });
  target.classList.add(IS_ACTIVE);
  target.setAttribute("aria-selected", true);
};

dayList.addEventListener("click", handelLinupList);
