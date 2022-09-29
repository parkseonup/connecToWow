const searchForm = document.querySelector(".search form");
const searchInput = searchForm.querySelector("input[type=text]");
const searchResult = document.querySelector(".search__result");
const searchList = searchResult.querySelector("ul");

searchResult.style.marginTop = "30px";

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

function handleSearch(e) {
  e.preventDefault();
  videoSearch(searchInput.value);
}

function headerMake() {
  const header = document.createElement("header");
  const h2 = document.createElement("h2");
  header.classList.add("section__header");
  h2.classList.add("section__title");
  h2.textContent = searchInput.value;
  h2.style.fontSize = "25px";
  header.append(h2);
  searchResult.prepend(header);
}

searchForm.addEventListener("submit", handleSearch);

function videoSearch(search) {
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=AIzaSyDVDIJPSqRCgwcwH3MAo6eYmGAj69FK6k0`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => videos(result))
    .catch((error) => console.log("error", error));
}

function videos(video) {
  video.items.forEach((video) => videoItem(video));
  headerMake();
}

function videoItem(items) {
  const li = document.createElement("li");
  const article = document.createElement("article");
  const a = document.createElement("a");
  const figure = document.createElement("figure");
  const div = document.createElement("div");
  const picture = document.createElement("picture");
  const img = document.createElement("img");
  li.classList.add("card__item");
  article.classList.add("card");
  a.setAttribute("href", `https://youtube.com/embed/${items.id.videoId}`);
  figure.classList.add("card__figure");
  div.classList.add("card__img");
  img.setAttribute("src", `${items.snippet.thumbnails.high.url}`);
  li.appendChild(article);
  article.appendChild(a);
  a.appendChild(figure);
  figure.appendChild(div);
  div.appendChild(picture);
  picture.appendChild(img);
  let caption = videoCaption(items);
  figure.appendChild(caption);
  sumVideo(li);
}

function videoCaption(items) {
  const figcaption = document.createElement("figcaption");
  const h3 = document.createElement("h3");
  const div = document.createElement("div");
  const divProfile = document.createElement("div");
  const picture = document.createElement("picture");
  const img = document.createElement("img");
  const dl = document.createElement("dl");
  const divDescription = document.createElement("div");
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  figcaption.classList.add("caption");
  figcaption.classList.add("caption--online");
  h3.classList.add("title");
  h3.textContent = items.snippet.title;
  div.classList.add("description");
  divProfile.classList.add("profile");
  img.setAttribute("src", `${items.snippet.thumbnails.default.url}`);
  dl.classList.add("description__list");
  divDescription.classList.add("description__item");
  dt.classList.add("a11yHidden");
  dd.textContent = items.snippet.channelTitle;
  figcaption.appendChild(h3);
  figcaption.appendChild(div);
  div.appendChild(divProfile);
  div.appendChild(dl);
  divProfile.appendChild(picture);
  picture.appendChild(img);
  dl.appendChild(divDescription);
  divDescription.appendChild(dt);
  divDescription.appendChild(dd);
  return figcaption;
}
function sumVideo(li) {
  searchList.appendChild(li);
}
