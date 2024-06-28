import heapq
from typing import List, Tuple

from test_framework import generic_test


# Write a program that takes as input a set of sorted sequences and computes the union
# of these sequences as a sorted sequence. For example, if the input is [3, 5, 7], [0, 6], [0, 6, 28]
# then the output is [0, 0, 3, 5, 6, 7, 28]

# Hint: Which part of each sequence is significant as the algorithm executes?
def merge_sorted_arrays(sorted_arrays: List[List[int]]) -> List[int]:
    min_heap: List[Tuple[int, int]] = []
    sorted_iters = [iter(x) for x in sorted_arrays]

    for i, it in enumerate(sorted_iters):
        fisrt_element = next(it, None)
        if fisrt_element is not None:
            heapq.heappush(min_heap, (fisrt_element, i))

    res = []

    while min_heap:
        smallest_ele, smallest_ele_i = heapq.heappop(min_heap)
        res.append(smallest_ele)
        smallest_ele_iter = sorted_iters[smallest_ele_i]

        next_element = next(smallest_ele_iter, None)
        if next_element is not None:
            heapq.heappush(min_heap, (next_element, smallest_ele_i))

    return res

if __name__ == '__main__':
    exit(
        generic_test.generic_test_main('sorted_arrays_merge.py',
                                       'sorted_arrays_merge.tsv',
                                       merge_sorted_arrays))
