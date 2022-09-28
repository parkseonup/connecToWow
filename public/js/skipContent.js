const skipContent = getAll(".skipContent");

skipContent.forEach(($skip) => {
  $skip.addEventListener("focusin", (e) => {
    e.target.classList.add(IS_FOCUS);
  });
  $skip.addEventListener("focusout", (e) => {
    e.target.classList.remove(IS_FOCUS);
  });
});
