let menuButton = document.querySelector(".header__menu-button");
let menuClose = document.querySelector(".header__menu-close");
let mobileMenu = document.querySelector(".header__nav-mobile");
let mobileMenuList = document.querySelector(".header__nav-mobile-list");

////////Открытие Меню/////////////////////

menuButton.addEventListener("click", function () {
  menuButton.classList.remove("appearing");
  menuClose.classList.remove("fading");
  menuButton.classList.add("fading");
  menuClose.classList.add("appearing");
  setTimeout(() => {
    menuButton.classList.add("hidden-item");
    mobileMenu.classList.remove("hidden-mobile");
    menuClose.classList.remove("hidden-item");
  }, "300");
  menuClose.focus();
});

//////Закрытие Меню/////////////////////

menuClose.addEventListener("click", function () {
  menuButton.classList.add("appearing");
  menuClose.classList.add("fading");
  menuButton.classList.remove("fading");
  menuClose.classList.remove("appearing");
  mobileMenuList.classList.add("header__close-menu");

  setTimeout(() => {
    mobileMenuList.classList.remove("header__close-menu");
    mobileMenu.classList.add("hidden-mobile");
    menuClose.classList.add("hidden-item");
    menuButton.classList.remove("hidden-item");
  }, "350");
});
