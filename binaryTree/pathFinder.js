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
