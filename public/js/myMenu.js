const myMenu = get(".myMenu");
const myMenuBtn = get(".myMenu__button");
const myMenuItems = getAll(".myMenu__item");
let myMenuIsOpen = false;

const closeMyMenu = () => {
  myMenuIsOpen = !myMenuIsOpen;
  myMenuBtn.classList.remove(IS_ACTIVE);
  myMenuBtn.setAttribute("aria-label", "마이 메뉴 버튼 열기");
  myMenuBtn.setAttribute("aria-expanded", myMenuIsOpen);
  myMenu.classList.remove(IS_SHOW);
};

const openMyMenu = () => {
  myMenuIsOpen = !myMenuIsOpen;
  myMenuBtn.classList.add(IS_ACTIVE);
  myMenuBtn.setAttribute("aria-label", "마이 메뉴 버튼 닫기");
  myMenu.classList.add(IS_SHOW);
};

const focusOutMyMenu = (e) => {
  if (e.shiftKey) return;

  closeMyMenu();
};

const toggleMyMenu = (e) => {
  if (myMenuIsOpen) closeMyMenu();
  else openMyMenu();
};

myMenuBtn.addEventListener("click", toggleMyMenu);
myMenuItems[myMenuItems.length - 1].children[0].addEventListener(
  "keydown",
  focusOutMyMenu
);
