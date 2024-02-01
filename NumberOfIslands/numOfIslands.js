
const dfs = (i, j, grid) => {
  if (
    i < 0 
    || i > grid.length - 1 
    || j < 0 
    || j > grid[i].length - 1 
    || grid[i][j] === '0' 
  ) {
    return;
  }

  grid[i][j] = '0';

  dfs(i - 1, j, grid)
  dfs(i + 1, j, grid)
  dfs(i, j - 1, grid)
  dfs(i, j + 1, grid)


  return 1;
}

let numOfIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count = count + dfs(i, j, grid);
      }
    }
  }

  return count;
}

module.exports = { numOfIslands }