(() => {
    const calcNums = document.querySelectorAll('.numbtn div');
    for (const calcNum of calcNums) {
        calcNum.addEventListener("click", function (p) { pushToOutput(p.currentTarget.innerText); });
    }

    const calcOps = document.querySelectorAll('.opsbtns div');
    for (const calcOp of calcOps) {
        calcOp.addEventListener("click", function (p) { pushToOutput(p.currentTarget.title); });
    }

    document.getElementById('equals').addEventListener("click", calculate);
    document.getElementById('reset').addEventListener("click", reset);

    function pushToOutput(value) {
        document.getElementById("output").innerText += value;
    }

    function calculate() {
        const output = document.getElementById("output");
        output.innerText = eval(output.innerText);
    }

    function reset() {
        document.getElementById("output").innerText = "";
    }
})()