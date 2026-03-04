// calculator logic

// sanity check
console.log("Hello World");


// update display
let displayValue = "";

function updateDisplay() {
  if (displayValue === "") {
    document.getElementById("display").innerHTML = "0";
  } else {
    document.getElementById("display").innerHTML = displayValue;
  }
}

// append numbers
function appendNumber(number) {
  if (displayValue.length >= 8) return;
  displayValue += number;
  updateDisplay();
  console.log(number);
}

// clear display
function clearDisplay() {
  displayValue = "";
  updateDisplay();
  console.log("Display cleared");
}

// toggle sign
function toggleSign() {
  if (displayValue === "") return;
  displayValue = displayValue * -1;
  updateDisplay();
  console.log("Sign toggled");
}

// percent
function percent() {
  if (displayValue === "") return;
  displayValue = displayValue / 100;
  updateDisplay();
  console.log("Percent toggled");
}

// append operator
function appendOperator(operator) {
  if (
    displayValue !== "" &&
    !isNaN(displayValue.charAt(displayValue.length - 1))
  ) {
    displayValue += operator;
    updateDisplay();
    console.log(operator + " appended");
  }
}

//calculate
function calculate() {
  if (
    displayValue !== "" &&
    !isNaN(displayValue.charAt(displayValue.length - 1))
  ) {
    try {
      const result = eval(displayValue);
      displayValue = result.toString();
      updateDisplay();
    } catch (error) {
      displayValue = "Error";
      updateDisplay();
    }
  }
}
