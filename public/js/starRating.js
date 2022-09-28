const starForm = get(".starForm");
const starWrapper = getAll(".starWrapper");
const starInput = getAll(".starInput");
const stars = [...getAll(".icon--star--empty")];

const EMPTY_STAR = "icon--star--empty";
const FILL_STAR = "icon--star--fill";

const totalStar = () => {
  let sum = 0;
  let count = starInput.length;

  for (let i = 0; i < count; i++) {
    if (starInput[i].checked == true) {
      sum += parseInt(starInput[i].value);

      stars[i].classList.remove(EMPTY_STAR);
      stars[i].classList.add(FILL_STAR);
    } else {
      stars[i].classList.add(EMPTY_STAR);
      stars[i].classList.remove(FILL_STAR);
    }
  }

  starForm.result.value = sum;
};

starInput.forEach(($star) => {
  $star.addEventListener("change", totalStar);
});
