const screen = document.querySelector(".screen__text");
const clear = document.querySelector(".clear");
const deletebutton = document.querySelector(".delete");
const zeroButton = document.querySelector(".zero");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");

let input = "";

clear.addEventListener("click", function () {
    screen.innerText = "0";
    input = "";
})

deletebutton.addEventListener("click", function() {
    if (input.length <= 1) {
        screen.innerText = "0";
        input = "";
    } else {
        let newValue = input.slice(0, -1);
        input = newValue;
        screen.innerText = input;
    }
})

zeroButton.addEventListener("click", function () {
    if (input.length >= 1 ) {
        input += "0";
        screen.innerText = input;
    }
})

oneButton.addEventListener("click", function () {
    input += 1;
    screen.innerText = input;
})

twoButton.addEventListener("click", function () {
    input += 2;
    screen.innerText = input;
})

threeButton.addEventListener("click", function () {
    input += 3;
    screen.innerText = input;
})

fourButton.addEventListener("click", function () {
    input += 4;
    screen.innerText = input;
})

fiveButton.addEventListener("click", function () {
    input += 5;
    screen.innerText = input;
})
sixButton.addEventListener("click", function () {
    input += 6;
    screen.innerText = input;
})
sevenButton.addEventListener("click", function () {
    input += 7;
    screen.innerText = input;
})
eightButton.addEventListener("click", function () {
    input += 8;
    screen.innerText = input;
})
nineButton.addEventListener("click", function () {
    input += 9;
    screen.innerText = input;
})