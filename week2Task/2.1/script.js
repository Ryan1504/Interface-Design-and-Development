// Calculator functionality
const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value); //Perform calculation
  } catch (error) {
    display.value = "Error";
  }
}
