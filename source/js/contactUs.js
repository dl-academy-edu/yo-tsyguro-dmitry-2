let submitCheckbox = document.querySelector(".contact_form__checkbox");
let submitButton = document.querySelector(".contact_form__submit_button");

submitButton.setAttribute("disabled", "true");
submitCheckbox.addEventListener("input", function () {
  if (submitCheckbox.checked) {
    submitButton.removeAttribute("disabled", "true");
  } else {
    submitButton.setAttribute("disabled", "true");
  }
});
