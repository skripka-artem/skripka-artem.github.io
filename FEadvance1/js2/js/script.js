let taba = 1;
let sharm = 2;
let hurgada = 3;

let namber = prompt("У нас имеються такие тури: taba, sharm, hurgada. Для вибора тура введите соответствующее число. \n taba - 1, sharm - 2, hurgada - 3 \n   Введите число ");


if (namber === '1') {
    alert("Вы вибрали курорт taba ")
}
else if (namber === "2") {
    alert("Вы вибрали курорт sharm ")
}
else if (namber === "3") {
    alert("Вы вибрали курорт hurgada ")
}
else {
    alert("Тура по вашему запросу не существует  ")
}