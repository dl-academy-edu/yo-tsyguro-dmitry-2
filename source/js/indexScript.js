let popupBtn = document.querySelector(".explore_button");
let popupWrapper = document.querySelector(".popup_container");
let popupForm = document.querySelector(".popup");
let inputPopup = popupForm.querySelector("#name-field");
let popupClose = document.querySelector(".popup_close");
let submitCheckbox = document.querySelector(".contact_form__checkbox");
let submitButton = document.querySelector(".contact_form__submit_button");

////////Открытие popup////////
popupBtn.addEventListener("click", function () {
  popupWrapper.classList.add("open_popup");
  inputPopup.focus();
  console.log("Открытие формы");
});

////////Закрытие popup кликом на крестик////////
popupClose.addEventListener("click", function () {
  popupWrapper.classList.remove("open_popup");
  console.log("Закрытие формы");
});

////////Закрытие popup Escape////////
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && popupWrapper.classList.contains("open_popup")) {
    popupWrapper.classList.remove("open_popup");
    console.log("Закрытие формы");
  }
});

////////Закрытие popup кликом в стороне////////
popupWrapper.addEventListener("click", function (event) {
  if (
    !popupForm.contains(event.target) &&
    popupWrapper.classList.contains("open_popup")
  ) {
    popupWrapper.classList.remove("open_popup");
    console.log("Закртытие кликом");
  }
});

////////Активация кнопки Submit////////

submitButton.setAttribute("disabled", "true");
submitCheckbox.addEventListener("input", function () {
  if (submitCheckbox.checked) {
    submitButton.removeAttribute("disabled", "true");
  } else {
    submitButton.setAttribute("disabled", "true");
  }
});
