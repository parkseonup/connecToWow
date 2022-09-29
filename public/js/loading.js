const loading = get(".loading");

const viewLoading = () => {
  loading.classList.add(IS_HIDDEN);
};

window.addEventListener("DOMContentLoaded", viewLoading);
