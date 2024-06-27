import heapq
from typing import List, Tuple

from test_framework import generic_test

# Design an efficient algorithm for sorting a k-increasing-decreasing array
# Hint: Can you cast this in terms of combining k sorted arrays?
def merge_sorted_arrays(sorted_sublists):

def sort_k_increasing_decreasing_array(A: List[int]) -> List[int]:
    sorted_sublists = []
    increasing, decresing = range(2)
    sublist_type = increasing
    start_idx = 0
    for i in range(1, len(A) + 1):
        if (i == len(A) or
            (A[i - 1] < A[i] and sublist_type == decresing) or
            (A[i - 1] >= A[i] and sublist_type == increasing)):
            sorted_sublists.append(A[start_idx:i] if sublist_type == increasing else
                                   A[i - 1:sublist_type - 1:-1])
            start_idx = i
            sublists_type = (increasing if sublist_type == decresing else decresing)

    return merge_sorted_arrays(sorted_sublists)

if __name__ == '__main__':
    exit(
        generic_test.generic_test_main('sort_increasing_decreasing_array.py',
                                       'sort_increasing_decreasing_array.tsv',
                                       sort_k_increasing_decreasing_array))
