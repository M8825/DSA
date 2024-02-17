class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  insertOtherLinkedList(linkedList) {
    this.tail.next = linkedList;

    let curr = linkedList;
    while (curr.next) {
      curr = curr.next;
    }

    this.tail = curr;
  }

  create(data) {
    let new_node = new Node(data);

    if (!this.head) {
      this.head = new_node;
      this.tail = this.head;
      return;
    }

    this.tail.next = new_node;
    this.tail = new_node;
  }

  delete(val_to_delete) {
    if (!this.head) {
      return;
    }

    let curr = this.head;

    if (curr.value === val_to_delete) {
      this.head = curr.next;
      return;
    }

    while (curr != null) {
      if (curr.val == val_to_delete) {
        break;
      }

      prev = curr;
      curr = curr.next;
    }

    if (curr == null) {
      return;
    }

    prev.next = curr.next;
    curr.next = null;
  }

  displayLikedList() {
    if (!this.head) {
      console.log("Linked list is this can be an imaginary variable empty");
      return;
    }

    let curr_node = this.head;

    while (curr_node != null) {
      console.log(`Value of the current Node: ${curr_node.value}`);
      curr_node = curr_node.next;
    }
  }

  displayRecursiveDisplay(node = this.head) {
    if (node === null) {
      return;
    }

    console.log(`Value of the current Node: ${node.value}`);

    let next_node = node.next;
    this.displayRecursiveDisplay(next_node);
  }

  countNodes() {
    if (!this.head) {
      return 0;
    }

    let count = 0;
    let curr_node = this.head;
    while (curr_node != null) {
      count++;
      curr_node = curr_node.next;
    }

    return count;
  }

  coundAllElements() {
    if (!this.head) {
      return 0;
    }
    let count = 0;
    let curr_node = this.head;

    while (curr_node.next) {
      count += curr_node.value;
      curr_node = curr_node.next;
    }

    return count;
  }

  maximumElement() {
    if (!this.head) {
      return null;
    }

    let curr_node = this.head;
    let maxValue = this.head.value;

    while (curr_node) {
      if (maxValue < curr_node.value) {
        maxValue = curr_node.value;
      }

      curr_node = curr_node.next;
    }

    return maxValue;
  }

  search(value) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === value) {
      return true;
    }

    let curr_node = this.head.next;
    let prev_node = this.head;

    while (curr_node) {
      if (curr_node.value === value) {
        prev_node.next = curr_node.next;
        curr_node.next = this.head;
        this.head = curr_node;

        return true;
      }

      prev_node = curr_node;
      curr_node = prev_node.next;
    }

    return false;
  }

  insert(pos, value) {
    if (pos < 0 || pos > this.countNodes()) {
      return;
    }

    let new_node = new Node(value);

    if (pos === 0) {
      new_node.next = this.head;
      this.head = new_node;
    } else if (pos > 0) {
      let curr_node = this.head;

      for (let i = 0; i < pos - 1; i++) {
        curr_node = curr_node.next;
      }

      if (curr_node) {
        new_node.next = curr_node.next;
        curr_node.next = new_node;
      }
    }
  }

  insertLast(value) {
    let new_node = new Node(value);

    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }
  }

  insertInSortedList(value) {
    let new_node = new Node(value);

    if (!this.head) {
      this.head = this.tail = new_node;
      return;
    }

    if (value < this.head.value) {
      new_node.next = this.head;
      this.head = new_node;
    } else {
      let prev_node = this.head;
      let curr_node = prev_node.next;

      while (curr_node) {
        if (curr_node.value > value) {
          new_node.wext = curr_node;
          prev_nodewnext = new_node;
          return;
        }

        prev_node = curr_node;
        curr_node = prev_node.next;
      }

      this.tail.next = new_node;
      this.tail = new_node;
    }
  }

  deleteAtPos(pos) {
    if (!this.head) {
      return;
    }

    if (pos < 1 || pos > this.tail.value) {
      console.log("Invalid index");
      return;
    }

    if (pos === 1) {
      this.head = this.head.next;
      return;
    }

    let curr_node = this.head;
    let prev_node;

    for (let i = 0; i < pos - 1 && curr_node; i++) {
      prev_node = curr_node;
      curr_node = prev_node.next;
    }

    prev_node.next = curr_node.next;
  }

  isSorted() {
    let prev_node = this.head;
    let curr_node = this.head.next;

    while (curr_node) {
      if (curr_node.value < prev_node.value) {
        return false;
      }

      prev_node = curr_node;
      curr_node = prev_node.next;
    }

    return true;
  }

  removeDuplicates() {
    if (!this.head) {
      return;
    }

    let prev_node = this.head;
    let curr_node = this.head.next;

    while (curr_node) {
      if (prev_node.value === curr_node.value) {
        prev_node.next = curr_node.next;
      } else {
        prev_node = curr_node;
      }

      curr_node = curr_node.next;
    }
  }

  reverseElements() {
    if (!this.head) {
      return;
    }

    let curr_node = this.head;
    let arr = [];

    while (curr_node) {
      arr.push(curr_node.value);

      curr_node = curr_node.next;
    }

    curr_node = this.head; // start curr_node from the first element again
    for (let i = arr.length - 1; i >= 0; i--) {
      curr_node.value = arr[i];
      curr_node = curr_node.next;
    }
  }

  reverseLinks() {
    if (!this.head || !this.head.next) {
      return;
    }

    let prev, curr, next;
    prev = curr = null;
    next = this.head;

    while (next != null) {
      prev = curr;
      curr = next;
      next = next.next;

      curr.next = prev;
    }

    this.tail = this.head;
    this.head = curr;
  }

  reverseLinksRecursion(prev, curr = this.head) {
    if (curr === null) {
      this.tail = this.head;
      this.head = prev;
      return;
    }

    this.reverseLinksRecursion(curr, curr.next);
    curr.next = prev;
  }

  mergeTwoLinkedLists(list_one, list_two) {
    let last, third, first, second;

    first = list_one.getHead();
    second = list_two.getHead();

    if (!first) {
      return second;
    } else if (!second) {
      return first;
    }

    if (first.value < second.value) {
      third = last = first;
      first = first.next;
      last.next = null;
    } else {
      third = last = second;
      second = second.next;
      last.next = null;
    }

    while (first && second) {
      if (first.value < second.value) {
        last.next = first;
        last = first;
        first = first.next;
        last.next = null;
      } else {
        last.next = second;
        last = second;
        second = second.next;
        last.next = null;
      }
    }

    if (first) {
      last.next = first;
    } else {
      last.nexst = second;
    }

    return third;
  }

  isLoop() {
    let slow, fast;

    slow = fast = this.head;

    while (fast && fast.nexts) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return false;
      }
    }

    return false;
  }

  displayLoop() {
    if (!this.head) {
      return;
    }

    let curr_node = this.head;

    do {
      console.log(`${curr_node.value}`);
      curr_node = curr_node.next;
    } while (curr_node != this.head);
  }

  createCircular(arr) {
    let first_value = arr[0];
    let last_node = new Node(first_value);
    this.head = last_node;

    for (let i = 1; i < arr.length; i++) {
      let value = arr[i];
      let new_node = new Node(value);

      last_node.next = new_node;
      last_node = new_node;
    }

    last_node.next = this.head;
  }

  length() {
    if (!this.head) {
      return 0;
    }

    let length = 0;
    let curr_node = this.head;

    do {
      curr_node = curr_node.next;
      length++;
    } while (curr_node.next != this.head);

    return length;
  }

  insertInCircular(value, pos) {
    let new_node = new Node(value);

    if (pos < 0 || pos > this.length()) {
      return;
    }

    if (!this.head) {
      this.head = new_node;
      this.head.next = new_node;
      return;
    }

    if (pos === 0) {
      new_node.next = this.head;
      let curr_node = this.head;

      do {
        curr_node = curr_node.next;
      } while (curr_node.next != this.head);

      curr_node.next = new_node;
    } else {
      let curr_node = this.head;

      for (let i = 0; i < pos - 1; i++) {
        curr_node = curr_node.next;
      }

      new_node.next = curr_node.next;
      curr_node.next = new_node;
    }
  }

  deleteFromCircular(pos) {
    if (!this.head) {
      return;
    }

    if (pos < 1 || pos > this.length()) {
      console.log("Invalid index");
      return;
    }

    if (pos === 1) {
      let curr = this.head;
      do {
        curr = curr.next;
      } while (curr.next != this.head);

      curr.next = this.head.next;
      this.head.next = null;
      this.head = curr.next;
    } else {
      let curr_node = this.head;

      for (let i = 0; i < pos - 2; i++) {
        curr_node = curr_node.next;
      }

      curr_node.next = curr_node.next.next;
    }
  }

  createSingleWithFirst(first_node, arr) {
    this.head = first_node;
    let curr = first_node;

    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];

      let next = new Node(value);

      curr.next = next;
      curr = next;
    }

    this.tail = curr;
  }
}

function getNode(linkedList, pos) {
  let curr = linkedList.getHead();

  for (let i = 0; i < pos - 1; i++) {
    curr = curr.next;
  }

  return curr;
}

class DoublyListNode {
  constructor(prev, value, next) {
    this.prev = prev;
    this.value = value;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  create(arr) {
    let prev_node;
    let value = arr[0];
    let first_node = new DoublyListNode(null, value, null);
    this.head = first_node;
    prev_node = first_node;

    for (let i = 1; i < arr.length; i++) {
      let curr_node = new DoublyListNode(prev_node, arr[i], null);
      prev_node.next = curr_node;
      prev_node = curr_node;
    }
  }

  createCircular(arr) {
    let first_value = arr[0];
    let curr = new DoublyListNode(null, first_value, null);
    this.head = curr;

    for (let i = 1; i < arr.length; i++) {
      let next = new DoublyListNode(null, arr[i], null);
      curr.next = next;
      next.prev = curr;
      curr = next;
    }

    curr.next = this.head;
    this.head.prev = curr;
  }

  displayCircular() {
    if (!this.head) {
      return;
    }

    // curr = start from head.
    // traverse linked list with do {} while (this.head)
    let curr = this.head;

    do {
      console.log(`Value: ${curr.value}`);
      curr = curr.next;
    } while (curr != this.head);
  }

  display() {
    let curr_node = this.head;

    while (curr_node) {
      console.log(curr_node.value);
      curr_node = curr_node.next;
    }
  }

  lengthCircular() {
    if (!this.head) {
      return 0;
    }

    let count = 0;
    let curr = this.head;

    do {
      count++;
      curr = curr.next;
    } while (curr != this.head);

    return count;
  }

  insertCircular(pos, value) {
    if (!this.head) {
      let new_node = new DoublyListNode(null, value, null);
      this.head = new_node;
      return;
    }

    if (pos < 0 || pos > this.lengthCircular()) {
      console.log("Invalid index");
      return;
    }

    // 1. insert before head
    if (pos === 0) {
      let new_node = new DoublyListNode(null, value, null);
      let temp_prev = this.head.prev;
      new_node.next = this.head;
      this.head.prev = new_node;
      temp_prev.next = new_node;
      new_node.prev = temp_prev;
    } else {
      // 2. insert at pos
      let curr = this.head;
      for (let i = 0; i < pos - 1; i++) {
        curr = curr.next;
      }

      let new_node = new DoublyListNode(null, value, null);

      new_node.next = curr.next;
      new_node.prev = curr;
      curr.next.prev = new_node;
      curr.next = new_node;
    }
  }

  deleteCircluar(pos) {
    if (!this.head) {
      return;
    }

    if (pos < 1 || pos > this.lengthCircular()) {
      console.log("Invalid position");
      return;
    }

    let curr = this.head;
    for (let i = 0; i < pos - 1; i++) {
      curr = curr.next;
    }

    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;

    if (curr === this.head) {
      this.head = curr.next;
    }

    curr.next = null;
    curr.prev = null;
  }

  length() {
    if (!this.head) {
      return 0;
    }

    let length = 0;

    let curr_node = this.head;
    while (curr_node) {
      length++;
      curr_node = curr_node.next;
    }

    return length;
  }

  insert(pos, value) {
    if (pos < 1 || pos > this.length()) {
      console.log("Invalid index");
      return;
    }

    if (!this.head) {
      this.head = new DoublyListNode(null, value, null);
      return;
    }

    // insert before first node
    if (pos === 1) {
      let new_node = new DoublyListNode(null, value, this.head);
      this.head.prev = new_node;
      this.head = new_node;
    } else {
      // any given position
      let new_node = new DoublyListNode(null, value, null);

      // curr_node -> <- new_node -> <- next_node (curr_node.next)
      let curr_node = this.head;

      for (let i = 0; i < pos - 1; i++) {
        curr_node = curr_node.next;
      }

      // curr_node                .next
      //         -><-new_node -><-
      new_node.next = curr_node.next;
      new_node.prev = curr_node;
      curr_node.next = new_node;

      if (new_node.next) {
        new_node.next.prev = new_node;
      }
    }
  }

  delete(pos) {
    if (!this.head) {
      return;
    }

    if (pos < 0 || pos > this.length()) {
      console.log("Invalid position");
      return;
    }

    // 1. delete first node :: null <- this.head
    if (pos === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      // 2. delete any given node
      let prev, curr, next;
      curr = this.head;
      next = this.head.next;

      for (let i = 0; i < pos - 1; i++) {
        prev = curr;
        curr = next;
        next = next.next;
      }

      prev.next = next;
      curr.next = null;
      curr.prev = null;

      if (next) {
        next.prev = prev;
      }
    }
  }

  reverseDoublyLinkedList() {
    if (!this.head) {
      return;
    }

    let curr = this.head;

    while (curr) {
      // Swap the next and prev pointers
      let temp_next = curr.next;
      curr.next = curr.prev;
      curr.prev = temp_next;

      curr = curr.prev;

      if (curr && !curr.next) {
        this.head = curr;
      }
    }
  }

  reachMiddleNode() {
    let length = this.lengthCircular();

    let curr = this.head;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      curr = curr.next;
    }

    console.log(`Middle node value: ${curr.value}`);
  }
}

function findIntersection(list_one, list_two) {
  const stack_one = [];
  const stack_two = [];

  let node_one = list_one.getHead();
  let node_two = list_two.getHead();

  while (node_one) {
    stack_one.push(node_one);
    node_one = node_one.next
  }

  while (node_two) {
    stack_two.push(node_two);
    node_two = node_two.next
  }

  let stack_one_pop = null;
  let stack_two_pop = null;

  while(stack_one.length > 0 || stack_two.length > 0) {
    let temp_one_pop = stack_one.pop();
    let temp_two_pop = stack_two.pop();

    if (temp_one_pop !== temp_two_pop) {
      console.log(`Intersection node value: ${stack_one_pop.value}`);
      return;
    }

    stack_one_pop = temp_one_pop;
    stack_two_pop = temp_two_pop;
  }
}

function main() {
  // const linkedList = new LinkedList();
  // const linkedList_two = new LinkedList();
  // linkedList.insertLast(10);
  // linkedList.insertLast(20);
  // linkedList.insertLast(30);
  // linkedList.insertLast(40);
  // linkedList_two.insertLast(13);
  // linkedList_two.insertLast(25);
  // linkedList_two.insertLast(28);
  // linkedList_two.insertLast(37);

  // linkedList.displayLikedList();
  // linkedList.displayRecursiveDisplay();
  // console.log(linkedList.countNodes());
  // console.log(linkedList.coundAllElements());
  // console.log(linkedList.maximumElement())
  // linkedList.search(9);
  // linkedList.deleteAtPos(1);
  // console.log(linkedList.isSorted());
  // linkedList.removeDuplicates();
  // linkedList.displayLikedList();
  // linkedList.reverseLinks();

  // linkedList.reverseLinksRecursion();
  // linkedList.mergeTwoLinkedLists(linkedList, linkedList_two);
  // console.log(linkedList.isLoop());

  // const circularLinkedList = new LinkedList();
  // circularLinkedList.createCircular([20, 30, 40, 50]);
  // circularLinkedList.insertInCircular(77, 2);
  // circularLinkedList.deleteFromCircular(0);
  // circularLinkedList.displayLoop();
  // linkedList.displayLikedList();

  // let doublyLinkeList = new DoublyLinkedList();
  // doublyLinkeList.createCircular([10, 20, 30, 40, 50, 60]);
  // doublyLinkeList.create([10, 20, 30, 40, 50]);
  // doublyLinkeList.insert(2, 777);
  // doublyLinkeList.delete(5);
  // doublyLinkeList.reverseDoublyLinkedList();
  // doublyLinkeList.insertCircular(1, 777);
  // doublyLinkeList.deleteCircluar(-1);
  // doublyLinkeList.reachMiddleNode();
  // doublyLinkeList.displayCircular();
  // doublyLinkeList.display();
  const first_node = new Node(5);
  let linkedList = new LinkedList();
  linkedList.createSingleWithFirst(first_node, [10, 20, 30, 40]);

  let node = getNode(linkedList, 4);
  let linkedListTwo = new LinkedList();
  linkedListTwo.insertLast(1);
  linkedListTwo.insertLast(2);
  linkedListTwo.insertLast(3);
    linkedListTwo.(node);

  findIntersection(linkedList, linkedListTwo);

  console.log("=======");
  linkedListTwo.displayLikedList();
  console.log("==============")
  linkedList.displayLikedList();
}

main();
