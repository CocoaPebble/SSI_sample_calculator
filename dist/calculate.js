'use strict';

let allEquationBtn = document.querySelectorAll('.num, .sym');
let display = document.querySelector('#display-text');
let displayContainer = document.querySelector('.display-container');
let equalButton = document.getElementById('equalBtn');
let delButton = document.getElementById('delBtn');
let allCleanButton = document.getElementById('allClean');

const calculatorWidth = 400;
const defaultDisplayFontSize = 75;
const displayMaxLength = 16;

display.isFinish = false;
let setDisplayFontSize = () => {
    if (display.textContent.length <= 8)
        display.style.fontSize = `${defaultDisplayFontSize}px`;
    else if (display.textContent.length > 8 && display.textContent.length < 12)
        display.style.fontSize = `${defaultDisplayFontSize * 0.75}px`;
    else display.style.fontSize = `${defaultDisplayFontSize * 0.5}px`;
};

allEquationBtn.forEach((each) => {
    each.addEventListener('click', () => {
        if (display.isFinish) {
            display.textContent = '';
            display.isFinish = false;
            display.style.fontSize = `${defaultDisplayFontSize}px`;
        }
        // maximize display length
        if (display.textContent.length == displayMaxLength) return;
        display.textContent += event.target.textContent;

        // calculate font size
        setDisplayFontSize();
    });
});

equalButton.addEventListener('click', () => {
    try {
        display.textContent = mexp.eval(display.textContent);

        // maximize display length
        if (display.textContent.length > displayMaxLength) {
            display.textContent = display.textContent.slice(0, -1);
        }
        // calculate font size
        setDisplayFontSize();
    } catch (e) {
        display.innerHTML = 'ERR';
    }
    display.isFinish = true;
});

allCleanButton.addEventListener('click', () => {
    display.textContent = '';
    // set default size
    display.style.fontSize = `${defaultDisplayFontSize}px`;
});

delButton.addEventListener('click', () => {
    if (display.textContent.length !== 0) {
        display.textContent = display.textContent.slice(0, -1);
    }
    setDisplayFontSize();
});

document.addEventListener('keydown', (e) => {
    let { key } = e;
    console.log(key);
    if (!isNaN(+key)) {
        document
            .querySelector(`#num-${key}`)
            .dispatchEvent(new MouseEvent('click'));
        return;
    }

    let sym = { '+': 'add', '-': 'sub', '*': 'mul', '/': 'div', '!': 'fac' };
    if (key in sym) {
        document
            .querySelector(`#sym-${sym[key]}`)
            .dispatchEvent(new MouseEvent('click'));
        return;
    }

    if (key === '=' || key === 'Enter') {
        equalButton.dispatchEvent(new MouseEvent('click'));
        return;
    }

    if (key === '.') {
        document
            .querySelector(`#num-point`)
            .dispatchEvent(new MouseEvent('click'));
        return;
    }

    if (key == 'Backspace') {
        delButton.dispatchEvent(new MouseEvent('click'));
        return;
    }
});
