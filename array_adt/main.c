#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

struct Array {
  int A[10];
  int size;
  int length;
};

void Display(struct Array arr) {
  int i;
  for (i = 0; i < arr.length; i++) {
    printf("%d ", arr.A[i]);
  }
}

void Append(struct Array *arr, int num) {
  arr->A[arr->length] = num;
  arr->length++;
}

void Insert(struct Array *arr, int idx, int insert) {
  int i;
  for (i = arr->length; i > idx; i--) {
    arr->A[i] = arr->A[i - 1];
  }

  arr->A[idx] = insert;
  arr->length++;
}

int Delete(struct Array *arr, int idx) {
  int x = 0;
  int i;
  if (idx >= 0 && idx <= arr->length) {
    x = arr->A[idx];
    for (i = idx; i < arr->length - 1; i++) {
      arr->A[i] = arr->A[i + 1];
    }
    arr->length--;
    return x;
  }

  return 0;
}

int LinearSearch(struct Array arr, int key) {
  int i;
  for (i = 0; i < arr.length; i++) {
    if (key == arr.A[i]) {
      return i;
    }
  }

  return -1;
}

int BinarySearch(struct Array arr, int target) {
  int low, mid, high;
  low = 0;
  high = arr.length;

  while (low <= high) {
    mid = (low + high) / 2;
    if (arr.A[mid] == target) {
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
  if (low > high) {
    return -1;
  }

  int mid = (low + high) / 2;
  if (arr.A[mid] == target) {
    return mid;
  } else if (target < arr.A[mid]) {
    return RBinarySearch(arr, low, mid - 1, target);
  } else {
    return RBinarySearch(arr, mid + 1, high, target);
  }
}

int Get(struct Array arr, int index) {
  if (index > 0 && index < arr.length) {
    return arr.A[index];
  }

  return -1;
}

int Set(struct Array *arr, int index, int key) {
  if (index > 0 && index < arr->length) {
    arr->A[index] = key;
    return arr->A[index];
  }

  return -1;
}

int Max(struct Array arr) {
  int max = arr.A[0];

  int i;
  for (i = 1; i < arr.length; i++) {
    if (arr.A[i] > max) {
      max = arr.A[i];
    }
  }

  return max;
}

int Min(struct Array arr) {
  int min = arr.A[0];

  for (int i = 0; i < arr.length; i++) {
    if (arr.A[i] < min) {
      min = arr.A[i];
    }
  }

  return min;
}

int Sum(struct Array arr) {
  int sum = arr.A[0];
  int i;
  for (i = 1; i < arr.length; i++) {
    sum = sum + arr.A[i];
  }

  return sum;
}

int Average(struct Array arr) { return (float)Sum(arr) / arr.length; }

void Swap(int *x, int *y) {
  int temp = *x;
  *x = *y;
  *y = temp;
}

void ReverseArr(struct Array *arr) {
  int i, j;
  i = 0;
  j = arr->length - 1;

  while (i < j) {
    Swap(&arr->A[i], &arr->A[j]);
    i++;
    j--;
  }
}

void LeftShift(struct Array *arr) {
  int i;
  for (i = 1; i < arr->length; i++) {
    arr->A[i - 1] = arr->A[i];
  }

  arr->length--;
}

void InsertInSortedArray(struct Array *arr, int key) {
  int i;
  i = arr->length - 1;

  while (arr->A[i] > key) {
    arr->A[i + 1] = arr->A[i];

    i--;
  }

  arr->A[i + 1] = key;
  arr->length++;
}

bool isSorted(struct Array arr) {

  for (int i = 0; i < arr.length - 1; i++) {
    if (arr.A[i] > arr.A[i + 1]) {
      return -1;
    }
  }

  return 1;
}

void ReArrange(struct Array *arr) {
  int i, j;
  i = 0;
  j = arr->length - 1;

  while (i < j) {
    while (arr->A[i] < 0) {
      i++;
    }
    while (arr->A[j] >= 0) {
      j--;
    }
    if (i < j) {
      Swap(&arr->A[i], &arr->A[j]);
    }
  }
}

struct Array * Merging(struct Array arr1, struct Array arr2) {
  int i, j, k;
  i = j = k = 0;

  struct Array *arr3 = (struct Array *)malloc(sizeof(struct Array));
  while (i < arr1.length && j < arr2.length) {
    if (arr1.A[i] < arr2.A[j]) {
      arr3->A[k++] = arr1.A[i++];
    } else {
      arr3->A[k++] = arr2.A[j++];
    }
  }

  for (; i < arr1.length; i++) {
    arr3->A[k++] = arr1.A[i];
  }

  for (; j < arr1.length; j++) {
    arr3->A[k++] = arr1.A[j];
  }

  arr3->length = arr1.length + arr2.length;
  arr3->size = 10;

  return arr3;
} 

struct Array* Union(struct Array arr1, struct Array arr2) {
  int i, j, k;
  i = j = k = 0;
  struct Array *arr3 = (struct Array *)malloc(sizeof(struct Array));

  while (i < arr1.length && j < arr2.length) {
    if (arr1.A[i] < arr2.A[j]) {
      arr3->A[k++] = arr1.A[i++];
    } else if (arr2.A[j] < arr1.A[i]) {
      arr3->A[k++] = arr2.A[j++];
    } else {
      arr3->A[k++] = arr1.A[i++];
      j++;
    }
  }

  for (; i < arr1.length; i++) {
    arr3->A[k++] = arr1.A[i];
  }

  for (; j < arr1.length; j++) {
    arr3->A[k++] = arr1.A[j];
  }
  arr3->length = k;
  arr3->size = 10;


  return arr3;
}

struct Array * Intersection(struct Array arr1, struct Array arr2) {
  int i, j, k;
  i = j = k = 0;

  struct Array *arr3 = (struct Array *)malloc(sizeof(struct Array));
  while (i < arr1.length && j < arr2.length) {
    if (arr1.A[i] < arr2.A[j]) {
      i++;
    } else if (arr2.A[j] < arr1.A[i]) {
      j++;
    } else if (arr1.A[i] == arr2.A[j]){
      arr3->A[k++] = arr1.A[i++];
      j++;
    }
  }

  arr3->length = k;
  arr3->size = 10;

  return arr3;
}

struct Array * Difference(struct Array arr1, struct Array arr2) {
  int i, j, k;
  i = j = k = 0;

  struct Array *arr3 = (struct Array *)malloc(sizeof(struct Array));

  while (i < arr1.length && j < arr2.length) {
    if(arr1.A[i] < arr2.A[j]) {
      arr3->A[k++] = arr1.A[i++];
    } else if (arr2.A[j] < arr1.A[i]) {
      j++;
    } else {
      i++;
      j++;
    }
  }

  for (; i < arr1.length; i++) {
    arr3->A[k++] = arr1.A[i];
  }
  arr3->length = k;
  arr3->size = 10;

  return arr3;
}

void MissingElements(struct Array arr) {
  int diff = arr.A[0];
  for (int i = 1; i < arr.length; i++) {
    if (arr.A[i] - i != diff) {
      while (diff != arr.A[i] - i) {
        printf("%d\n", diff + i);
        diff++;
      }
    }
  }
}

void FasterMissingElement(struct Array arr) {
  int max = Max(arr);
  int min = Min(arr);

  int *hashTable = (int *)calloc(max + 1, sizeof(int));

  for (int i = 0; i < arr.length; i++) {
    hashTable[arr.A[i]]++;
  }

  for (int i = min; i < max; i++) {
    if (hashTable[i] != 1) {
      printf("%d ", i);
    }
  }

  printf("\n");
}


void FindDuplicates(struct Array arr) {
  int max = Max(arr);

  int *hashTable = (int *)calloc(max + 1, sizeof(int));

  for (int i = 0; i < arr.length; i++) {
    hashTable[arr.A[i]]++;
  }

  for (int i = 0; i <= max; i++) {
    if (hashTable[i] > 1) {
      printf("%d is appearing %d times\n", i, hashTable[i]);
    }
  }
}

struct Array* SumOfK(struct Array arr, int key) {
  struct Array* output = (struct Array *)malloc(sizeof(struct Array));
  output->length = 0;
  output->size = 2;

  int max = Max(arr);
  int *hashTable = (int * )calloc(max + 1, sizeof(int));

  for (int i = 0; i < arr.length; i++) {
    if (hashTable[key - arr.A[i]] > 0 ) {
      int firstNum = hashTable[key - arr.A[i]];
      int secondNum = arr.A[i];
      output->A[0] = firstNum;
      output->A[1] = secondNum;
      output->length = 2;
      break;
    } else {
      hashTable[arr.A[i]] = arr.A[i];
    }
  }

  return output;
}

int main() {
  /* struct Array arr1 = {{2, 9, 21, 28, 35}, 10, 5}; */
  /* struct Array arr2 = {{2, 9, 16, 28, 14}, 10, 5}; */
  /* struct Array arr = {{3, 6, 8, 8, 10, 12, 15, 15, 20, 20}, 10, 10}; */

  /* struct Array *arr3; */
  /* arr3 = Merging(arr1, arr2); */
  /* arr3 = Union(arr1, arr2); */
  /* arr3 = Intersection(arr1, arr2); */
  /* arr3 = Difference(arr1, arr2); */

  /* Append(&arr1,10); */
  /* Insert(&arr1,0,12); */
  /* printf("Deleted value: %d\n", Delete(&arr1,2)); */

  /* printf("%d\n", LinearSearch(arr1, 6)); */
  /* printf("%d\n", BinarySearch(arr1, 5)); */
  /* printf("%d\n", RBinarySearch(arr1, 0, arr1.length, 5)); */
  /* printf("%d\n", Set(&arr1, 1, 12)); */
  /* printf("%d\n", Max(arr1)); */
  /* printf("%d\n", Sum(arr1)); */
  /* printf("%d\n", Average(arr1)); */
  /* ReverseArr(&arr1); */
  /* LeftShift(&arr1); */
  /* InsertInSortedArray(&arr1, 6); */
  /* printf("%d", isSorted(arr1)); */
  /* ReArrange(&arr2); */
  /* Merging(arr1, arr2); */
  /* MissingSingleElement(arr); */
  /* FasterMissingElement(arr); */
  /* FindDuplicates(arr); */

  struct Array *res;
  struct Array arr = {{3, 1, 2, 7, 9}, 10, 5};
  res = SumOfK(arr, 5);
  Display(*res);
  return 0;
}
