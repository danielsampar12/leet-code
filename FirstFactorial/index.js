function FirstFactorial(num) {
  return num === 1 ? num : num * FirstFactorial(num - 1);
}

const result = FirstFactorial(4);

console.log(result);
