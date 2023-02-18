//function for getting input field value
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

// function for getting text element
function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

// function for set text element
function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

// fucntion for calculating area of triangl
function triangleArea(b, h) {
  return 0.5 * b * h;
}

// function for calculating rectangle area
function rectangleArea(w, l) {
  return w * l;
}

// function for calculating parallelogram area
function parallelogramArea(b, h) {
  return b * h;
}

// function for calculating rhombus area
function rhombusArea(d1, d2) {
  return 0.5 * d1 * d2;
}

// function for calculating pentagon area
function pentagonArea(p, b) {
  return 0.5 * p * b;
}

// function for calculating ellipse area
function ellipseArea(a, b) {
  return 3.1416 * a * b;
}
