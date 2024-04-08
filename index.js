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
        const sanitizedInput = display.value.replace(/[^\d.+*/()-]/g, "");
        display.value = eval(sanitizedInput);
    }
    catch(error) {
        clearDisplay();
    }
}

function clearDisplay() {
    display.value = "";
}