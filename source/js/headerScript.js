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
    menuButton.classList.add("u-hidden");
    mobileMenu.classList.remove("u-hidden");
    menuClose.classList.remove("u-hidden");
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
    mobileMenu.classList.add("u-hidden");
    menuClose.classList.add("u-hidden");
    menuButton.classList.remove("u-hidden");
  }, "350");
});
