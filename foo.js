/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    prev = dummy;
    let current = head;

    while (current && current.next) {

    }

    return dummy.next;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    backtrack('', 0, 0)
    return res;

    function backtrack(current, open, close) {
        if (current.length === 2 * n) {
            res.push(current);
            return;
        }

        if (open < n) backtrack(current + '(', open + 1, close);
        if (close < open) backtrack(current + ')', open, close + 1);
    }
};

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }


    current.next = list1 === null ? list2 : list1;

    return dummy.next;
};


function isValid(s) {
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let char of s) {
        if (char in map) {
            let topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement != map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

