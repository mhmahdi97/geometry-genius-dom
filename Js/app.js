// event listeners to blog button to redirect blog page
document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// event listeners to triangle calculate button
document
  .getElementById("calculate-triangle")
  .addEventListener("click", function () {
    // get the data from input fields
    const triangleBase = getInputFieldValueById("triangle-b");
    const triangleHeight = getInputFieldValueById("triangle-h");
    // get text elemenet of the title
    const triangleName = getTextElementValueById("triangle");

    //check input validation
    const isValid = inputFieldValidation(triangleBase, triangleHeight);
    if (!isValid) {
      console.log(!isValid + "Validation is not valid");
      return;
    }

    // area calculation
    const triangleArea = areaCalculationWithHalf(triangleBase, triangleHeight);
    console.log(triangleArea);

    // set the result to the result area
    setResult(triangleName, triangleArea);
  });
