function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Merge arrays until one is exhausted
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

// Example usage:
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const output = mergeSortedArrays(arr1, arr2);
console.log(output); // Output: [1, 2, 3, 4, 5, 6]



function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';

  for (const word of words) {
    // Remove punctuation from the word
    const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
    if (cleanWord.length > longest.length) {
      longest = cleanWord;
    }
  }

  return longest;
}

// Example usage:
const sentence = 'The quick brown fox jumps over the lazy dog';
const output2 = longestWord(sentence);
console.log(output2); // Output: "jumps"


function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example usage:
console.log(coinChange([1, 2, 5], 11));  // Output: 3
console.log(coinChange([2], 3));

function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4]));  // Output: [24, 12, 8, 6]
