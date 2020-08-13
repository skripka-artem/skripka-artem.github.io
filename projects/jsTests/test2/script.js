const add = document.querySelector('[data-action="create"]');
const del = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes');
const input = document.querySelector('input[type="number"]');

const random = () => {
    return Math.floor(Math.random() * 255);
};

const create = (number) => {
    const defaultSize = 30;
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < number; i++) {
        let block = document.createElement('div');
        let size = defaultSize + i * 10;
        block.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgb( ${random()}, ${random()} , ${random()} )`;
        fragment.appendChild(block);
    }
    boxes.appendChild(fragment);
};

const display = () => {
    let number = input.value;
    create(number);
};

const remove = () => {
    boxes.innerHTML = '';
};


add.addEventListener('click', display);
del.addEventListener('click', remove);


