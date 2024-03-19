function generateSparseArray(length, density) {
  const arr = new Array(length);
  for (let i = 0; i < length; i++) {
    if (Math.random() < density) {
      arr[i] = Math.floor(Math.random() * 150);
    }
  }
  return arr;
}
function displayArray(array, headerText) {
  const outputDiv = document.getElementById("arrayOutput");
  outputDiv.innerHTML +=
    "<h3>" + headerText + ":</h3><p>" + array.join(", ") + "</p>";
}

function sortSparseArrayWithDeletions() {
  const sparseArray = generateSparseArray(100, 0.8);
  console.log("Sparse Array Sorting (undefined elements will be removed)");
  console.log("Array :", sparseArray);
  displayArray(sparseArray, "Array");
  $ArraySorting.BubbleSorting(sparseArray.slice(), true);
  $ArraySorting.BubbleSorting(sparseArray.slice(), false);
  $ArraySorting.minimalElementSorting(sparseArray.slice(), true);
  $ArraySorting.minimalElementSorting(sparseArray.slice(), false);
  $ArraySorting.insertionSorting(sparseArray.slice(), true);
  $ArraySorting.insertionSorting(sparseArray.slice(), false);
  $ArraySorting.shellSorting(sparseArray.slice(), true);
  $ArraySorting.shellSorting(sparseArray.slice(), false);
  $ArraySorting.quickSorting(sparseArray.slice(), true);
  $ArraySorting.quickSorting(sparseArray.slice(), false);
  displayArray(
    $ArraySorting.BubbleSorting(sparseArray.slice(), true),
    "Sorted Array (ascending)"
  );
  displayArray(
    $ArraySorting.BubbleSorting(sparseArray.slice(), false),
    "Sorted Array (descending)"
  );
}
function sortSparseArrayWithMoveToEnd() {
  const sparseArray = generateSparseArray(100, 0.8);
  console.log(
    "Sparse Array Sorting (undefined elements will be placed to end of array)"
  );
  console.log("Array :", sparseArray);
  displayArray(sparseArray, "Array");
  $ArraySorting.BubbleSorting(sparseArray.slice(), true, false);
  $ArraySorting.BubbleSorting(sparseArray.slice(), false, false);
  $ArraySorting.minimalElementSorting(sparseArray.slice(), true, false);
  $ArraySorting.minimalElementSorting(sparseArray.slice(), false, false);
  $ArraySorting.insertionSorting(sparseArray.slice(), true, false);
  $ArraySorting.insertionSorting(sparseArray.slice(), false, false);
  $ArraySorting.shellSorting(sparseArray.slice(), true, false);
  $ArraySorting.shellSorting(sparseArray.slice(), false, false);
  $ArraySorting.quickSorting(sparseArray.slice(), true, false);
  $ArraySorting.quickSorting(sparseArray.slice(), false, false);
  displayArray(
    $ArraySorting.BubbleSorting(sparseArray.slice(), true, false),
    "Sorted Array (ascending)"
  );
  displayArray(
    $ArraySorting.BubbleSorting(sparseArray.slice(), false, false),
    "Sorted Array (descending)"
  );
}
function sortSparseArray() {
  const sortingType = document.querySelector(
    'input[name="sortingType"]:checked'
  ).value;

  switch (sortingType) {
    case "deleteUndefined":
      sortSparseArrayWithDeletions();
      break;
    case "moveToEnd":
      sortSparseArrayWithMoveToEnd();
      break;
    default:
      break;
  }
}

function sortDenseArray() {
  const denseArray = generateSparseArray(100, 1);
  console.log("Dense Array Sorting");
  console.log("Array :", denseArray);
  displayArray(denseArray, "Array");
  $ArraySorting.BubbleSorting(denseArray.slice(), true);
  $ArraySorting.BubbleSorting(denseArray.slice(), false);
  $ArraySorting.minimalElementSorting(denseArray.slice(), true);
  $ArraySorting.minimalElementSorting(denseArray.slice(), false);
  $ArraySorting.insertionSorting(denseArray.slice(), true);
  $ArraySorting.insertionSorting(denseArray.slice(), false);
  $ArraySorting.shellSorting(denseArray.slice(), true);
  $ArraySorting.shellSorting(denseArray.slice(), false);
  $ArraySorting.quickSorting(denseArray.slice(), true);
  $ArraySorting.quickSorting(denseArray.slice(), false);
  displayArray(
    $ArraySorting.BubbleSorting(denseArray.slice(), true, false),
    "Sorted Array (ascending)"
  );
  displayArray(
    $ArraySorting.BubbleSorting(denseArray.slice(), false, false),
    "Sorted Array (descending)"
  );
}
function clearConsole() {
  const outputDiv = document.getElementById("arrayOutput");
  outputDiv.innerHTML = "";
  console.clear();
}
