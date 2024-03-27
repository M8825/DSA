// function hasPath(graph, src, dst) {
//   if (src === dst) return false;

//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst) === true) {
//       return true;
//     }
//   }

//   return false;
// }

// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };

// console.log(hasPath(graph, 'f', 'k')); // true

// const bestBridge = (grid) => {
//   let mainInsland;

//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[0].length; col++) {
//       const possibleIsland = traverseIsland(grid, row, col, new Set());
//       if (possibleIsland.size > 0) {
//         mainInsland = possibleIsland;
//       }
//     }
//   }

//   const visited = new Set(mainInsland);
//   const queue = [];
//   for (let pos of mainInsland) {
//     const [ row, col ] = pos.split(',').map(Number);
//     queue.push([row, col, 0]);
//   }

//   while (queue.length) {
//     const [row, col, distance] = queue.shift();

//     const pos = row + ',' + col;
//     if (grid[row][col] === 'L' && !mainInsland.has(pos)) return distance - 1;

//     const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
//     for (let delta of deltas) {
//       const [ rowDelta, colDelta ] = delta;
//       const rowNeighbor = row + rowDelta;
//       const colNeighbor = col + colDelta;
//       const posNeighbor = rowNeighbor + ',' + colNeighbor;
//       if (isInbounds(grid, rowNeighbor, colNeighbor) && !visited.has(posNeighbor)) {
//         visited.add(posNeighbor);
//         queue.push([ rowNeighbor, colNeighbor, distance + 1]);
//       }
//     }
//   }
// };

// function isInbounds(grid, row, col) {
//   const rowInbound = 0 <= row && row < grid.length;
//   const colInbound = 0 <= col && col < grid[0].length;
//   return rowInbound && colInbound;
// }

// function traverseIsland(grid, row, col, visited) {
//   if (!isInbounds(grid, row, col) || grid[row][col] === 'W') return visited;

//   const pos = row + ',' + col;
//   if (visited.has(pos)) return visited;
//   visited.add(pos);

//   traverseIsland(grid, row - 1, col, visited);
//   traverseIsland(grid, row + 1, col, visited);
//   traverseIsland(grid, row, col - 1, visited);
//   traverseIsland(grid, row, col + 1, visited);

//   return visited;
// }

// const grid = [
//   ["W", "W", "W", "L", "L"],
//   ["L", "L", "W", "W", "L"],
//   ["L", "L", "L", "W", "L"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
// ];
// bestBridge(grid); // -> 1

const prereqsPossible = (numCourses, prereqs) => {
  let graph = buildGraph(numCourses, prereqs);
  const visiting = new Set();
  const visited = new Set();

  for (let node in graph) {
    if(cycleDetect(graph, node, visiting, visited) === true){
      return false;
    }
  }

  return true;
};

function cycleDetect(graph, node, visiting, visited) {
  if (visiting.has(node)) return true;
  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (cycleDetect(graph, neighbor, visiting, visited) === true) {
      return true;
    }
  }

  visiting.delete(node);
  visited.add(node);

  return false;
}

function buildGraph(numCourses, prereqs) {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
  }


  return graph;
}

const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
prereqsPossible(numCourses, prereqs); // -> true
