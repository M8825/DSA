class Matrix {
  constructor(size) {
    this.A = new Array(size * (size + 1) / 2).fill(0);
    this.n = size;
  }

  set(i, j, x) {
    if (i >= j) {
      this.A[this.n * (j - 1) + (j - 2) * (j - 1) / 2 + i - j] = x;
    }
  }

  get(i, j) {
    if (i >= j) {
      return this.A[this.n * (j - 1) + (j - 2) * (j - 1) / 2 + i - j];
    } else {
      return 0;
    }
  }

  display() {
    for (let i = 1; i <= this.n; i++) {
      let row = '';
      for (let j = 1; j <= this.n; j++) {
        if (i >= j) {
          row += this.A[this.n * (j - 1) + (j - 2) * (j - 1) / 2 + i - j] + ' ';
        } else {
          row += '0 ';
        }
      }
      console.log(row);
    }
  }
}

function main() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Enter Dimension: ', (n) => {
    const m = new Matrix(parseInt(n));
    console.log('Enter all elements for the lower triangle:');

    const fillMatrix = (i, j) => {
      if (i > m.n) {
        console.log('\nMatrix:');
        m.display();
        readline.close();
        return;
      }

      if (i >= j) {
        readline.question(`Element [${i},${j}]: `, (x) => {
          m.set(i, j, parseInt(x));
          fillMatrix(i, j + 1);
        });
      } else {
        fillMatrix(i + 1, 1);
      }
    };

    fillMatrix(1, 1);
  });
}

main();

function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[nums.length - 1];
}

// Example usage:
console.log(rob([1, 2, 3, 1])); // Output: 4
console.log(rob([2, 7, 9, 3, 1])); // Output: 12

function uniquePaths(m, n) {
  const dp = Array.from({ length: m }, () => Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

// Example usage:
console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 2)); // Output: 3



