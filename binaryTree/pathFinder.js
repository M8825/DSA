const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [ root.val ];


  const leftPath = pathFinder(root.left, target);
  if (leftPath !== null) return [ root.val, ...leftPath ];


  const rightPath = pathFinder(root.right, target);
  if (rightPath !== null) return [ root.val, ...rightPath ];

  return null;
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

pathFinder(a, 'e'); // -> [ 'a', 'b', 'e' ]

const treeValueCount = (root, target) => {
  if (root === null) return 0;

  let queue = [root];
  let count = 0;

  while (queue.length > 0) {
    let nextNode = queue.shift();

    if (nextNode.val === target) {
      count++;
    }

    if (nextNode.right !== null) {
      queue.push(nextNode.right);
    }

    if (nextNode.left !== null) {
      queue.push(nextNode.left);
    }
  }

  return count;
};

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

treeValueCount(a,  6); // -> 3
