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

function clearDisplay() {
  displayValue = "";
  updateDisplay();
  console.log("Display cleared");
}

function toggleSign() {
  if (displayValue === "") return;
  displayValue = displayValue * -1;
  updateDisplay();
  console.log("Sign toggled");
}

function percent() {
  if (displayValue === "") return;
  displayValue = displayValue / 100;
  updateDisplay();
  console.log("Percent toggled");
}
