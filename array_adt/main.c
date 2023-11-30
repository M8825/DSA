#include <stdio.h>

struct Array {
  int A[10];
  int size;
  int length;
};

void Display(struct Array arr) {
  int i;
  for (i = 0; i < arr.length; i++) {
    printf("%d", arr.A[i]);
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

int main() {
  struct Array arr1 = {{2, 3, 4, 5, 6}, 10, 5};

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
  ReverseArr(&arr1);

  Display(arr1);
  return 0;
}
