// Select all number buttons and the output div
const calcNums = document.querySelectorAll('.numbtn div');
const output = document.getElementById("output");
// Select all operator buttons (+, -, *, /)
const calcOps = document.querySelectorAll('.opsbtns div');

// Add click event to number buttons to append their text to output
calcNums.forEach(btn => {
    btn.addEventListener("click", () => pushToOutput(btn.innerText));
});

calcOps.forEach(btn => {
    btn.addEventListener("click", () => {
        // Get last character of current output
        const lastChar = output.innerText.slice(-1);

        // If last char is already an operator, replace it with the new one
        if ('+-*/'.includes(lastChar)) {
            output.innerText = output.innerText.slice(0, -1) + btn.title;
        } 
        // Otherwise, append operator only if output is not empty
        else if (output.innerText.length > 0) {
            pushToOutput(btn.title);
        }
        // Allow minus operator as first character (for negative numbers)
        else if (btn.title === '-') {
            pushToOutput(btn.title);
        }
    });
});

// Add event listeners for equals and reset buttons
document.getElementById('equals').addEventListener("click", calculate);
document.getElementById('reset').addEventListener("click", reset);

document.addEventListener('keydown', (e) => {
    const allowedKeys = '0123456789+-*/.';
    if (allowedKeys.includes(e.key)) {
        pushToOutput(e.key);
    } else if (e.key === 'Enter') {
        calculate();
    } else if (e.key === 'Backspace') {
        output.innerText = output.innerText.slice(0, -1);
    } else if (e.key.toLowerCase() === 'c') {
        reset();
    }
});


function pushToOutput(value) {
    if (value === '.') {
        if (canAddDecimal()) {
            output.innerText += value;
        }
    } else {
        output.innerText += value;
    }
}

function calculateExpression(expr) {
    try {
        if (!/^[0-9+\-*/. ()]+$/.test(expr)) {
            return {
                result: null,
                error: "Invalid characters detected"
            };
        }

        return {
            // Evaluate expression safely using Function constructor
            result: parseFloat(Function('"use strict";return(' + expr + ')')().toFixed(6)),
            error: null
        };
    } catch (ex) {
        console.error(`Expression evaluation failed: expression: ${expr}`);
        return {
            result: null,
            error: "Invalid expression" 
        };
    }
}

function calculate() {

    const expr = output.innerText;
    if (!expr) return;

    const { result, error } = calculateExpression(expr);

    output.innerText = error ?? result;    
}

function reset() {
    output.innerText = "";
}

function canAddDecimal() {
    // Split current expression by operators to get the last number entered
    const tokens = output.innerText.split(/[\+\-\*\/]/);
    const lastNumber = tokens[tokens.length - 1];
    return !lastNumber.includes('.');
}