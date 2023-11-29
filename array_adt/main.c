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

int LinearSearch(struct Array arr, int key)
{
  int i;
  for(i=0;i<arr.length;i++){
    if(key==arr.A[i]){
      return i;
    }
  }

  return -1;
}

int BinarySearch(struct Array arr, int target){
  int low, mid, high;
  low = 0;
  high = arr.length - 1;

  while(low <= high) {
    mid = (low + high) / 2;

    if(arr.A[mid] == target) {
      return mid;
    } else if (target < arr.A[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

int RBinarySearch(struct Array arr, int low, int high, int target) {
  if(low > high) {
    return -1;
  }

  int mid = (low + high) / 2;

  if(arr.A[mid] == target) {
    return mid;
  } else if (target < arr.A[mid]) {
    return RBinarySearch(arr, low, mid - 1, target);
  } else {
    return RBinarySearch(arr, mid + 1, high, target);
  }

}

int main() 
{
  struct Array arr1={{2,3,4,5,6},10,5};

  /* Append(&arr1,10); */
  /* Insert(&arr1,0,12); */
  /* printf("Deleted value: %d\n", Delete(&arr1,2)); */

  /* printf("%d\n", LinearSearch(arr1, 6)); */
  /* printf("%d\n", BinarySearch(arr1, 15)); */
  printf("%d\n", RBinarySearch(arr1, 0, arr1.length, 5));

  Display(arr1);
  return 0;
}
