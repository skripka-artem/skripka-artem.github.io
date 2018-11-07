let firstNameBox = document.getElementById("firstName");
let emailBox = document.getElementById("email");
let messageBox = document.getElementById("message");
let submit = document.getElementsByTagName("button")[0];
let burger = document.getElementById("burger");
let top_menu = document.getElementById("top-menu");
let close = document.getElementById("close");

let send = function() {
  if (
    firstNameBox.value == "" ||
    emailBox.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) ===
      null ||
    messageBox.value == ""
  ) {
    alert("В форме ошибки введите верно данные");
  } else {
    alert("Ok");
  }
};

let open = function() {
  top_menu.style.display = "flex";
};

let closeB = function() {
  top_menu.style.display = "none";
};
submit.addEventListener("click", send);
burger.addEventListener("click", open);
close.addEventListener("click", closeB);


