const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const menuFeatures = document.querySelector(".menu-features");
const features = document.querySelector(".features");
const menuCompany = document.querySelector(".menu-company");
const company = document.querySelector(".company");
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
  features.classList.toggle("features");
}

features.addEventListener("touchstart", toggleFeatures);
features.addEventListener("mouseenter", toggleFeatures);
features.addEventListener("mouseleave", toggleFeatures);

function toggleCompany() {
  menuCompany.classList.toggle("menu-company--active");
  company.classList.toggle("company--active");
  company.classList.toggle("company");
}

company.addEventListener("touchstart", toggleCompany);

company.addEventListener("mouseenter", toggleCompany);

company.addEventListener("mouseleave", toggleCompany);
