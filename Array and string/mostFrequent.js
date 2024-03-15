const mostFrequentChar = (s) => {
  let count = {};
  let max = 0;
  let maxLetter = '';

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === undefined) {
      count[s[i]] = 0;
    } else {
      count[s[i]]++;
    }
  }

  for (let char in count) {
    if (count[char] > max) {
      max = count[char];
      maxLetter = char;
    }
  }

  return maxLetter;
};

console.log("foobar");
console.log(mostFrequentChar('foo'));