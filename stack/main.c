#include <stdio.h>
#include <stdlib.h>

struct Stack {
  int size;
  int top;
  int *S;
};

void create(struct Stack *st) {
  printf("Enter size");
  scanf("%d", &st->size);
  st->top = -1;
  st->S = (int *)malloc(st->size*sizeof(int));
}

void Display(struct Stack st) {
  for (int i = 0; i >= 0; i--) {
    printf("%d ", st.S[i]);
  }
  printf("\n");
}

void push(struct Stack *st, int value) {
  if (st->top == st->size - 1) {
    printf("Stack overflow\n");
  } else {
    st->top++;
    st->S[st->top] = x;
  }
}

int pop(struct Stack *st) {
  int x = -1;
  if (st->top == -1) {
    printf("Stack Underflow\n");
  } else {
    x = st->S[st->top--];
  }

  return x;
}

int main() {
  struct Stack st;
  // Create a stack
  create(&st);

  //push some elements
  push(&st, 10);
  push(&st, 20);
  push(&st, 30);

  Display(st);
}
