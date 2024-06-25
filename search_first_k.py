from typing import List

from test_framework import generic_test


def search_first_of_k(A: List[int], k: int) -> int:
    left, right, res = 0, len(A) - 1, -1

    while left <= right:
        mid = (left + right) // 2

        if A[mid] > k:
            right = mid - 1
        elif A[mid] == k:
            res = mid
            right = mid - 1
        else:
            left = mid + 1
    return res

if __name__ == '__main__':
    exit(
        generic_test.generic_test_main('search_first_key.py',
                                       'search_first_key.tsv',
                                       search_first_of_k))
