function countVowels() {
  const sent = 'How are you?i';
  const vowels = 'aeiou';
  let vowelsCount = 0;

  for (let i = 0; i < sent.length; i++) {
    if (vowels.includes(sent[i])) {
      vowelsCount++;
    }
  }

  return vowelsCount;
};

console.log(countVowels());

function countSentences() {
  const sent = 'How are you?';
  const arrSent = sent.split(" ");

  return arrSent.length;
}

console.log(countSentences());

function reverseString(input) {
  let reversedStr = '';

  for (let i = input.length - 1; i >= 0; i--) {
    reversedStr += input[i];
  }

  return reversedStr;
}

console.log("")
console.log("Reverse string: ");
console.log(reverseString("FooBar"));

console.log("")
console.log("Reverse string: ");
console.log(reverseString("FooBar"));

function palidrome(str1) {
  let reversedStr = '';

  for (let i = str1.length - 1; i >= 0; i--) {
    reversedStr += str1[i];
  }

  return reversedStr === str1;
}

console.log("")
console.log("Palindrome: ");
console.log(palidrome("radar"));


function findDuplicateChar(str) {
  const counter = {};

  for (let i = 0; i < str.length; i++) {
    if (counter[str[i]]){
      counter[str[i]]++;
    } else {
      counter[str[i]] = 1;
    }
  }

  return Object.keys(counter).filter(key => counter[key] > 1);
};

console.log("")
console.log("Counting Letters: ");
console.log(findDuplicateChar("finding"));

function anagrams(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  const counter = {};

  // iterate over str1 and increase count for each letter by 1
  for (let i = 0; i < str1.length; i++) {
    if (counter[str1[i]]) {
      counter[str1[i]]++;
    } else {
      counter[str1[i]] = 1;
    }
  }

  // iterate over str2 and decrement count for each letter by 1
  for (let i = 0; i < str1.length; i++) {
    if (counter[str2[i]]) {
      counter[str2[i]]--;
    } else {
      counter[str2[i]] = -1;
    }
  }

  return !Object.values(counter).some(ele => ele != 0);
}

console.log("");
console.log("Anagrams: ");
console.log(anagrams("decimal", "medical"));


function stringPermutation(str, k, arr = [], res = []) {
  if (str.length === k) {
    console.log(res);
  } else {
    for (let i = 0; i < str.length; i++) {
      if (arr[i] === undefined) {
        res[k] = str[i];
        arr[i] = 1;
        stringPermutation(str, k + 1, arr, res);
        arr[i] = undefined;
      }
    }
  }
}

console.log("Permutations:");
stringPermutation(['a', 'b', 'c'], 0);


// function twoSum(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       return [i, j];
//     }
//   }
// }


// function maxArea(height) {
//   let max = 0; // Initialize max area
//   let left = 0; // Start with the leftmost line
//   let right = height.length - 1; // Start with the rightmost line

//   while (left < right) {
//       // Calculate the area with the current pair of lines
//       let width = right - left;
//       let currentHeight = Math.min(height[left], height[right]);
//       let currentArea = width * currentHeight;

//       // Update max area if the current area is larger
//       max = Math.max(max, currentArea);

//       // Move the pointer that points to the shorter line inward
//       if (height[left] < height[right]) {
//           left++;
//       } else {
//           right--;
//       }
//   }

//   return max;
// }

// let heights = [1,8,6,2,5,4,8,3,7];
// console.log(maxArea(heights)); // Should return the maximum area

// function intToRoman(num) {
//   // Define the Roman numerals for the base numbers.
//   const numerals = [
//       ["M", 1000],
//       ["CM", 900],
//       ["D", 500],
//       ["CD", 400],
//       ["C", 100],
//       ["XC", 90],
//       ["L", 50],
//       ["XL", 40],
//       ["X", 10],
//       ["IX", 9],
//       ["V", 5],
//       ["IV", 4],
//       ["I", 1]
//   ];

//   let result = "";

//   // Loop through each numeral, subtracting it from num and adding it to the result string.
//   for (const [roman, value] of numerals) {
//       while (num >= value) {
//           result += roman;
//           num -= value;
//       }
//   }

//   return result;
// }

// // Example usage:
// console.log(intToRoman(3));    // Output: "III"
// console.log(intToRoman(58));   // Output: "LVIII"
// console.log(intToRoman(1994)); // Output: "MCMXCIV"

// function findMin(nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   // If the array is not rotated (or only one element is there)
//   if (nums[left] < nums[right] || nums.length === 1) {
//       return nums[0];
//   }

//   // Binary search way
//   while (left <= right) {
//       let mid = Math.floor((left + right) / 2);

//       // Check if the mid element is the minimum
//       if (nums[mid] > nums[mid + 1]) {
//           return nums[mid + 1];
//       }

//       // Check if the mid-1 element is the minimum
//       if (nums[mid - 1] > nums[mid]) {
//           return nums[mid];
//       }

//       // Decide the side to choose for the next iteration
//       if (nums[mid] > nums[0]) {
//           left = mid + 1;
//       } else {
//           right = mid - 1;
//       }
//   }

//   // If we don't find the minimum, return -1 or throw an error
//   return -1;
// }

// // Example usage:
// console.log(findMin([3,4,5,1,2])); // Output: 1
// console.log(findMin([4,5,6,7,0,1,2])); // Output: 0
// console.log(findMin([1])); // Output: 1


// function findMedianSortedArrays(nums1, nums2) {
//   // Make sure nums1 is the smaller array
//   if (nums1.length > nums2.length) {
//       [nums1, nums2] = [nums2, nums1];
//   }

//   let x = nums1.length;
//   let y = nums2.length;
//   let low = 0;
//   let high = x;

//   while (low <= high) {
//       const partitionX = Math.floor((low + high) / 2);
//       const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

//       const maxX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
//       const maxY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

//       const minX = partitionX === x ? Number.POSITIVE_INFINITY : nums1[partitionX];
//       const minY = partitionY === y ? Number.POSITIVE_INFINITY : nums2[partitionY];

//       if (maxX <= minY && maxY <= minX) {
//           // We have partitioned array at the correct place
//           if ((x + y) % 2 === 0) {
//               return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
//           } else {
//               return Math.max(maxX, maxY);
//           }
//       } else if (maxX > minY) { // we are too far on right side for partitionX. Go on left side.
//           high = partitionX - 1;
//       } else { // we are too far on left side for partitionX. Go on right side.
//           low = partitionX + 1;
//       }
//   }

//   // If we reach here, it means the arrays are not sorted or not of the expected size
//   throw new Error("Input arrays are not sorted or of different size than expected");
// }

// // Example usage:
// const nums1 = [1, 3];
// const nums2 = [2];
// console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

// const nums1b = [1, 2];
// const nums2b = [3, 4];
// console.log(findMedianSortedArrays(nums1b, nums2b)); // Output: 2.5

// function search(nums, target) {
//   let start = 0;
//   let end = nums.length - 1;

//   while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
//       if (nums[mid] === target) return mid;

//       // Check if the left half is sorted
//       if (nums[start] <= nums[mid]) {
//           if (target >= nums[start] && target < nums[mid]) {
//               // Target is in the left half
//               end = mid - 1;
//           } else {
//               // Target is in the right half
//               start = mid + 1;
//           }
//       }
//       // Otherwise, the right half is sorted
//       else {
//           if (target > nums[mid] && target <= nums[end]) {
//               // Target is in the right half
//               start = mid + 1;
//           } else {
//               // Target is in the left half
//               end = mid - 1;
//           }
//       }
//   }

//   return -1; // If the target is not found
// }

// // Example usage:
// let nums = [4,5,6,7,0,1,2];
// console.log(search(nums, 0)); // Output: 4
// console.log(search(nums, 3)); // Output: -1

