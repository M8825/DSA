// const pathFinder = (root, target) => {
//   if (root === null) return null;
//   if (root.val === target) return [ root.val ];


//   const leftPath = pathFinder(root.left, target);
//   if (leftPath !== null) return [ root.val, ...leftPath ];


//   const rightPath = pathFinder(root.right, target);
//   if (rightPath !== null) return [ root.val, ...rightPath ];

//   return null;
// };

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// pathFinder(a, 'e'); // -> [ 'a', 'b', 'e' ]

// const treeValueCount = (root, target) => {
//   if (root === null) return 0;

//   let queue = [root];
//   let count = 0;

//   while (queue.length > 0) {
//     let nextNode = queue.shift();

//     if (nextNode.val === target) {
//       count++;
//     }

//     if (nextNode.right !== null) {
//       queue.push(nextNode.right);
//     }

//     if (nextNode.left !== null) {
//       queue.push(nextNode.left);
//     }
//   }

//   return count;
// };

// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      12
// //    /   \
// //   6     6
// //  / \     \
// // 4   6     12

// treeValueCount(a,  6); // -> 3

// const bottomRightValue = (root) => {
//   let queue = [root];
//   let current = null;

//   while (queue.length > 0) {
//     current = queue.shift();

//     if (current.left !== null) {
//       queue.push(current.left );
//     }

//     if (current.right !== null) {
//       queue.push(current.right);
//     }
//   }

//   return current.val;
// };

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(10);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //       3
// //    /    \
// //   11     10
// //  / \      \
// // 4   -2     1

// bottomRightValue(a); // -> 1

const treeLevels = (root) => {
  if (root === null) return [];

  let queue = [ { node: root, nodeLevel: 0 } ];
  let levels = [];

  while (queue.length > 0) {
    let { node, nodeLevel } = queue.shift();

    if (levels.length === nodeLevel) {
      levels.push([node.val]);
    } else {
      levels[nodeLevel].push(node.val);
    }

    if (node.left === null) queue.push( { node: node.left, nodeLevel: nodeLevel + 1});
    if (node.right === null) queue.push( { node: node.right, nodeLevel: nodeLevel + 1});
  }

  return levels;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
