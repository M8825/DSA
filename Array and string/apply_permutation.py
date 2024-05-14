from typing import List

from test_framework import generic_test

def apply_permutation(perm: List[int], A: List[int]) -> None:
    for i in range(len(A)):
        while perm[i] != i:
            final_dest = perm[i]
            A[i], A[final_dest] = A[final_dest], A[i]
            perm[i], perm[final_dest] = perm[final_dest], perm[i]

def apply_permutation_wrapper(perm, A):
    apply_permutation(perm, A)
    return A

if __name__ == '__main__':
    exit(
        generic_test.generic_test_main('apply_permutation.py',
                                       'apply_permutation.tsv',
                                       apply_permutation_wrapper))
