(function (global) {
  const ArraySorting = {};
  function isSparseArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (!(i in arr)) {
        return true;
      }
    }
    return false;
  }
  function filterSparseArray(arr) {
    return arr.filter(function (element) {
      return element !== undefined;
    });
  }
  function moveUndefinedToEnd(arr) {
    let undefinedCount = 0;
    for (let i = 0; i < arr.length - undefinedCount; i++) {
      if (arr[i] === undefined) {
        arr.push(arr.splice(i, 1)[0]);
        i--;
        undefinedCount++;
      }
    }
    return arr;
  }
  function displayMessage(
    deleteUndefinedELements,
    sortingType,
    ascOrder,
    comparisons,
    exchanges,
    arr,
    wasSparseArray
  ) {
    if (wasSparseArray) {
      console.log(
        ` ${sortingType}: \n ${
          deleteUndefinedELements
            ? "Undefined elements were deleted"
            : "Undefined elements were moved to end of array"
        },\n Type = ${
          ascOrder ? "Ascending" : "Descending"
        },\n Comparisons = ${comparisons},\n Exchanges = ${exchanges}`
      );
    } else {
      console.log(
        ` ${sortingType}: \n Type = ${
          ascOrder ? "Ascending" : "Descending"
        },\n Comparisons = ${comparisons},\n Exchanges = ${exchanges}`
      );
    }

    console.log("Array after sorting: ", arr);
  }
  ArraySorting.BubbleSorting = function (
    array,
    ascOrder = true,
    deleteUndefinedELements = true
  ) {
    let comparisons = 0,
      exchanges = 0;

    if (!Array.isArray(array)) {
      console.error("Input is not an array.");
      return;
    }
    let arr;
    let wasSparseArray = isSparseArray(array);
    if (deleteUndefinedELements) {
      arr = isSparseArray(array) ? filterSparseArray(array) : array;
    } else {
      arr = isSparseArray(array) ? moveUndefinedToEnd(array) : array;
    }
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        comparisons++;
        if (ascOrder ? arr[i] > arr[j] : arr[i] < arr[j]) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          exchanges++;
        }
      }
    }
    displayMessage(
      deleteUndefinedELements,
      "Bubble Sorting",
      ascOrder,
      comparisons,
      exchanges,
      arr,
      wasSparseArray
    );
    return arr;
  };

  ArraySorting.minimalElementSorting = function (
    array,
    ascOrder = true,
    deleteUndefinedELements = true
  ) {
    let comparisons = 0,
      exchanges = 0;

    if (!Array.isArray(array)) {
      console.error("Input is not an array.");
      return;
    }
    let arr;
    let wasSparseArray = isSparseArray(array);
    if (deleteUndefinedELements) {
      arr = isSparseArray(array) ? filterSparseArray(array) : array;
    } else {
      arr = moveUndefinedToEnd(array);
    }
    for (let i = 0; i < arr.length - 1; i++) {
      let minimalIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        comparisons++;
        if (
          ascOrder ? arr[j] < arr[minimalIndex] : arr[j] > arr[minimalIndex]
        ) {
          minimalIndex = j;
        }
      }
      if (minimalIndex !== i) {
        exchanges++;
        [arr[i], arr[minimalIndex]] = [arr[minimalIndex], arr[i]];
      }
    }

    displayMessage(
      deleteUndefinedELements,
      "Minimal Element Sorting",
      ascOrder,
      comparisons,
      exchanges,
      arr,
      wasSparseArray
    );
    return arr;
  };
  ArraySorting.insertionSorting = function (
    array,
    ascOrder = true,
    deleteUndefinedELements = true
  ) {
    let comparisons = 0,
      exchanges = 0;

    if (!Array.isArray(array)) {
      console.error("Input is not an array.");
      return;
    }

    let arr;
    let wasSparseArray = isSparseArray(array);
    if (deleteUndefinedELements) {
      arr = isSparseArray(array) ? filterSparseArray(array) : array;
    } else {
      arr = moveUndefinedToEnd(array);
    }
    let i, key, j;
    for (i = 1; i < arr.length; i++) {
      key = arr[i];
      j = i - 1;

      while (j >= 0 && (ascOrder ? arr[j] > key : arr[j] < key)) {
        comparisons++;
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      exchanges++;
      arr[j + 1] = key;
    }

    displayMessage(
      deleteUndefinedELements,
      "Insertion Sorting",
      ascOrder,
      comparisons,
      exchanges,
      arr,
      wasSparseArray
    );
    return arr;
  };
  ArraySorting.shellSorting = function (
    array,
    ascOrder = true,
    deleteUndefinedELements = true
  ) {
    let comparisons = 0;
    let exchanges = 0;

    if (!Array.isArray(array)) {
      console.error("Input is not an array.");
      return;
    }
    let arr;
    let wasSparseArray = isSparseArray(array);
    if (deleteUndefinedELements) {
      arr = isSparseArray(array) ? filterSparseArray(array) : array;
    } else {
      arr = moveUndefinedToEnd(array);
    }
    const n = arr.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        let temp = arr[i];
        let j = i;
        while (j >= gap) {
          comparisons++;
          if (ascOrder ? arr[j - gap] > temp : arr[j - gap] < temp) {
            exchanges++;
            arr[j] = arr[j - gap];
            j -= gap;
          } else {
            break;
          }
        }
        arr[j] = temp;
      }
      gap = Math.floor(gap / 2);
    }
    displayMessage(
      deleteUndefinedELements,
      "Shell Sorting",
      ascOrder,
      comparisons,
      exchanges,
      arr,
      wasSparseArray
    );
    return arr;
  };
  ArraySorting.quickSorting = function (
    array,
    ascOrder = true,
    deleteUndefinedELements = true
  ) {
    let comparisons = 0;
    let exchanges = 0;

    if (!Array.isArray(array)) {
      console.error("Input is not an array.");
      return;
    }
    let arr;
    let wasSparseArray = isSparseArray(array);
    if (deleteUndefinedELements) {
      arr = isSparseArray(array) ? filterSparseArray(array) : array;
    } else {
      arr = moveUndefinedToEnd(array);
    }
    function partition(arr, low, high) {
      let pivot = arr[high];
      let i = low - 1;

      for (let j = low; j <= high - 1; j++) {
        comparisons++;
        if (ascOrder ? arr[j] < pivot : arr[j] > pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          exchanges++;
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    }

    function quickSort(arr, low, high) {
      if (low >= high) return;
      let pi = partition(arr, low, high);

      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }

    quickSort(arr, 0, arr.length - 1);
    arr = moveUndefinedToEnd(arr);

    displayMessage(
      deleteUndefinedELements,
      "Quick Sorting",
      ascOrder,
      comparisons,
      exchanges,
      arr,
      wasSparseArray
    );
    return arr;
  };
  global.$ArraySorting = ArraySorting;
})(window);
