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
    currentLang: ""
};

(function () {
    const language = prompt("введите язык для тренировки. en, ru, ua");
    for (var keys in keyboard.layouts) {
        if (keys === language) {
            keyboard.currentLang = language;
            console.log(keyboard.currentLang);
            console.log(keyboard);
            const arrey = keyboard.layouts[keys].topRow + keyboard.layouts[keys].middleRow + keyboard.layouts[keys].bottomRow;
            const rand = Math.floor(Math.random() * arrey.length);
            alert(arrey[rand]);
            keyboard.currentLang = language;
        } else {

        }
    }

})();

