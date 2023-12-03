#include <stdio.h>

int isVowel(char ch) {
  char vowels[] = "aeiouAEIOU";

  for (int i = 0; vowels[i] != '\0'; i++) {
    if (ch == vowels[i]) {
      return 1;
    }
  }

  return -1;
}

void CountVandC(char str[]) {
  int vcount, ccount;
  vcount = ccount = 0;

  for (int i = 0; str[i] != '\0'; i++) {
    if (isVowel(str[i]) == 1){
      vcount++;
    } else if ((str[i] >= 65 && str[i] <= 90) || (str[i] >= 97 && str[i] <= 122)) {
      ccount++;
    }
  }

  printf("Number of vowels: %d \n", vcount);
  printf("Number of consonants: %d \n", ccount);
}

void CountWords(char str[]) {
  int words = 0;

  for (int i = 0; str[i] != '\0'; i++) {
    if (str[i] == ' ' && i != 0 && str[i - 1] != ' ') {
      words++;
    }
  }

  if (words > 0) {
    words++;
  }

  printf("The number of words is string: %d\n", words);
}

int main () {
  char str[] = " How    are you";
  CountVandC(str);
  CountWords(str);

  return 0;
}
