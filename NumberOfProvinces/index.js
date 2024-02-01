const { numOfProvinces, numOfProvincesWithArrayFn } = require('./numOfProvinces') 

const isConnected = [
  [1,1,0],
  [1,1,0],
  [0,0,1]
]

const isConnected2 = [
  [1,0,0],
  [0,1,0],
  [0,0,1]
]

// Expect output: 2
console.log(numOfProvinces(isConnected))

// Expect output: 3
console.log(numOfProvinces(isConnected2))

// Expect output: 2
console.log(numOfProvincesWithArrayFn(isConnected))

// Expect output: 3
console.log(numOfProvincesWithArrayFn(isConnected2))

