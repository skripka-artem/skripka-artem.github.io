
const tops ="qwertyuiop[]".split("");
const center ="asdfghjkl;'".split("");
const bottom ="zxcvbnm,./".split("")
const buttonsCont = {
    note :  ['do','re','mi','fa','sol','la','la','sol','fa','mi','re','do','do','re','mi','fa','sol','la','la','sol','fa','mi','re','do','re','mi','fa','sol','sol','fa','mi','re','do'],
    button: [tops,center,bottom]
};

const root = document.getElementById("root");
const html = document.querySelector('#buttons').textContent.trim()
const compiled = _.template(html)
const result = compiled()
root.innerHTML += result

const playSound = function (note) {
    const audio = document.querySelector("audio[data-note=" +note);
    audio.currentTime = 0;
    audio.play();
}

const buttons = Array.from(document.querySelectorAll("button"));

const label = document.querySelector("label")
const input = document.querySelector("input")
const checked = {
    node: null,
    sound: true
}
function onDown(e) {
    let  keyCode =(String.fromCharCode(e.keyCode)).toLowerCase()
    switch (e.keyCode) {
        case 32:
            keyCode = "space"
            break
        case 186:
            keyCode = ";"
            break
        case 188:
            keyCode = ","
            break
        case 190:
            keyCode = "."
            break
        case 191:
            keyCode = "/"
            break
        case 219:
            keyCode = "["
            break
        case 221:
            keyCode = "]"
            break;
        case 222:
            keyCode = "'"
            break
    }
    for ( i of buttons) {
        if (i.textContent === keyCode) {
            if (checked.node !== null) {
                checked.node.classList.remove("keyboard__btn--active")
            }
            i.classList.add("keyboard__btn--active")
            checked.node = i
            const note = i.getAttribute("data-note")
            if (checked.sound === true) {
                playSound(note)
            }
        }
    }
}
function sound() {
    if (input.checked) {
        checked.sound = false
    } else {
        checked.sound = true
    }
}
window.addEventListener("keydown", onDown)
label.addEventListener("click", sound);