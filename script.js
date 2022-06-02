const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const menuFeatures = document.querySelector(".menu-features");
const features = document.querySelector(".features");
const linkFeatures = document.querySelector(".link-features");
const menuCompany = document.querySelector(".menu-company");
const company = document.querySelector(".company");
const linkCompany = document.querySelector(".link-company");
const marcas = document.querySelector(".marcas");
const blur = document.querySelector(".blur");

btnMenu.addEventListener("touchstart", () => {
  btnMenu.classList.toggle("btn-menu-close");
  menu.classList.toggle("menu--active");
  blur.classList.toggle("blur--active");
});

function toggleFeatures() {
  menuFeatures.classList.toggle("menu-features--active");
  features.classList.toggle("features--active");
}

linkFeatures.addEventListener("click", toggleFeatures);

function toggleCompany() {
  menuCompany.classList.toggle("menu-company--active");
  company.classList.toggle("company--active");
}

linkCompany.addEventListener("click", toggleCompany);
