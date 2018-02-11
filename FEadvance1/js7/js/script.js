const topRow = 'QWERTYUIOP[]'
const middleRow ='ASDFGHJKL;'
const bottomRow ='ZXCVBNM,./'

function createLayout() {

    const areeyTopRow =  topRow.split("")
    const areeyMiddleRow = middleRow.split("")
    const areeyBottomRow = bottomRow.split("")

    const root = document.getElementById("root");
    const divTop = document.createElement('div');
    root.appendChild(divTop)
    const divMiddle = document.createElement('div');
    root.appendChild(divMiddle)
    const divBottom = document.createElement('div');
    root.appendChild(divBottom)
    divTop.classList.add('container')
    divMiddle.classList.add('container')
    divBottom.classList.add('container')


    for (var i = 0; i < areeyTopRow.length; i++) {
   let keyb = areeyTopRow[i] ;
    const root = document.getElementById("root");
    const button = document.createElement('a');
    button.href="#"
        button.classList.add("element")
    button.textContent =(keyb)
    divTop.appendChild(button)
}

for (var i = 0; i < areeyMiddleRow.length; i++) {
    let keyb = areeyMiddleRow[i] ;
    const button = document.createElement('a');
    button.href="#"
    button.classList.add("element")
    button.textContent =(keyb)
    divMiddle.appendChild(button)
}
for (var i = 0; i < areeyBottomRow.length; i++) {
    let keyb = areeyBottomRow[i] ;
    const root = document.getElementById("root");
    const button = document.createElement('a');
    button.href="#"
    button.classList.add("element")
    button.textContent =(keyb)
    divBottom.appendChild(button)
}}

createLayout()