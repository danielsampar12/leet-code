function dfs(node, adjList, visited) {
  if (visited[node]) return 0;

  visited[node] = true;

  for(let neighbours of adjList[node]) {
    dfs(neighbours, adjList, visited)
  }

  return 1;
}


const buildAdjList = (isConnected) => {
  let adj = {}

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1) {
        if (!adj[i]) {
          adj[i] = [j]
        } else {
          adj[i].push(j);
        }
      }
    }
  }


  return adj
}

let numOfProvinces = function(isConnected) {
  const adjList = buildAdjList(isConnected);
  const visited = {};
  let provinces = 0;

  for (let k in adjList) {
    let key = +k;
    provinces = provinces + dfs(key, adjList, visited)
  }

  return provinces;
}


const buildAdjListWithArrayFn = (isConnected) => {
  return isConnected.reduce((acc, curr, i) => {
    const neighbours = curr.flatMap((connected, cityIndex) => {
      if (connected === 1) {
        return cityIndex;
      }

      return []
    })

    return {
      ...acc,
      [i]: neighbours
    }
  }, {})
}

let numOfProvincesWithArrayFn = function(isConnected) {
  const adjList = buildAdjListWithArrayFn(isConnected)
  const visited = {};

  return Object.keys(adjList).reduce((acc, k) => {
    const key = +k;
    return acc + dfs(key, adjList, visited);
  }, 0)
}


module.exports = { numOfProvinces, numOfProvincesWithArrayFn }