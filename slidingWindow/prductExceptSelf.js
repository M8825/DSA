function productExceptSelf(nums) {
  let output = [];
  let left = 1;

  for (let i = 0; i < nums.length; i++) {
      output[i] = left;
      left *= nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
      output[i] *= right;
      right *= nums[i];
  }

  return output;
}
