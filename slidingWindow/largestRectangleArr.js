var largestRectangleArea = function(heights) {
  const n = heights.length;
  const left = new Array(n);
  const right = new Array(n);
  const stack1 = [];
  const stack2 = [];

  // Find the leftmost indices
  for (let i = 0; i < n; ++i) {
      while (stack1.length && heights[stack1[stack1.length - 1]] >= heights[i]) {
          stack1.pop();
      }
      left[i] = stack1.length ? stack1[stack1.length - 1] : -1;
      stack1.push(i);
  }

  // Find the rightmost indices
  for (let i = n - 1; i >= 0; --i) {
      while (stack2.length && heights[stack2[stack2.length - 1]] >= heights[i]) {
          stack2.pop();
      }
      right[i] = stack2.length ? stack2[stack2.length - 1] : n;
      stack2.push(i);
  }

  // Calculate the maximum area
  let ans = 0;
  for (let i = 0; i < n; ++i) {
      ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
  }

  return ans;
};

// Test case 1
let heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights)); // Expected output: 10

// Test case 2
heights = [2, 4];
console.log(largestRectangleArea(heights)); // Expected output: 4

// Test case 3
heights = [1, 2, 3, 4, 5];
console.log(largestRectangleArea(heights)); // Expected output: 9
