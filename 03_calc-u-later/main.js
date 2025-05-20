// Select all number buttons and the output div
const calcNums = document.querySelectorAll('.numbtn div');
const output = document.getElementById("output");
// Select all operator buttons (+, -, *, /)
const calcOps = document.querySelectorAll('.opsbtns div');

// Add click event to number buttons to append their text to output
calcNums.forEach(btn => {
    btn.addEventListener("click", () => pushToOutput(btn.innerText));
});

for (var i = 0; i < calcOps.length; i++) {
    calcOps[i].addEventListener("click", function(p) { pushToOutput(p.currentTarget.title); });
}

// Add event listeners for equals and reset buttons
document.getElementById('equals').addEventListener("click", calculate);
document.getElementById('reset').addEventListener("click", reset);


function pushToOutput(value) {
    if (value === '.') {
        if (canAddDecimal()) {
            output.innerText += value;
        }
    } else {
        output.innerText += value;
    }
}

function calculate() {
    try{
        const expr = output.innerText;
        // Evaluate expression safely using Function constructor
        const result = Function(`"use strict"; return (${expr})`)();

        output.innerText = result;
    }
    catch (ex){
        output.innerText = "Error";
        console.error("Invalid expression:", ex);
    }
    
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