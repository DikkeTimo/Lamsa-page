let products = document.querySelector(".products");
let popUpContainer = document.querySelector(".pop-up-container");

products.addEventListener("click", toggle);

function toggle() {
  popUpContainer.classList.toggle("togglethis");
}

let story = document.querySelector(".story");
let button = document.querySelector("#buttonmore");
let more = document.querySelector(".moretext");

button.addEventListener("click", togglethis);

function togglethis() {
  more.classList.toggle("moretext-toggle");
  story.style.backgroundImage = "none";
}
