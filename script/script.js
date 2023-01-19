let products = document.querySelector(".products");
let tube = document.querySelector(".tube");

products.addEventListener("click", toggle);

function toggle() {
  products.classList.add("togglethis");
  tube.classList.remove("tube");
}
