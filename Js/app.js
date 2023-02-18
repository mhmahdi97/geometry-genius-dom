// event listeners to blog button to redirect blog page
document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// event listeners to triangle calculate button
document
  .getElementById("calculate-triangle")
  .addEventListener("click", function () {
    const triangleBase = getInputFieldValueById("triangle-b");
    const triangleHeight = getInputFieldValueById("triangle-h");
    // input field validation
    const isValid = inputfieldValidation(triangleBase, triangleHeight);
    const triangleArea = triangleArea(triangleBase, triangleHeight);
  });
