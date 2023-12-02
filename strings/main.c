#include <stdio.h>

int main () {
  char A[] = "wElCome";

  for (int i = 0; A[i] != '\0'; i++) {
    if (A[i] >= 65 && A[i] <= 90) {
      A[i] += 32;
    } else if (A[i] >= 97 && A[i] <= 122){
      A[i] -= 32;
    }
  }

  printf("%s", A);

  return 0;
}
