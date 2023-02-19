//function for getting input field value
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  if (inputFieldValueString === "" || inputFieldValueString === "") {
    return "";
  }
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

// function for getting text element
function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValue = textElement.innerText;
  return textElementValue;
}

// serial counter for result item
let serial = 0;
// function for set the result to the result area
function setResult(shapeName, shapeArea) {
  serial++;
  const tableContainer = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}.</td>
    <td>${shapeName} </td>
    <td>${shapeArea}<span>cm<sup>2</sup></span></td>
    <td><button>Convert to m<sup>2</sup></button></td>
    `;
  tableContainer.appendChild(tr);
}

// function for inpput field validation
function inputFieldValidation(input1, input2) {
  if (input1 === "" && !isNaN(input2)) {
    alert("Please complete your input!!!");
    return false;
  } else if (!isNaN(input1) && input2 === "") {
    alert("Please complete your input!!!");
    return false;
  } else if (input1 === "" && input2 === "") {
    alert("Please put your values as input then click!!!");
    return false;
  } else if (
    (isNaN(input1) && !isNaN(input2)) ||
    (!isNaN(input1) && isNaN(input2)) ||
    (isNaN(input1) && isNaN(input2))
  ) {
    alert("Please provide a valid number, not text!!!");
    return false;
  } else if (input1 < 0 || input2 < 0) {
    alert("Please provide a positive number!!!");
    return false;
  } else {
    return true;
  }
}

// functions for generate random  rgb-color
function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

// fucntion for calculating area of triangle, rhombus and pentagon
function areaCalculationWithHalf(p1, p2) {
  const area = 0.5 * p1 * p2;
  return area.toFixed(2);
}

// function for calculating rectangle area of rectangle and parallelogram
function areaCalculationWithTwoParam(p1, p2) {
  const area = p1 * p2;
  return area.toFixed(2);
}

// function for calculating ellipse area
function ellipseAreaCalculation(a, b) {
  const area = 3.1416 * a * b;
  return area.toFixed(2);
}
