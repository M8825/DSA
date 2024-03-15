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
