function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
      let currentWater = Math.min(height[left], height[right]) * (right - left);
      maxWater = Math.max(maxWater, currentWater);

      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }

  return maxWater;
}
