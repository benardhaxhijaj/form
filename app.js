function validateForm() {
  var passwordElement = document.getElementById("password");
  var repeatPasswordElement = document.getElementById("repassword");

  password = passwordElement.value;
  repeatPassword = repeatPasswordElement.value;

  if (password !== repeatPassword) {
    passwordElement.classList.add("error");
    repeatPasswordElement.classList.add("error");
    return false;
  }

  return true;
}

window.addEventListener("DOMContentLoaded", function () {
  var passwordElement = document.getElementById("password");
  var repeatPasswordElement = document.getElementById("repassword");

  passwordElement.addEventListener("focus", removeErrorClass);
  repeatPasswordElement.addEventListener("focus", removeErrorClass);

  function removeErrorClass() {
    this.classList.remove("error");
  }
});
