const uncompress = (s) => {
  let output = '';
  const nums = '0123456789';
  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (nums.includes(s[j])) {
      j++;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < nums; count++) {
        output += s[j];
      }

      j++;
      i = j;
    }
  }

  return output;
}


const compress = (s) => {
  let output = '';
  let i = 0;
  let j = 0;

  while(j <= s.length) {
    if (s[i] === s[j]) {
      j++;
    } else {
      let num = j - i;
      if (num === 1) {
        output += s[i];
      } else {
        output += String(num) + s[i];
      }
      i = j;
    }
  }

  return output;
}
