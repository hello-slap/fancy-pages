var calcNums = document.querySelectorAll('.numbtn div');
for (var i = 0; i < calcNums.length; i++) {
    calcNums[i].addEventListener("click", function(p) { pushToOutput(p.currentTarget.innerText); });
}

var calcOps = document.querySelectorAll('.opsbtns div');
for (var i = 0; i < calcOps.length; i++) {
    calcOps[i].addEventListener("click", function(p) { pushToOutput(p.currentTarget.title); });
}

document.getElementById('equals').addEventListener("click", function() { calculate(); });
document.getElementById('reset').addEventListener("click", function() { reset(); });

function pushToOutput(value) {
    document.getElementById("output").innerText += value;
}

function calculate() {
    try{
        const output = document.getElementById("output");
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
    document.getElementById("output").innerText = "";
}