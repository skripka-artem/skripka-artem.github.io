const colorEl = document.querySelector('.controls__stylish');
//console.log(colorEl);

const picker = new Picker(colorEl);

let colorArr = [];
picker.on_done = function (colour) {
    const hexCode = colour.hex().toString();
    //console.log(hexCode);  
    colorArr.push(hexCode);
    console.log(colorArr);
}

colorEl.onclick = function (e) {
    picker.show();
    //e.preventDefault()
};   
