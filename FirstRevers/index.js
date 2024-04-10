const input = "Hello World";

function FirstReverse(str) {
  let res = "";

  if (!str) return "";

  for (let i = str.length - 1; i > -1; i--) {
    res = res + str[i];
  }
  // code goes here
  return res;
}

const result = FirstReverse(input);
console.log(result);
