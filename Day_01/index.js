// Find the two entries that sum to 2020 and then multiply those two numbers together.

function sum2020(arr, total) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        console.log(
          `The items that add up to 2020 are ${arr[i]} and ${arr[j]}`
        );
        return arr[i] * arr[j];
      }
    }
  }
}

module.exports = sum2020;
