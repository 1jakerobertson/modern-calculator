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

/*function multiply(number, secondNumber) {
    return number * secondNumber;
}*/



/*function addition(number, secondNumber) {
    return number + secondNumber;
}

function subtraction(number, secondNumber) {
    return number - secondNumber;
}

function division(number, secondNumber) {
    return number / secondNumber;
}


console.log(multiply(5, 10));*/
