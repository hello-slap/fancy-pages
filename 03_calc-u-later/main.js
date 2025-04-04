const  calcNums = document.querySelectorAll('.numbtn div');
calcNums.forEach(btn => {
    btn.addEventListener("click", () => pushToOutput(btn.innerText));
});

const  calcOps = document.querySelectorAll('.opsbtns div');
calcOps.forEach(btn => {
    btn.addEventListener("click", () => pushToOutput(btn.title));
});

document.getElementById('equals').addEventListener("click", calculate);
document.getElementById('reset').addEventListener("click",  reset);

function pushToOutput(value) {
    document.getElementById("output").innerText += value;
}

function calculate() {
    const output = document.getElementById("output");
    const outputText = output.innerText.trim()

    let result;

    if(outputText.includes("+")){
        const [a,b] =outputText.split("+").map(Number)
        result  = add(a,b) 
    }
    else if(outputText.includes("-")){
        const [a,b] =outputText.split("-").map(Number)
        result  = subtract(a,b)  
    }
    else if(outputText.includes("*")){
        const [a,b]=outputText.split("*").map(Number)
        result  = multiblikation(a,b) 
    }
    else if(outputText.includes("/")){
        const [a,b]=outputText.split("/").map(Number)
        result  = substration(a,b)
    }else{
        result = "Invalid expression";
    }
    // output.innerText = "Not Implemented";
    output.innerText = result
}

function add(num1,num2){
    return num1 + num2

}
function subtract(num1,num2){
    return num1 - num2
    
}
function multiblikation(num1,num2){
    return num1 * num2
}
function substration(num1,num2){
    if(num2 === 0){
        return "Division by 0 not possible";
    }
    else{
        return num1 / num2
        
    }
    
}

function reset() {
    document.getElementById("output").innerText = "";
}
