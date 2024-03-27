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

const semestersRequired = (numCourses, prereqs) => {
  const graph = buildGrap(numCourses, prereqs);
  const distance = {};

  for (let course in graph) {
    if (graph[course].length === 0) distance[course] = 1;
  }

  for (let node in graph) {
    traverseGraph(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
};

function traverseGraph(graph, node, distance) {
  if (node in distance) return distance[node];

  let maxDistance = 0;
  for (let neighbor of graph[node]) {
    const attempt = traverseGraph(graph, neighbor, distance);
    if (attempt > maxDistance) maxDistance = attempt;
  }

  distance[node] = maxDistance + 1;
  return distance[node];
}


function buildGrap(numCourses, prereqs) {
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

module.exports = {
  semestersRequired,
};

const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
console.log(semestersRequired(numCourses, prereqs));
