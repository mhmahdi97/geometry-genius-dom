//function for getting input field value
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

// // function for getting text element
// function getTextElementValueById(elementId) {
//   const textElement = document.getElementById(elementId);
//   const textElementValueString = textElement.innerText;
//   const textElementValue = parseFloat(textElementValueString);
//   return textElementValue;
// }

// function for getting text element
function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValue = textElement.innerText;
  return textElementValue;
}

// function for set text element
function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

// function for inpput field validation
let checkValidation = true;
function inputfieldValidation(input1, input2) {
  if (isNaN(input1) || isNaN(input2)) {
    alert("Please provide a valid number!!!");
    checkValidation = false;
    return checkValidation;
  } else if (input1 < 0 || input2 < 0) {
    alert("Please provide a positive number!!!");
    checkValidation = false;
    return checkValidation;
  } else {
    return checkValidation;
  }
}

// fucntion for calculating area of triangle, rhombus and pentagon
function areaCalculationWithHalf(p1, p2) {
  const area = 0.5 * p1 * p2;
  return area.toPrecision(2);
}

// function for calculating rectangle area of rectangle and parallelogram
function areaCalculatinWithTwoParam(p1, p2) {
  const area = p1 * p2;
  return area.toPrecision(2);
}

// function for calculating ellipse area
function ellipseAreaCalculation(a, b) {
  const area = 3.1416 * a * b;
  return area.toPrecision(2);
}

console.log(ellipseAreaCalculation(2.2321, 1.2321));
