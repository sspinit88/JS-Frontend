export function mathOp(a, b, op) {
    switch (op) {
        case '+':
            return sum(a, b);
        case '-':
            return minus(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function divide(a, b) {
    if (b == 0) {
        throw new Error('Ошибка! Деление на ноль!');
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}