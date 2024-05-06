/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length;

  const suffix = Array(n).fill(1);
  const prefix = Array(n).fill(1);

  for (let i = 1; i < n; i++ ) {
      prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
      suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  const res = [];
  for (let i = 0; i < n; i++) {
      res.push(prefix[i] * suffix[i]);
  }

  return res;
};
