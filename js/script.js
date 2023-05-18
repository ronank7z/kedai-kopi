// TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");
const shoppingCartButton = document.querySelector("#shopping-cart-button");
const shoppingCart = document.querySelector(".shopping-cart");
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

hamburger.onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

shoppingCartButton.onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (
    !shoppingCart.contains(e.target) &&
    !shoppingCartButtons.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
