var dailyTemperatures = function(temperatures) {
  const n = temperatures.length;
  if (n === 1) return [0];
  const ans = new Array(n).fill(0);
  const stack = [n - 1];
  for (let i = n - 2; i >= 0; i--) {
      while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
          stack.pop();
      }
      if (stack.length) {
          ans[i] = stack[stack.length - 1] - i;
      }
      stack.push(i);
  }
  return ans;
};

// Test case 1
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // Expected output: [1, 1, 4, 2, 1, 1, 0, 0]

// Test case 2
temperatures = [30, 40, 50, 60];
console.log(dailyTemperatures(temperatures)); // Expected output: [1, 1, 1, 0]

// Test case 3
temperatures = [30, 60, 90];
console.log(dailyTemperatures(temperatures)); // Expected output: [1, 1, 0]
