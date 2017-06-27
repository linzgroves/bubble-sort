var arr = [];

function bubbleSort(arr) {
  /* set length of array */
  var len = arr.length - 1;
  /* set outer loop so inner loop can make repeated passes through array */
  for (var i = 0; i < len; i++) {
    /* set inner loop to iterate through array and compare adjacent pairs */
    for (var j = 0; j < len - i; j++) { 
      /* if j is greater than the value next to it, swap elements */
      if (arr[j] > arr[j + 1] ) { 
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  } 
}

bubbleSort(arr);
console.log(arr);
