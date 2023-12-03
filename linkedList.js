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

  insert(data) {
    let new_node = new ListNode(data);

    if (!this.head) {
      this.head = new_node;
      this.tail = this.head;
      return;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = new_node;
    this.last = curr;
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
      console.log("Linked list is empty");
      return;
    }

    let curr_node = this.head;

    while(curr_node != null) {
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
}


function main() {
  const linkedList = new LinkedList();

  for (let i = 0; i < 10; i++) {
    linkedList.insert(i);
  }

  // linkedList.displayLikedList();
  linkedList.displayRecursiveDisplay();

}

main();
