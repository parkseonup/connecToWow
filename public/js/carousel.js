let CAROUSEL__WIDTH = 1980;

const carousel = get(".carousel");
const cellCount = 6;
let selectedIndex = 0;
let resize;
let angle = 0;
const rotateCarousel = () => {
  angle = (selectedIndex / cellCount) * -360;
  carousel.style.transform = `translateZ(-${resize}px) rotateY(${angle}deg)`;
};

const prevButton = get(".prev_button");
prevButton.addEventListener("click", () => {
  stopVideo();
  selectedIndex--;
  rotateCarousel();
});

const nextButton = get(".next_button");
nextButton.addEventListener("click", () => {
  stopVideo();
  selectedIndex++;
  rotateCarousel();
});

window.addEventListener("DOMContentLoaded", () => {
  const size = window.innerWidth;
  resize = CAROUSEL__WIDTH - size;
  if (resize <= 0) resize = 1;
  if (resize > 800) resize = 1700;
  carousel.style.transform = `translateZ(-${resize}px) rotateY(${angle}deg)`;
});
window.addEventListener("resize", () => {
  const size = window.innerWidth;
  console.log(size);
  resize = CAROUSEL__WIDTH - size - 700;
  console.log(resize);
  if (resize <= 0) resize = 1;
  if (resize > 800) resize = 1700;
  carousel.style.transform = `translateZ(-${resize}px) rotateY(${angle}deg)`;
});

//youtube API
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let first;
let second;
let third;
let fourth;
let fifth;
let sixth;

function onYouTubeIframeAPIReady() {
  first = new YT.Player("first", {
    height: "100%",
    width: "100%",
    videoId: "rEIrNsvkx5Q",
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
  second = new YT.Player("second", {
    height: "100%",
    width: "100%",
    videoId: "m4z688oUpcQ",
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
  third = new YT.Player("third", {
    height: "100%",
    width: "100%",
    videoId: "m4z688oUpcQ",
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
  fourth = new YT.Player("fourth", {
    height: "100%",
    width: "100%",
    videoId: "m4z688oUpcQ",
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
  fifth = new YT.Player("fifth", {
    height: "100%",
    width: "100%",
    videoId: "m4z688oUpcQ",
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
  sixth = new YT.Player("sixth", {
    height: "100%",
    width: "100%",
    videoId: "m4z688oUpcQ",
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;

function carouselLage(target) {
  const num = target.dataset.carousel;
  switch (num) {
    case "1":
      target.style.transform = "rotateY(0deg) translateZ(346px) scale(1.7)";
      console.log("성공");
      break;
    case "2":
      target.style.transform = "rotateY(60deg) translateZ(346px) scale(1.7)";
      break;
    case "3":
      target.style.transform = "rotateY(120deg) translateZ(346px) scale(1.7)";
      break;
    case "4":
      target.style.transform = "rotateY(180deg) translateZ(346px) scale(1.7)";
      break;
    case "5":
      target.style.transform = "rotateY(240deg) translateZ(346px) scale(1.7)";
      break;
    case "6":
      target.style.transform = "rotateY(300deg) translateZ(346px) scale(1.7)";
      break;
    default:
      break;
  }
}

function carouselSmall(target) {
  const num = target.dataset.carousel;
  switch (num) {
    case "1":
      target.style.transform = "rotateY(0deg) translateZ(346px) scale(1)";
      break;
    case "2":
      target.style.transform = "rotateY(60deg) translateZ(346px) scale(1)";
      break;
    case "3":
      target.style.transform = "rotateY(120deg) translateZ(346px) scale(1)";
      break;
    case "4":
      target.style.transform = "rotateY(180deg) translateZ(346px) scale(1)";
      break;
    case "5":
      target.style.transform = "rotateY(240deg) translateZ(346px) scale(1)";
      break;
    case "6":
      target.style.transform = "rotateY(300deg) translateZ(346px) scale(1)";
      break;
    default:
      break;
  }
}

function onPlayerStateChange(event) {
  let a = event.target.getIframe();
  if (event.data == YT.PlayerState.PLAYING && !done) {
    carouselLage(a.parentNode);

    done = true;
  }
  if (event.data === 5) {
    carouselSmall(a.parentNode);
    done = false;
  }
}
function stopVideo() {
  first.stopVideo();
  second.stopVideo();
  third.stopVideo();
  fourth.stopVideo();
  fifth.stopVideo();
  sixth.stopVideo();
}
