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
    var output = document.getElementById("output")
    //ToDo: handle multiple consequent arithmetic operation inputs  like  3///5
    const strippedStr = output.innerText.replace(/[^-\d/*+.]/g, '')
    output.innerText = parse(strippedStr)
}

 /**
  * Direct value evaluation
  * @param {str} string expression to evaluate 
  * @returns evaluated val
  */
function parse(str) {
    return eval(str)
  }
/**
 * Another possibility to evaluate a string in js
 * @param {str} string expression to evaluate 
 * @returns evaluated val
 */
function parse0(str) {
    return Function(`'use strict'; return (${str})`)()
  }
  
function reset() {
    document.getElementById("output").innerText = "";
}