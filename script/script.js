let products = document.querySelector(".products");
let popUpContainer = document.querySelector(".pop-up-container");
let intro = document.querySelector("intro img");
let mand = document.getElementById("#toggleMand");

products.addEventListener("click", toggle);

function toggle() {
  popUpContainer.classList.toggle("togglethis");
}
