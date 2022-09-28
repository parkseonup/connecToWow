const dayList = get(".day__list");
const dayButtons = getAll(".day__list button");

dayList.addEventListener("click", openLineupTabPenel);
dayButtons.forEach((button) => {
  button.addEventListener("keydown", enterTabPanel);
});
