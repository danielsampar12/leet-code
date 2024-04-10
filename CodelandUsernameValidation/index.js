const input1 = "aa_";
const input2 = "u__hello_world123";

function CodelandUsernameValidation(str) {
  if (str.length < 4 || str.length > 25) {
    return false;
  }

  const onlyLetterRegex = /[a-zA-Z]/g;

  if (!str[0].match(onlyLetterRegex)) {
    return false;
  }

  if (str[str.length - 1] === "_") {
    return false;
  }

  return true;
}

const result1 = CodelandUsernameValidation(input1);
const result2 = CodelandUsernameValidation(input2);

console.log(result1);
console.log(result2);
