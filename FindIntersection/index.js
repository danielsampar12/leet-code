const input = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

function FindIntersection(strArr) {
  if (strArr.length < 2) {
    return "false";
  }

  const arrayA = strArr[0].split(", ");
  const arrayB = strArr[1].split(", ");

  const result = arrayA.reduce((acc, number) => {
    const intersection = arrayB.find(
      (intersectionNumber) => intersectionNumber === number
    );

    if (!acc.length && intersection) {
      return intersection.toString();
    }

    if (intersection) {
      return `${acc},${intersection}`;
    }

    return acc;
  }, "");

  return result;
}

const result = FindIntersection(input);
console.log(result);
