const display = document.getElementById("calculatorView") as HTMLInputElement;

function showDisplay(a: string | number) {
    display.value += a.toString();
}
function clearDisplay(){
    display.value = "";
}
function calculates(){
    display.value = eval(display.value);
}