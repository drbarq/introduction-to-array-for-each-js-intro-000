// Add your doToElementsInArray() function here:

var evens = [0, 2, 4, 6, 8, 10];

evens.forEach((even, index, array)  => {
  debugger;
  console.log(`${even} is not odd!`);
});


// Add your changeCompletely() function here:

var evens = [0, 2, 4, 6, 8, 10];

function doToEvens(callback) {
  evens.forEach(callback);
}

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}
