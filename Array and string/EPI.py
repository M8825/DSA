from typing import List, Dict
import random


def all_permuations(A: List[int])-> List[int]:
    def next_permutaiton(perm: List[int])-> List[int]:
        i = len(A) - 2
        while (i >= 0 and perm[i] >= perm[i + 1]):
            i -= 1

        if i == -1:
            return [] # perm is the last permutation

        for j in reversed(range(i + 1, len(perm))):
            if perm[i] < perm[j]:
                perm[i], perm[j] = perm[j], perm[i]
                break

        perm[i + 1:] = reversed(perm[i + 1:])
        return perm

    A.sort()
    result =[A[:]]

    while next_permutaiton(A):
        result.append(A)

    return result

foo = [2, 1, 3]
print(all_permuations(foo))
