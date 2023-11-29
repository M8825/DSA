#include <stdio.h>
#include <stdlib.h>

struct Array 
{
  int A[10];
  int size;
  int length;
};

void Display(struct Array arr)
{
  int i;
  for(i=0;i<arr.length;i++){
    printf("%d", arr.A[i]);
  }
}

void Append(struct Array *arr, int num)
{
  arr->A[arr->length]=num;
  arr->length++;
}

void Insert(struct Array *arr, int idx, int insert)
{
  int i;
  for(i=arr->length;i>idx;i--){
    arr->A[i]=arr->A[i-1];
  }

  arr->A[idx]=insert;
  arr->length++;
}

int Delete(struct Array *arr, int idx){
  int x=0;
  int i;
  if(idx>=0 && idx<=arr->length){
    x=arr->A[idx];
    for(i=idx;i<arr->length-1;i++){
      arr->A[i]=arr->A[i+1];
    }
    arr->length--;
    return x;
  }

  return 0;
}

int main() 
{
  struct Array arr1={{2,3,4,5,6},10,5};

  Append(&arr1,10);
  Insert(&arr1,0,12);
  printf("Deleted value: %d\n", Delete(&arr1,2));

  Display(arr1);
  return 0;
}
