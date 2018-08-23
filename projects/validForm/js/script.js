let firstNameBox = document.getElementById("firstName");
let lastNameBox = document.getElementById("lastName");
let emailBox = document.getElementById("email");
let submit = document.getElementsByTagName("button")[0];

let firstNameValid = function() {
  if (firstNameBox.value.match(/^[A-zА-яЁё]+$/) == null) {
    firstName = true;
    firstNameError.style.display = "block";
  } else {
    firstName = false;
    firstNameError.style.display = "none";
  }
};

let lastNameValid = function() {
  if (lastNameBox.value.match(/^[A-zА-яЁё]+$/) == null) {
    lastName = true;
    lastNameError.style.display = "block";
  } else {
    lastName = false;
    lastNameError.style.display = "none";
  }
};

let emailValid = function() {
  if (
    emailBox.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) ==
    null
  ) {
    email = true;
    emailError.style.display = "block";
  } else {
    email = false;
    emailError.style.display = "none";
  }
};

let send = function() {
  if (firstName || lastName || email) {
    alert("В форме ошибки введите верно данные");
  } else {
    alert("Ok");
  }
};

firstNameBox.addEventListener("blur", firstNameValid);
lastNameBox.addEventListener("blur", lastNameValid);
emailBox.addEventListener("blur", emailValid);
submit.addEventListener("click", send);
