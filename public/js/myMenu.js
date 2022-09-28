const myMenu = get(".myMenu");
const myMenuBtn = get(".myMenu__button");
const myMenuItems = getAll(".myMenu__item");

const closeMyMenu = () => {
  myMenuBtn.classList.remove(IS_ACTIVE);
  myMenuBtn.setAttribute("aria-label", "마이 메뉴 버튼 열기");
  myMenuBtn.setAttribute("aria-expanded", false);
  myMenu.classList.remove(IS_SHOW);
};

const openMyMenu = () => {
  myMenuBtn.classList.add(IS_ACTIVE);
  myMenuBtn.setAttribute("aria-label", "마이 메뉴 버튼 닫기");
  myMenuBtn.setAttribute("aria-expanded", true);
  myMenu.classList.add(IS_SHOW);
};

const outShiftKey = (e) => {
  if (e.shiftKey) closeMyMenu();
};

const outTabKey = (e) => {
  if (!e.shiftKey) closeMyMenu();
};

const toggleMyMenu = (e) => {
  console.log(e, e.target);
  if (e.target.classList.contains("is--active")) closeMyMenu();
  else openMyMenu();
};

myMenuBtn.addEventListener("click", toggleMyMenu);
myMenuBtn.addEventListener("keydown", outShiftKey);
myMenuItems[myMenuItems.length - 1].children[0].addEventListener(
  "keydown",
  outTabKey
);
