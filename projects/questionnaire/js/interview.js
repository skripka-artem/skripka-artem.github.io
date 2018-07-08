let value1 = document.getElementById("value1");
let value1Text = document.getElementById("one");
let value2 = document.getElementById("value2");
let value2Text = document.getElementById("two");
let button = document.getElementById("submit");
let statisticsBlock = document.getElementById("statistics");
let rootA = document.getElementById("rootA");
let rootB = document.getElementById("rootB");

value1.addEventListener("click", value1Click);
value2.addEventListener("click", value2Click);

function value1Click() {
  if (value1.checked === true) {
    value1Text.classList.add("checked");
    value2Text.classList.remove("checked");
    button.style.background = "#1da7c0";
    button.style.color = "#fff";
    statisticsBlock.style.display = "block";
    rootB.style.display = "none";
    rootA.style.display = "block";
  }
}

function value2Click() {
  if (value2.checked === true) {
    value2Text.classList.add("checked");
    value1Text.classList.remove("checked");
    button.style.background = "#1da7c0";
    button.style.color = "#fff";
    statisticsBlock.style.display = "block";
    rootA.style.display = "none";
    rootB.style.display = "block";
  }
}

var statistic = {
  Ah1: "75,8",
  Ap: "пользователей — Вариант A",
  Bh1: "45,2",
  Bp: "пользователей — Вариант B"
};

const htmlA = document.querySelector("#statA").textContent.trim();
const compiledA = _.template(htmlA);
const resultA = compiledA();
rootA.innerHTML += resultA;

const htmlB = document.querySelector("#statB").textContent.trim();
const compiledB = _.template(htmlB);
const resultB = compiledB();
rootB.innerHTML += resultB;
