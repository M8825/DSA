var areArraysEqual = function(a, b) {
  for (let i = 0; i < 26; i++) {
      if (a[i] !== b[i]) return false;
  }
  return true;
};

var checkInclusion = function(s1, s2) {
  if (s2.length < s1.length) return false;
  let freqS1 = new Array(26).fill(0);
  for (let c of s1) freqS1[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;

  let freqS2 = new Array(26).fill(0);
  let i = 0, j = 0;

  while (j < s2.length) {
      freqS2[s2.charCodeAt(j) - 'a'.charCodeAt(0)]++;

      if (j - i + 1 === s1.length) {
          if (areArraysEqual(freqS1, freqS2)) return true;
      }

      if (j - i + 1 < s1.length) j++;
      else {
          freqS2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
          i++;
          j++;
      }
  }
  return false;
};
// Test case 1
let s1 = "ab";
let s2 = "eidbaooo";
console.log(checkInclusion(s1, s2)); // Expected output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Test case 2
s1 = "ab";
s2 = "eidboaoo";
console.log(checkInclusion(s1, s2)); // Expected output: false
// Explanation: s2 does not contain any permutation of s1.

// Test case 3
s1 = "adc";
s2 = "dcda";
console.log(checkInclusion(s1, s2)); // Expected output: true
// Explanation: s2 contains one permutation of s1 ("cda").

