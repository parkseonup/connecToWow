const dayList = document.querySelector(".day__list");
const dayItem = document.querySelectorAll(".day__item");
const selectDay = document.querySelectorAll(".daySelect");

function handelList(event) {
  const target = event.target;
  const remove = document.querySelector(".is--active");
  if (target.nodeName === "BUTTON") {
    const targetDay = target.dataset.filter;
    const dayArray = document.querySelectorAll(`[data-${targetDay}="true"`);
    selectDay.forEach((item) => {
      item.classList.remove("is--show");
      item.classList.add("is--hidden");
    });
    dayArray.forEach((item) => {
      if (item.classList.contains("is--hidden"))
        item.classList.remove("is--hidden");
      item.classList.add("is--show");
    });
    remove.classList.remove("is--active");
    target.classList.add("is--active");
  }
}
dayList.addEventListener("click", handelList);
