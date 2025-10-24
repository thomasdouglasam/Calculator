let buffer = "0";
let previousOperator = null;
let runningTotal = 0;
let screen = document.querySelector('.screen__text');


function handleNumber (number) {
    if (buffer === "0") {
        buffer = number;
    } else {
        buffer += number;
    }
}

function handleMath (value) {
 
    if (buffer === "0") {
        return;
    }
    
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = value;
    buffer = "0";

}

function flushOperation (intBuffer) {
    if (previousOperator === "+") {
        runningTotal += intBuffer;
    } else if (previousOperator === "-") {
        runningTotal -= intBuffer;
    } else if (previousOperator === "×") {
        runningTotal *= intBuffer;
    } else if (previousOperator === "÷") {
        runningTotal /= intBuffer;
    }
}

function handleSymbol (symbol) {
    switch (symbol) {
        case "C":
            buffer = "0";
            break;
        case "←":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            buffer = "" + runningTotal;
            previousOperator = null;
            runningTotal = 0;
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(symbol);
            break;
    }
    console.log('Symbol')
}

function buttonClick (value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }

    reRender();
}

function init () {
    console.log("works")
    document
    .querySelector('.calc-buttons')
    .addEventListener("click", function (event) {
        buttonClick(event.target.innerText);
    })
}

function reRender () {
    screen.innerText = buffer;
}

init();