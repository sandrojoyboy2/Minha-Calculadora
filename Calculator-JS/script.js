let display = document.getElementById("display");
function appendToDisplay(input) {
    if (display.value === "0" ) {
        display.value = input;
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "0";
}

function calculate() {
    display.value = eval(display.value);
  
}
