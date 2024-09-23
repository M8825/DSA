function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
          let sum = nums[i] + nums[left] + nums[right];
          if (sum === 0) {
              res.push([nums[i], nums[left], nums[right]]);
              while (nums[left] === nums[left + 1]) left++; // Skip duplicates
              while (nums[right] === nums[right - 1]) right--; // Skip duplicates
              left++;
              right--;
          } else if (sum < 0) {
              left++;
          } else {
              right--;
          }
      }
  }

  return res;
}
