let allEquationBtn = document.querySelectorAll('.num, .sym');
let display = document.querySelector('#display-text');
let equalButton = document.getElementById('equalBtn');
let allCleanButton = document.getElementById('allClean');

display.isFinish = false;

allEquationBtn.forEach((each) => {
    each.addEventListener('click', () => {
        if (display.isFinish) {
            display.textContent = '';
            display.isFinish = false;
        }
        display.textContent += event.target.textContent;
        console.log(display.textContent);
    });
});

equalButton.addEventListener('click', () => {
    try {
        display.textContent = mexp.eval(display.textContent);
    } catch (e) {
        display.innerHTML = 'ERR';
    }
    display.isFinish = true;
});

allCleanButton.addEventListener('click', () => {
    display.textContent = '';
});

// display have size

// change display font size to fix box size
