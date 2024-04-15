const nums = [3,2,4]
const target = 6

function twoSum(array, target) {
  let dictionary = {}

  for (let i = 0; i < array.length; i++) {
    if (dictionary[array[i]]) {
      return [dictionary[array[i]], i]
    }

    dictionary = {
      ...dictionary,
      [target - array[i]]: i
    }
  }

}

const result = twoSum(nums, target)

console.log(result)