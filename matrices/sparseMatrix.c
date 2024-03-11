#include <stdio.h>
#include <stdlib.h>


struct Element {
  int i;
  int j;
  int x;
};


struct Sparse {
  int m;
  int n;
  int num;
  struct Element *ele;
};

void create(struct Sparse *s) {
  printf("Enter Dimensions");
  scanf("%d%d", &s->n, &s->m);
  printf("Number of non-zero");
  scanf("%d", &s->num);

  s->ele = (struct Element *)malloc(s->num*sizeof(struct Element));

  for (int i = 0; i < s->num; i++) {
    scanf("%d%d%d", &s->ele[i].i, &s->ele[i].j, &s->ele[i].j);
  }
}

void display(struct Sparse s) {
  int i,j,k = 0;

  for (i = 0; i < s.m; i++) {
    for(j = 0; j < s.n; j++) {
      if (i == s.ele[k].i && j == s.ele[k].j) {
        printf("%d ", s.ele[k++].x);
      } else {
        printf("0 ");
      }
    }
    printf("\n");
  }
}

struct Sparse *add(struct Sparse *s1, struct Sparse *s2) {
  struct Sparse *sum;

  int i,j,k;
  i=j=k=0;

  sum = (struct Sparse *)malloc(sizeof(struct Sparse));
  sum->ele = (struct Element *)malloc((s1->num + s2->num)*sizeof(struct Element));
  while(i<s1->num && j<s2->num) {
    if(s1->ele[i].i < s2->ele[j].i) {
      sum->ele[k++] = s1->ele[i++];
    } else if(s1->ele[i].i > s2->ele[j].i) {
      sum->ele[k++] = s1->ele[i++];
    } else {
      if(s1->ele[i].i < s2->ele[j].i) {
        sum->ele[k++] = s1->ele[i++];
      } else if(s1->ele[i].i > s2->ele[j].i) {
        sum->ele[k++] = s1->ele[i++];
      } else {
        sum->ele[k] = s1->ele[i];
        sum->ele[k++] = s1->ele[i++].x + s2->ele[j++];
      }
  }

  return sum;
}

int main() {
  struct Sparse s;
  create(&s);
  display(s);

  return 0;
}
