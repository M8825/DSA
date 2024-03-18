const linkedListFind = (head, target) => {
  let curr = head;

  while (curr !== null) {
    if (curr.val === target) {
      return true;
    }
    curr = curr.next;
  }

  return false;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const zipperLists = (head1, head2) => {
  let count = 0;
  let curr1 = head1;
  let curr2 = head2;
  let tail = curr1;

  while (curr1 !== null && curr2 !== null){
    if (count % 2 === 0){
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }

    count++;
    tail = tail.next;
  }

  if (curr1 !== null) {
    tail.next = curr1;
  }


  if (curr2 !== null) {
    tail.next = curr2;
  }


  return head1;
};
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
console.log('foobar')

const addLists = (head1, head2) => {
  let num1 = [];
  let num2 = [];

  let curr1 = head1;
  while (curr1 !== null){
    num1.push(curr1.val);
    curr1 = curr1.next;
  }

  let curr2 = head2;
  while (curr2 !== null){
    num2.push(curr2.val);
    curr2 = curr2.next;
  }

  num1 = num1.reverse().join('');
  num2 = num2.reverse().join('');
  console.log("THIS IS NUM1: ", num1)
  console.log("THIS IS NUM2: ", num2);

  let sum = String(Number(num1) + Number(num2));
  console.log("THIS IS SUM: ", sum);
  let dummyHead = new Node(null);
  let tail = dummyHead;

  for (let i = sum.length - 1; i >= 0; i--) {
    tail.next = new Node(sum[i]);
    tail = tail.next;
  }

  return dummyHead.next;
};


const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

console.log(addLists(a1, b1));
// 5 -> 7 -> 9
