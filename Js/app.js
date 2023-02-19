// event listeners to blog button to redirect blog page
document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});
let serial = 0;
// event listeners to triangle calculate button
document
  .getElementById("calculate-triangle")
  .addEventListener("click", function () {
    // get the data from input fields
    const triangleBase = getInputFieldValueById("triangle-b");
    const triangleHeight = getInputFieldValueById("triangle-h");
    // const isValid = inputfieldValidation(triangleBase, triangleHeight);
    const triangle = getTextElementValueById("triangle");
    // if (isValid) {
    //   console.log(isValid);
    // } else if (!isValid) {
    //   console.log(!isValid);
    // }
    // area calculation
    const triangleArea = areaCalculationWithHalf(triangleBase, triangleHeight);
    console.log(triangleArea);

    // serial increament
    serial++;

    // set the result to the result area
    const tableContainer = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}.</td>
    <td>${triangle} </td>
    <td>${triangleArea}<span>cm<sup>2</sup></span></td>
    <td><button>Convert to m<sup>2</sup></button></td>
    `;
    tableContainer.appendChild(tr);
  });
