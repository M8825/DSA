class ListNode {
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

  create(data) {
    let new_node = new ListNode(data);

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

    let new_node = new ListNode(value);

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
    let new_node = new ListNode(value);

    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }
  }

  insertInSortedList(value) {
    let new_node = new ListNode(value);

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
}

function main() {
  const linkedList = new LinkedList();

  // for (let i = 0; i < 10; i++) {
  //   linkedList.create(i);
  // }

  // linkedList.displayLikedList();
  // linkedList.displayRecursiveDisplay();
  // console.log(linkedList.countNodes());
  // console.log(linkedList.coundAllElements());
  // console.log(linkedList.maximumElement())
  // linkedList.search(9);
  linkedList.insertLast(10);
  linkedList.insertLast(20);
  linkedList.insertLast(30);
  linkedList.insertLast(40);
  // linkedList.deleteAtPos(1);
  console.log(linkedList.isSorted());
  linkedList.displayLikedList();
}

main();
