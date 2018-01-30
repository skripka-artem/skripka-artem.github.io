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

var variant = (function () {
    const language = prompt("введите язык для тренировки. en-0, ru-1, ua-2");
    return language
})()

var ory = (function(variant) {
    for (var key in keyboard.langs) {
        if (key === variant) {
            alert(keyboard.langs[key])
            keyboard.currentLang = keyboard.langs[key]
            console.log(keyboard.currentLang)
        }
    }


})(variant)

