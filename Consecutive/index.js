// Have the function Consecutive(arr) take the array of integers stored in arr
// and return the minimum number of integers needed to make the contents of
// arr consecutive from the lowest number to the highest number. For
// example: If arr contains [4, 8, 6] then the output should be 2 because two
// numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8.
// Negative numbers may be entered as parameters and no array will have less than 2 elements.

const array = [4, 8, 6];

function consecutive(arr) {
  if (!arr.length) {
    return "Empty array";
  }

  arr.sort();

  const minNum = arr[0];
  const maxNum = arr[arr.length - 1];

  const howMuchUntilMax = maxNum - minNum - 1;

  return howMuchUntilMax - (arr.length - 2);
}

const result = consecutive(array);
console.log(result);

// Time complexity -> O(n logn)
