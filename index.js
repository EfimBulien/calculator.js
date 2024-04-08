const display = document.getElementById("display")

function displaySymbol(input) {
    try {
        display.value += input;
    } catch(error) {
        display.value = input;
    }
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error) {
        clearDisplay();
    }
}

function clearDisplay() {
    display.value = "";
}
