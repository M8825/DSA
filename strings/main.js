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
  let reversedStr = ''

  for (let i = str1.length - 1; i >= 0; i--) {
    reversedStr += str1[i];
  }

  return reversedStr === str1;
}

console.log("")
console.log("Palindrome: ");
console.log(palidrome("radar"));
