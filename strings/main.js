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


function stringPermutation(str, k, arr = [], res = [], output = []) {
  if (str.length === k) {
    console.log(res)
  } else {
    for (let i = 0; i < str.length; i++) {
      if (arr[i] === undefined) {
        res[k] = str[i];
        arr[i] = 1;
        stringPermutation(str, k + 1, arr, res, output);
        arr[i] = undefined;
      }
    }
  }
}

console.log("Permutations:");
stringPermutation(['a', 'b', 'c'], 0);


function twoSum(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      return [i, j];
    }
  }
}


function maxArea(height) {
  let max = 0; // Initialize max area
  let left = 0; // Start with the leftmost line
  let right = height.length - 1; // Start with the rightmost line

  while (left < right) {
      // Calculate the area with the current pair of lines
      let width = right - left;
      let currentHeight = Math.min(height[left], height[right]);
      let currentArea = width * currentHeight;

      // Update max area if the current area is larger
      max = Math.max(max, currentArea);

      // Move the pointer that points to the shorter line inward
      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }

  return max;
}

let heights = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(heights)); // Should return the maximum area
