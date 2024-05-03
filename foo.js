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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// [1,2,3,4,5]
//        ^
//      p   c
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};


var fourSum = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    // Initiliaze quad and res variable;
    let quad = [];
    let res = [];
    kSum(4, 0, target);

    return res;

    function kSum(k, start, target) {
        if (k != 2) {
            for (let i = start; i < nums.length - k + 1; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;
                quad.push(nums[i]);
                kSum(k - 1, i + 1, target - nums[i]);
                quad.pop();
            }
        } else {
            // TwoSum problem
            let left = start;
            let right = nums.length - 1;

            while (left < right) {
                let sum = nums[left] + nums[right];

                if (sum < target) left++;
                else if (sum > target) right--;
                else {
                    // and if sum === target add element to the result
                    res.push(quad.concat([nums[left], nums[right]]));
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;right--;
                }
            }
        }
    }
};

var isPalindrome = function(x) {
  const str = x.toString();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
