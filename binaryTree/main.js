class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const depthFirstValues = (root) => {
  if (root === null) {
    return [];
  }

  let stack = [root];
  let values = [];

  while (stack.length > 0) {
    let lastNode = stack.pop();
    values.push(lastNode.val);

    if (lastNode.right) {
      stack.push(lastNode.right);
    }
    if (lastNode.left) {
      stack.push(lastNode.left);
    }
  }

  return values;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

const treeSum = (root) => {
  if (root === null) return 0;
  let count = 0;
  let stack = [root];

  while (stack.length > 0) {
    let nextNode = stack.pop();
    count += nextNode.val;

    if (nextNode.left) {
      stack.push(nextNode.left);
    }
    if (nextNode.right) {
      stack.push(nextNode.right);
    }
  }

  return count;
};
const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

treeSum(a); // -> 10


const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

treeSum(a); // -> 10
