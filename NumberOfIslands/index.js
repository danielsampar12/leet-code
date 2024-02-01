const { numOfIslands } = require('./numOfIslands') 

const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];

const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

// Expect output: 1
console.log(numOfIslands(grid))

// Expect output: 3
console.log(numOfIslands(grid2))
