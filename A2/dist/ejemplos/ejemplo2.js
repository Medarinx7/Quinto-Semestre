"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operation = operation;
function operation(params) {
    const { a, b, operator } = params;
    if (operator === '+') {
        return a + b;
    }
    else if (operator === '-') {
        return a - b;
    }
    else if (operator === '*') {
        return a * b;
    }
    else if (operator === '/') {
        return a / b;
    }
    return 0;
}
