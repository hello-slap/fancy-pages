// const instead of var
// forEach instead of for-loop
// Arrow functions
const calcNums = document.querySelectorAll('.numbtn div');
calcNums.forEach(button => {
    button.addEventListener("click", (p) => pushToOutput(p.currentTarget.innerText))
});

const calcOps = document.querySelectorAll('.opsbtns div');
calcOps.forEach(button => {
    button.addEventListener("click", (p) => pushToOutput(p.currentTarget.title));
});

// Direct references to calculate() and reset()
document.getElementById('equals').addEventListener("click", calculate);
document.getElementById('reset').addEventListener("click", reset);

function pushToOutput(value) {
    document.getElementById("output").innerText += value;
}

// Calculate with eval
function calculate() {
    var output = document.getElementById("output");
    output.innerText = eval(output.innerText);
}

function reset() {
    document.getElementById("output").innerText = "";
}
