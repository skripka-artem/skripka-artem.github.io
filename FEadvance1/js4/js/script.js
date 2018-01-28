const alphabet = [["qwertyuiop[]"],["asdfghjkl;'"],["zxcvbnm,./"]];

function addKeyboardLayout() {
    const upText = alphabet[0];
    const centerText = alphabet[1];
    const bottomText = alphabet[2];
function getRandCharInRow() {
   var row = prompt("Введите соответствующий номер для вывода случайного символа . 1 - верхняя строчка 2 - средняя 3 - нижняя ");
    if (row === "1") {
        let strUpText = upText.join('');
        let areayUpText = strUpText.split('');
        let randUpText = Math.floor(Math.random() * areayUpText.length);
        alert("Рандомное число для строчки 1:   " + areayUpText[randUpText])
    } else if (row === "2") {
        let strCenterText = centerText.join('');
        let areayCenterText = strCenterText.split('');
        let randCenterText = Math.floor(Math.random() * areayCenterText.length);
        alert("Рандомное число для строчки 2:   " +areayCenterText[randCenterText])
    } else if (row === "3") {
        let strBottomText = bottomText.join('');
        let areayBottomText = strBottomText.split('');
        let randBottomText = Math.floor(Math.random() * areayBottomText.length);
        alert("Рандомное число для строчки 3:   " +areayBottomText[randBottomText])
    } else {
        let keybord = upText + centerText + bottomText;
        let randKeybord = Math.floor(Math.random() * keybord.length);
        alert("так как строчки такой нету или, не верно введено Выводим рандомное число для строчки для всех строчек:   " + keybord[randKeybord]);
    }

}
    getRandCharInRow()
}

addKeyboardLayout(alphabet)