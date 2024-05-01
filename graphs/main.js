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

// const prereqsPossible = (numCourses, prereqs) => {
//   let graph = buildGraph(numCourses, prereqs);
//   const visiting = new Set();
//   const visited = new Set();

//   for (let node in graph) {
//     if(cycleDetect(graph, node, visiting, visited) === true){
//       return false;
//     }
//   }

//   return true;
// };

// function cycleDetect(graph, node, visiting, visited) {
//   if (visiting.has(node)) return true;
//   visiting.add(node);

//   for (let neighbor of graph[node]) {
//     if (cycleDetect(graph, neighbor, visiting, visited) === true) {
//       return true;
//     }
//   }

//   visiting.delete(node);
//   visited.add(node);

//   return false;
// }

// function buildGraph(numCourses, prereqs) {
//   const graph = {};

//   for (let i = 0; i < numCourses; i++) {
//     graph[i] = [];
//   }

//   for (let prereq of prereqs) {
//     const [a, b] = prereq;
//     graph[a].push(b);
//   }


//   return graph;
// }

// const numCourses = 6;
// const prereqs = [
//   [0, 1],
//   [2, 3],
//   [0, 2],
//   [1, 3],
//   [4, 5],
// ];
// prereqsPossible(numCourses, prereqs); // -> true




// const foo = [
//   [r + 2, c + 1],
//   [r + 2, c - 1],
//   [r + 1, c + 2],
//   [r - 1, c + 2],
//   [r - 2, c + 1],
//   [r - 2, c - 1],
//   [r + 1, c - 2],
//   [r - 1, c - 2],
// ]

// const tribonacci = (n, memo = {}) => {
//   if ( n === 1 || n === 0) return 0;
//   if (n === 2) return 1;

//   if (n in memo) return memo[n];

//   memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);

//   return memo[n];
// };

// tribonacci(0); // -> 0

const minChange = (amount, coins) => {
  const result = _minChange(amount, coins);
  return result === Infinity ? -1 : result;
};

function _minChange(amount, coins, memo = {}) {
  if (amount < 0) return Infinity;
  if (amount === 0) return 0;
  if (amount in memo) return memo[amount];


  let minCoins = Infinity;
  for (let coin of coins) {
    const numCoins = 1 + _minChange(amount - coin, coins, memo);
    minCoins = Math.min(minCoins, numCoins);
  }
  memo[amount] = minCoins;
  return minCoins;
}

const countPaths = (grid, r = 0, c = 0, memo = {}) => {
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  if (r === grid.length || c === grid[0].length || grid[r][c] === 'X') return 0;
  if (r === grid.length - 1 && c === grid[0].length - 1) return 1;


  return memo[pos] = countPaths(grid, r + 1, c, memo) + countPaths(grid, r, c + 1, memo);
};

/**
 * Function to calculate the least intervals required to execute tasks.
 * @param {character[]} tasks - Array of tasks represented by characters.
 * @param {number} n - Cooldown interval for tasks.
 * @returns {number} - The least number of intervals needed to finish all tasks.
 */
const leastInterval = function(tasks, n) {
  // Array to store frequencies of each task
  const freq = Array(26).fill(0);

  // Count frequencies of each task
  for (let task of tasks) {
      freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
}

  // Sort frequencies in descending order
  freq.sort((a, b) => b - a);

  // Calculate the maximum number of chunks
  const maxChunk = freq[0] - 1;

  // Calculate total idle slots
  let idleSlots = maxChunk * n;

  // Distribute remaining tasks into idle slots
  for (let i = 1; i < 26; i++) {
      idleSlots -= Math.min(maxChunk, freq[i]);
  }

  // If idle slots are negative, no need for idle time
  if (idleSlots < 0) {
      return tasks.length;
  } else {
      // Return total tasks plus idle slots
      return tasks.length + idleSlots;
  }
};

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
/*
sort approach:
- need to compute all distances, we can just omit the sqrt and just do x^2 + y^2
- need to sort by the distance: best: n log(n)
- do quicksort with a custom sorting function, then take the first k elements from the array
runtime: O(N log(N))
space: O(1)
*/
var kClosest = function(points, K) {
    points.sort((a,b) => (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]))

    return points.slice(0,K)
};

/*
min heap approach:
we can create a minHeap of the whole data set in O(n) time if we start from n/2 and heapify down each parent (see floyd method https://en.wikipedia.org/wiki/Binary_heap#Building_a_heap)

then we remove k times from the heap -> k * log(n) (need to heapify down on each removal)
runtime: O(N + k log (N))
space: O(1) since we are doing it in place
*/
var kClosest = function(points, k) {
    // we can build the heap in place
    let p = Math.floor((points.length - 2) / 2) // last parent
    for(let i = p; i >= 0; i--) {
        heapifyDown(points, i, distance)
    }

    // now we need to remove the smallest (points[0]) k times
    let solution = []
    for(let i=0; i<k; i++) {
        solution.push(remove(points, distance))
    }

    return solution

    // read 0, replace 0 with last position, heapifyDown
    function remove(heap, weightFunction) {
        let val = heap[0]
        heap[0] = heap.pop()
        heapifyDown(heap, 0, weightFunction)
        return val
    }

    // compare with children, swap with smallest, repeat
    function heapifyDown(heap, idx, weightFunction) {
        let left = 2*idx + 1
        let right = 2*idx + 2
        let smallest = left

        if(left >= heap.length) return

        if(right < heap.length && weightFunction(heap[left]) > weightFunction(heap[right])) {
            smallest = right
        }

        if (weightFunction(heap[idx]) > weightFunction(heap[smallest])) {
            [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]]
            heapifyDown(heap, smallest, weightFunction)
        }
    }

    function distance(point) {
        return point[0] * point[0] + point[1] * point[1]
    }
}


/*
max heap approach:
have a max heap of size k, so we would do N insertions that take log(k)
for this case we would need to implement heapify up (insert) and heapify down (remove)

runtime: O(N log(k))
space: O(k)
*/
var kClosest = function(points, k) {
    let heap = []

    // now we need to try to add all points to the heap
    for(let i=0; i<points.length; i++) {
        if(heap.length >= k && distance(points[i]) > distance(heap[0])) { // it's bigger than the max, we can just skip it
            continue
        }
        add(heap, points[i], distance)
        if(heap.length > k) {
            remove(heap, distance)
        }
    }

    return heap

    // add at end, heapify up
    function add(heap, node, weightFunction) {
        heap.push(node)
        heapifyUp(heap, heap.length - 1, weightFunction)
    }

    // compare with parent and swap if needed, repeat
    function heapifyUp(heap, idx, weightFunction) {
        if(idx === 0) return
        let parent = Math.floor((idx-1) / 2)
        if(weightFunction(heap[idx]) > weightFunction(heap[parent])) {
            [heap[idx], heap[parent]] = [heap[parent], heap[idx]]
            heapifyUp(heap, parent, weightFunction)
        }
    }

    // read 0, replace 0 with last position, heapifyDown
    function remove(heap, weightFunction) {
        let val = heap[0]
        heap[0] = heap.pop()
        heapifyDown(heap, 0, weightFunction)
        return val
    }

    // compare with children, swap with biggest, repeat
    function heapifyDown(heap, idx, weightFunction) {
        let left = 2*idx + 1
        let right = 2*idx + 2
        let biggest = left

        if(left >= heap.length) return

        if(right < heap.length && weightFunction(heap[left]) < weightFunction(heap[right])) {
            biggest = right
        }

        if (weightFunction(heap[idx]) < weightFunction(heap[biggest])) {
            [heap[idx], heap[biggest]] = [heap[biggest], heap[idx]]
            heapifyDown(heap, biggest, weightFunction)
        }
    }

    function distance(point) {
        return point[0] * point[0] + point[1] * point[1]
    }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  while(stones.length>1){
      stones.sort((a,b)=>b-a); //sort the remaining stones in decending order;
      stones[1]=stones[0]-stones[1]; //smash the first and second stones ie the stones with largest weight ans assign the remaining stone weight to 1st index
      stones.shift();//shift the array to get rid of the 0 index
  }
  return stones[0] //return the 0 index value ie the resultl
};
