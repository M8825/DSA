def wordBreak(s: str, wordDict: List[str]) -> bool:
    word_set = set(wordDict)
    dp = [False] * (len(s) + 1)
    dp[0] = True

    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break

    return dp[-1]


def productExceptSelf(nums: List[int]) -> List[int]:
    n = len(nums)
    answer = [1] * n

    # Left products
    left_product = 1
    for i in range(n):
        answer[i] = left_product
        left_product *= nums[i]

    # Right products
    right_product = 1
    for i in range(n - 1, -1, -1):
        answer[i] *= right_product
        right_product *= nums[i]

    return answer


def spiralOrder(matrix: List[List[int]]) -> List[int]:
    result = []
    while matrix:
        # Add the first row
        result += matrix.pop(0)
        # Add the last column
        if matrix and matrix[0]:
            for row in matrix:
                result.append(row.pop())
        # Add the last row in reverse
        if matrix:
            result += matrix.pop()[::-1]
        # Add the first column in reverse
        if matrix and matrix[0]:
            for row in matrix[::-1]:
                result.append(row.pop(0))

    return resul    t


import heapq

def findKthLargest(nums: List[int], k: int) -> int:
    return heapq.nlargest(k, nums)[-1]

def findPeakElement(nums: List[int]) -> int:
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[mid + 1]:
            right = mid
        else:
            left = mid + 1
    return left

def rotate(matrix: List[List[int]]) -> None:
    n = len(matrix)
    # Transpose the matrix
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    # Reverse each row
    for i in range(n):
        matrix[i].reverse()


from collections import defaultdict

def groupAnagrams(strs: List[str]) -> List[List[str]]:
    anagrams = defaultdict(list)

    for s in strs:
        sorted_str = ''.join(sorted(s))
        anagrams[sorted_str].append(s)

    return list(anagrams.values())
