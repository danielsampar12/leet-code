const input = [0, -2, -2, 5, 5, 5];

function DistinctList(arr) {
  const set = new Set(arr);

  return arr.length - set.size;
}

const result = DistinctList(input);
console.log(result);
