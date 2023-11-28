#include <stdio.h>
#include <stdlib.h>

int main() {
  int *A = static_cast<int*>(malloc(5 * sizeof(int)));

  for (int i = 0; i < 5; i++) {
    A[i] = i + 1;
    printf("%u \n", &A[i]);
  }


  free(A);
  return 0;
}
