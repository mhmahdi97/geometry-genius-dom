// event listeners to blog button to redirect blog page
document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// event listeners to triangle calculate button
document
  .getElementById("calculate-triangle")
  .addEventListener("click", function () {
    // get the data from input fields
    const triangleB = getInputFieldValueById("triangle-b");
    const triangleH = getInputFieldValueById("triangle-h");
    // get text elemenet of the title
    const triangleName = getTextElementValueById("triangle");
    //check input validation
    const isValid = inputFieldValidation(triangleB, triangleH);
    if (!isValid) {
      return;
    }
    // area calculation
    const triangleArea = areaCalculationWithHalf(triangleB, triangleH);
    // set the result to the result area
    setResult(triangleName, triangleArea);
  });

// event listeners to rectangle calculate button
document
  .getElementById("calculate-rectangle")
  .addEventListener("click", function () {
    // get the data from input fields
    const rectangleW = getInputFieldValueById("rectangle-w");
    const rectangleL = getInputFieldValueById("rectangle-l");
    // get text elemenet of the title
    const rectangleName = getTextElementValueById("rectangle");
    //check input validation
    const isValid = inputFieldValidation(rectangleW, rectangleL);
    if (!isValid) {
      return;
    }
    // area calculation
    const rectangleArea = areaCalculationWithTwoParam(rectangleW, rectangleL);
    // set the result to the result area
    setResult(rectangleName, rectangleArea);
  });

// event listeners to parallelogram calculate button
document
  .getElementById("calculate-parallelogram")
  .addEventListener("click", function () {
    // get the data from input fields
    const parallelogramB = getInputFieldValueById("parallelogram-b");
    const parallelogramL = getInputFieldValueById("parallelogram-h");
    // get text elemenet of the title
    const parallelogramName = getTextElementValueById("parallelogram");
    //check input validation
    const isValid = inputFieldValidation(parallelogramB, parallelogramL);
    if (!isValid) {
      return;
    }
    // area calculation
    const parallelogramArea = areaCalculationWithTwoParam(
      parallelogramB,
      parallelogramL
    );
    // set the result to the result area
    setResult(parallelogramName, parallelogramArea);
  });

// event listeners to rhombus calculate button
document
  .getElementById("calculate-rhombus")
  .addEventListener("click", function () {
    // get the data from input fields
    const rhombusD1 = getInputFieldValueById("rhombus-d1");
    const rhombusD2 = getInputFieldValueById("rhombus-d2");
    // get text elemenet of the title
    const rhombusName = getTextElementValueById("rhombus");
    //check input validation
    const isValid = inputFieldValidation(rhombusD1, rhombusD2);
    if (!isValid) {
      return;
    }
    // area calculation
    const rhombusArea = areaCalculationWithHalf(rhombusD1, rhombusD2);
    // set the result to the result area
    setResult(rhombusName, rhombusArea);
  });

// event listeners to pentagon calculate button
document
  .getElementById("calculate-pentagon")
  .addEventListener("click", function () {
    // get the data from input fields
    const pentagonP = getInputFieldValueById("pentagon-p");
    const pentagonB = getInputFieldValueById("pentagon-b");
    // get text elemenet of the title
    const pentagonName = getTextElementValueById("pentagon");
    //check input validation
    const isValid = inputFieldValidation(pentagonP, pentagonB);
    if (!isValid) {
      return;
    }
    // area calculation
    const pentagonArea = areaCalculationWithHalf(pentagonP, pentagonB);
    // set the result to the result area
    setResult(pentagonName, pentagonArea);
  });
// event listeners to pentagon calculate button
document
  .getElementById("calculate-ellipse")
  .addEventListener("click", function () {
    // get the data from input fields
    const ellipseA = getInputFieldValueById("ellipse-a");
    const ellipseB = getInputFieldValueById("ellipse-b");
    // get text elemenet of the title
    const ellipseName = getTextElementValueById("ellipse");
    //check input validation
    const isValid = inputFieldValidation(ellipseA, ellipseB);
    if (!isValid) {
      return;
    }
    // area calculation
    const ellipseArea = areaCalculationWithHalf(ellipseA, ellipseB);
    // set the result to the result area
    setResult(ellipseName, ellipseArea);
  });

// set event listeners to generate random color on cards
// Card-1
document.getElementById("card-1").addEventListener("mouseover", function () {
  const bgColor = generateRGBColor();
  document.getElementById("card-1").style.backgroundColor = bgColor;
});

// card-2
document.getElementById("card-2").addEventListener("mouseover", function () {
  const bgColor = generateRGBColor();
  document.getElementById("card-2").style.backgroundColor = bgColor;
});

// card-3
document.getElementById("card-3").addEventListener("mouseover", function () {
  const bgColor = generateRGBColor();
  document.getElementById("card-3").style.backgroundColor = bgColor;
});

// card-4
document.getElementById("card-4").addEventListener("mouseover", function () {
  const bgColor = generateRGBColor();
  document.getElementById("card-4").style.backgroundColor = bgColor;
});

// card-5
document.getElementById("card-5").addEventListener("mouseover", function () {
  const bgColor = generateRGBColor();
  document.getElementById("card-5").style.backgroundColor = bgColor;
});

// card-6
document.getElementById("card-6").addEventListener("mouseover", function () {
  const bgColor = generateRGBColor();
  document.getElementById("card-6").style.backgroundColor = bgColor;
});
