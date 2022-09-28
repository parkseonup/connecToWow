const skipContent = getAll(".skipContent");

skipContent.forEach(($skip) => {
  $skip.addEventListener("focusin", (e) => {
    e.target.classList.add("is--focus");
  });
  $skip.addEventListener("focusout", (e) => {
    e.target.classList.remove("is--focus");
  });
});
