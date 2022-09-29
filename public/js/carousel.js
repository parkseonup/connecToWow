const container = document.querySelector(".container");
const videoList = document.querySelectorAll(".carousel__video");
const wrap = document.querySelector(".wrap");
const snbList = document.querySelectorAll(".snb__list a");
let CAROUSEL__WIDTH = 1980;

let ariaArray = [
  "firstVideo",
  "secondVideo",
  "thirdVideo",
  "fourthVideo",
  "fifthVideo",
  "sixthVideo",
];

const carousel = get(".carousel");
const cellCount = 6;

let ariaCount = 0;
let selectedIndex = 0;
let resize;
let angle = 0;
let nowVideo;

window.addEventListener("load", () => {
  nowVideo = document.getElementById("first");
});

const rotateCarousel = () => {
  angle = (selectedIndex / cellCount) * -360;
  carousel.style.transform = `translateZ(-${resize}px) rotateY(${angle}deg)`;
};

function tabMove() {
  let place = ariaArray[ariaCount].slice(0, -5);
  const nextVideo = document.getElementById(place);
  nextVideo.tabIndex = 0;
  nowVideo.tabIndex = -1;
  nowVideo.removeAttribute("controls");
  nowVideo = nextVideo;
}

const prevButton = get(".prev_button");
const nextButton = get(".next_button");
prevButton.addEventListener("click", () => {
  selectedIndex--;
  ariaCount--;
  if (ariaCount < 0) ariaCount = 5;
  tabMove();
  stopVideo();
  rotateCarousel();
});

let tab = false;

prevButton.addEventListener("keydown", handleTab);
nextButton.addEventListener("keydown", handleTab);

function handleTab(e) {
  if (e.key === "Enter") {
    tab = true;
  }
  if (e.key === "Tab" && tab) {
    snbList[8].focus();
    tab = false;
  }
}

nextButton.addEventListener("click", () => {
  selectedIndex++;
  ariaCount++;
  if (ariaCount > 5) ariaCount = 0;
  tabMove();
  stopVideo();
  rotateCarousel();
});

window.addEventListener("DOMContentLoaded", () => {
  const size = window.innerWidth;
  resize = CAROUSEL__WIDTH - size - 700;
  if (resize <= 0) resize = 1;
  if (resize > 800) resize = 1700;
  carousel.style.transform = `translateZ(-${resize}px) rotateY(${angle}deg)`;
});

window.addEventListener("resize", () => {
  const size = window.innerWidth;
  resize = CAROUSEL__WIDTH - size - 700;
  if (resize <= 0) resize = 1;
  if (resize > 800) resize = 1700;
  carousel.style.transform = `translateZ(-${resize}px) rotateY(${angle}deg)`;
});

function handelVideo(event) {
  const target = event.target;
  if (target.nodeName !== "VIDEO" || target !== nowVideo) {
    return;
  }
  nowVideo.setAttribute("controls", "true");

  bigWidth(target);
}

function handelVideoKey(event) {
  if (event.key !== "Enter") {
    return;
  }
  nowVideo.setAttribute("controls", "true");
  bigWidth(event.target);
}

function bigWidth(video) {
  video.style.transform = "scale(1.7)";
}
function smallWidth(video) {
  video.style.transform = "scale(1)";
}

function stopVideo() {
  videoList.forEach((item) => {
    item.pause();
    item.currentTime = 0;
    smallWidth(item);
  });
}

container.addEventListener("click", handelVideo);
container.addEventListener("keydown", handelVideoKey);

//Mobile
const slide = document.querySelector(".slide__set");
let imgs = slide.querySelectorAll(".slide__video");
const videos = slide.querySelectorAll("video");
let imgWidth = imgs[0].getBoundingClientRect().width;
const filed = document.querySelector(".slide");
window.addEventListener("resize", () => {
  imgWidth = imgs[0].getBoundingClientRect().width;
  move();
});
let standard = 0;
filed.addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") return;
  direction(e.target);
});

function direction(target) {
  slide.style.transition = "all 300ms ease-in-out";
  videoStop();
  if (target.classList.contains("direction--left")) {
    standard--;
    move();
  } else {
    standard++;
    move();
  }
}

function videoStop() {
  videos.forEach((item) => {
    item.pause();
    item.currentTime = 0;
  });
}

function move() {
  if (standard > imgs.length - 1) {
    standard = 0;
    slide.style.transition = "none";
  }
  if (standard < 0) {
    standard = imgs.length - 1;
    slide.style.transition = "none";
  }
  slide.style.transform = `translate(${-imgWidth * standard}px)`;
}

let count = 0;
