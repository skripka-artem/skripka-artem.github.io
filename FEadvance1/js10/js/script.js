const string = "qryte";
const charsArr = string.split("");
const timerOutput = document.querySelector(".timer");
const text = document.querySelector(".text");
const result = document.querySelector(".result");
let counter = 0;
let time = setInterval(() => {
    counter++;
    timerOutput.innerHTML = counter;
}, 1000);
let arrMain = [];
let allKeys = [];
text.innerHTML = string;
result.textContent = `Лучший результат ${localStorage.getItem("data")} секунд`;
let getItem = localStorage.getItem("data")

window.addEventListener("keydown", function(event){
    allKeys.push(event.key);
    if(allKeys.length <= 5){
            arrMain.push(event.key);
            if(arrMain.length === 5){
                let main = arrMain.join("")
                let chars = charsArr.join("")
                if(main === chars){
                    clearInterval(time);
                    result.textContent = `Ти справился за ${counter} секунд`;
                    if (counter < getItem) {
                        localStorage.setItem("data", JSON.stringify(counter));
                    }
                }
                else {
                    clearInterval(time);
                    result.textContent = "Проиграл , попробую еще раз";
                }

            }
    }
});