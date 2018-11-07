"use strict";

var firstNameBox = document.getElementById("firstName");
var emailBox = document.getElementById("email");
var messageBox = document.getElementById("message");
var submit = document.getElementsByTagName("button")[0];
var burger = document.getElementById("burger");
var top_menu = document.getElementById("top-menu");
var close = document.getElementById("close");

var send = function send() {
  if (firstNameBox.value == "" || emailBox.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) === null || messageBox.value == "") {
    alert("В форме ошибки введите верно данные");
  } else {
    alert("Ok");
  }
};

var open = function open() {
  top_menu.style.display = "flex";
};

var closeB = function closeB() {
  top_menu.style.display = "none";
};
submit.addEventListener("click", send);
burger.addEventListener("click", open);
close.addEventListener("click", closeB);