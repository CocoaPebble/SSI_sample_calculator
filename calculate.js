let allEquationBtn = document.querySelectorAll('.num, .sym');
let display = document.querySelector('.display');
let equalButton = document.getElementById('equalBtn');
let allCleanButton = document.getElementById('allClean');

display.isFinish = false;

allEquationBtn.forEach((each) => {
    each.addEventListener('click', () => {
        if (display.isFinish) {
            display.innerText = '';
            display.isFinish = false;
        }
        display.innerText += event.target.innerText;
    });
});

equalButton.addEventListener('click', () => {
    try {
        display.innerText = mexp.eval(display.innerText);
    } catch (e) {
        display.innerHTML = 'ERR';
    }
    display.isFinish = true;
});

allCleanButton.addEventListener('click', () => {
    display.innerText = '';
});
