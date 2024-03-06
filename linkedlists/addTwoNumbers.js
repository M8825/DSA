function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(-1);
  let curr = dummyHead;
  let temp1 = l1;
  let temp2 = l2;
  let carry = 0;

  while (temp1 !== null || temp2 !== null) {
      let sum = carry;
      if (temp1 !== null) sum += temp1.val;
      if (temp2 !== null) sum += temp2.val;

      let newNode = new ListNode(sum % 10);
      carry = Math.floor(sum / 10);

      curr.next = newNode;
      curr = curr.next;

      if (temp1 !== null) temp1 = temp1.next;
      if (temp2 !== null) temp2 = temp2.next;
  }
  if (carry !== 0) {
      let newNode = new ListNode(carry);
      curr.next = newNode;
  }
  return dummyHead.next;
};
