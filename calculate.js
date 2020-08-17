// Addition a + b
let add = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number')
        throw 'Addition: need 2 number';
    return a + b;
};

// Subtraction a - b
let sub = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number')
        throw 'Subtraction: need 2 number';
    return a - b;
};

// Multiplication a * b
let mul = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number')
        throw 'Multiplication: need 2 number';
    return a * b;
};

// Division a / b
let div = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number')
        throw 'Division: need 2 number';

    if (b === 0) throw 'Division: Denominator cannot be 0';

    return a / b;
};
