import itertools
import heapq
from typing import Iterator, List

from test_framework import generic_test

# Write a program which takes as input a very long sequence of numbers and print
# the numbers in sorted order. Each number is at most `k` away from its correctly
# sorted positions. For example non number in the sequence [3, -1, 2, 6, 4, 5, 8]
# is more than 2 away from its final sorted position
def sort_approximately_sorted_array(sequence: Iterator[int],
                                    k: int) -> List[int]:
    min_heap: List[int] = []
    res = []
    for ele in itertools.islice(sequence, k):
        heapq.heappush(min_heap, ele)

    for ele in sequence:
        smallest = heapq.heappushpop(min_heap, ele)
        res.append(smallest)

    while min_heap:
        smallest = heapq.heappop(min_heap)
        res.append(smallest)

    return res

def sort_approximately_sorted_array_wrapper(sequence, k):
    return sort_approximately_sorted_array(iter(sequence), k)

if __name__ == '__main__':
    exit(
        generic_test.generic_test_main(
            'sort_almost_sorted_array.py', 'sort_almost_sorted_array.tsv',
            sort_approximately_sorted_array_wrapper))
