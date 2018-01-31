const keyboard = {
    layouts: {
        en: {
            topRow: ["qwertyuiop[]", "hhh", "hhh"],
            middleRow: ["asdfghjkl;'"],
            bottomRow: ["zxcvbnm,./"]
        },
        ru: {
            topRow: ["йцукенгшщзхъ"],
            middleRow: ["фывапролджэ"],
            bottomRow: ["ячсмитьбю."]
        },
        ua: {
            topRow: ["йцукенгшщзхї"],
            middleRow: ["фівапролджє"],
            bottomRow: ["ячсмитьбю."]
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

function randomProgram() {
    const language = prompt("введите язык для тренировки. en, ru, ua");
    if ((language === "ru") || (language === "ua") || (language === "en") ) {
    for (var keys in keyboard.layouts) {
        if (keys === language) {
            keyboard.currentLang = language;
            const arrey = keyboard.layouts[keys].topRow + keyboard.layouts[keys].middleRow + keyboard.layouts[keys].bottomRow;
            const rand = Math.floor(Math.random() * arrey.length);
            alert(arrey[rand]);
            keyboard.currentLang = language;
        }
    }
    }
    else {
        alert("Не верный язык")
        randomProgram()
    }

}

randomProgram()
