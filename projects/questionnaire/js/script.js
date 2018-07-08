let form = document.getElementById("form");
let login = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let button = document.getElementById("submit");
let value1 = document.getElementById("value1");
let value1Text = document.getElementById("one");
let value2 = document.getElementById("value2");
let value2Text = document.getElementById("two");
let compliance = document.getElementById("checkbox");

value1.addEventListener("click", value1Click);
value2.addEventListener("click", value2Click);

function value1Click() {
  if (value1.checked === true) {
    value1Text.classList.add("checked");
    value2Text.classList.remove("checked");
  }
}

function value2Click() {
  if (value2.checked === true) {
    value2Text.classList.add("checked");
    value1Text.classList.remove("checked");
  }
}

function validateEmail(em) {
  let expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return expr.test(em);
}
function validateName(n) {
  let nr = /.[A-zА-яЁё]+$/;
  return nr.test(n);
}

function validatePass(pass) {
  let nr = /.[0-9]+$/;
  return nr.test(pass);
}

const validation = {
  login: false,
  email: false,
  pass: false
};

login.addEventListener("blur", handleNameChange);
email.addEventListener("blur", handleEmailChange);
pass.addEventListener("blur", handlePassChange);

function handleNameChange(e) {
  if (!validateName(login.value) || login.value.length == 0) {
    login.style.border = "1px solid red";
    login.placeholder = "Введите свое имя";
    login.value = "";
    validation.login = false;
  } else {
    login.style.border = "1px solid transparent";
    validation.login = true;
  }
  const valid = isvalid();
  setButtonState(valid);
}

function handleEmailChange(e) {
  if (!validateEmail(email.value) || email.value.length == 0) {
    email.style.border = "1px solid red";
    email.placeholder = "Неверный формат email";
    email.value = "";
    validation.email = false;
  } else {
    email.style.border = "1px solid transparent";
    validation.email = true;
  }

  const valid = isvalid();
  setButtonState(valid);
}

function handlePassChange(e) {
  if (!validatePass(pass.value) || pass.value.length >= 12) {
    pass.style.border = "1px solid red";
    pass.placeholder = "Придумайте новый пароль";
    pass.value = "";
    validation.pass = false;
  } else {
    pass.style.border = "1px solid transparent";
    validation.pass = true;
  }

  const valid = isvalid();
  setButtonState(valid);
}

function isvalid() {
  return Object.values(validation).every(value => value);
}

function setButtonState(active) {
  if ((button.disabled = active)) {
    button.style.background = "#1da7c0";
    button.style.color = "#fff";
    button.disabled = false;
  }
}
