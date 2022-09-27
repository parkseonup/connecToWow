const dayList = get(".day__list");
const dayItem = getAll(".day__item");
const selectDay = getAll(".daySelect");

function handelList(event) {
  const target = event.target;
  const remove = get(".is--active");

  if (target.nodeName === "BUTTON") {
    const targetDay = target.dataset.filter;
    const dayArray = getAll(`[data-${targetDay}="true"`);

    selectDay.forEach((item) => {
      item.classList.remove(IS_SHOW);
      item.classList.add(IS_HIDDEN);
    });
    dayArray.forEach((item) => {
      if (item.classList.contains(IS_HIDDEN)) item.classList.remove(IS_HIDDEN);
      item.classList.add(IS_SHOW);
    });
    remove.classList.remove(ISACTIVE);
    target.classList.add(ISACTIVE);
  }
}
dayList.addEventListener("click", handelList);
