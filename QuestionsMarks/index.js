const str1 = "aa6?9";
const str2 = "acc?7??sss?3rr1??????5";

function QuestionsMarks(str) {
  let res = "false";

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        res = "true";

        if (str.slice(i, j).split("?").length - 1 < 3) {
          return "false";
        }
      }
    }
  }

  return res;
}

const result1 = QuestionsMarks(str1);
const result2 = QuestionsMarks(str2);

console.log({ result1 });
console.log({ result2 });
