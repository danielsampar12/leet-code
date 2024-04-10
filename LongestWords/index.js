const str1 = "I love dogs";
const str2 = "fun&!! time";

function LongestWord(sen) {
  let res = "";

  const strArray = sen.split(" ");

  for (let i = 0; i < strArray.length; i++) {
    const hasSpecialChar = strArray[i].match(/[^a-zA-Z0-9]/g);
    if (!hasSpecialChar) {
      if (res.length < strArray[i].length) {
        res = strArray[i];
      }
    }
  }

  return res;
}

const result1 = LongestWord(str1);
const result2 = LongestWord(str2);
console.log(result1);
console.log(result2);
