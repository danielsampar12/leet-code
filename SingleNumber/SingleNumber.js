const a = [1, 2, 2, 1, 3, 3, 4, 4, 5]

var singleNumber = function(nums) {
    const newNums = nums.reduce((accumulator, actual) => {
      return  accumulator.withoutPair.findIndex(item => item === actual) !== -1 
        ? {
            withPair: [
                ...accumulator.withPair,
                actual
            ],
            withoutPair: [
                ...accumulator.withoutPair.filter(item => item !== actual)
            ]
          }
        : {
              withPair: [
                ...accumulator.withPair
            ],
            withoutPair: [
                ...accumulator.withoutPair,
                actual
            ] 
          }
    }, {
      withPair: [],
      withoutPair: []
    })
    return newNums;
};

console.log(...singleNumber(a).withoutPair)