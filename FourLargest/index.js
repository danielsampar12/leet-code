const questionArray = [4, 5, -2, 3, 1, 2, 6, 6];

function FourLargest(arr) {
  if (!arr.length) {
    return -1;
  }

  let result = 0;

  if (arr.length <= 4) {
    for (let i = 0; i < arr.length; i++) {
      result = result + arr[i];
    }

    return result;
  }

  arr.sort((a, b) => b - a);

  for (let i = 0; i < 4; i++) {
    result = result + arr[i];
  }

  return result;
}

const result = FourLargest(questionArray);

console.log(result);
