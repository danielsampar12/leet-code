function Division(num1, num2) {
  if (num1 === 1 && num2 === 1) return 1;

  let highest = 0;
  let limit = Math.min(num1, num2);

  for (let i = 0; i <= limit; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      highest = i;
    }
  }

  return highest;
}
