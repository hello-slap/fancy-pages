const calcNums = document.querySelectorAll('.num-button div');
for (let i = 0; i < calcNums.length; i++) {
    calcNums[i].addEventListener("click", function(p) { 
        pushToOutput(p.currentTarget.innerText); 
    });
}

const calcOps = document.querySelectorAll('.ops-buttons-container div');
for (let i = 0; i < calcOps.length; i++) {
    calcOps[i].addEventListener("click", function(p) { 
        pushToOutput(p.currentTarget.title); 
    });
}

document.getElementById('equals').addEventListener("click", function() { 
    calculate(); 
});

document.getElementById('reset').addEventListener("click", function() { 
    reset(); 
});

document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (/^[0-9+\-*\/]$/.test(key)) {
        pushToOutput(key.valueOf())
    } else if (key === "Enter") {
        calculate()
    } else if (key === "Backspace") {
        popFromOutput()
    }
});

function pushToOutput(value) {
    document.getElementById("output").innerText += value;
}

function popFromOutput() {
    let output = document.getElementById("output");
    output.innerText = output.innerText.slice(0, -1);
}

function calculate() {
    const output = document.getElementById("output");
    try {
        output.innerText = eval(output.innerText);
    } catch (error) {
        output.innerText = "Error";
    }
}

function reset() {
    document.getElementById("output").innerText = "";
}