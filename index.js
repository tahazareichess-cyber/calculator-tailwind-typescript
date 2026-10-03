"use strict";
const display = document.getElementById("calculatorView");
function showDisplay(a) {
    display.value += a.toString();
}
function clearDisplay() {
    display.value = "";
}
function calculates() {
    display.value = eval(display.value);
}
