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
