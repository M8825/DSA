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


from collections import defaultdict, deque

def canFinish(numCourses: int, prerequisites: List[List[int]]) -> bool:
    indegree = [0] * numCourses
    graph = defaultdict(list)

    for course, prereq in prerequisites:
        graph[prereq].append(course)
        indegree[course] += 1

    queue = deque([i for i in range(numCourses) if indegree[i] == 0])
    count = 0

    while queue:
        course = queue.popleft()
        count += 1
        for neighbor in graph[course]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return count == numCourses


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorderTraversal(root: TreeNode) -> List[int]:
    result = []
    stack = []
    current = root

    while current or stack:
        # Go to the leftmost node
        while current:
            stack.append(current)
            current = current.left
        # Visit the node
        current = stack.pop()
        result.append(current.val)
        # Visit the right subtree
        current = current.right

    return result


def findAndReplacePattern(words, pattern):
    def matches(word):
        w_to_p, p_to_w = {}, {}
        for w, p in zip(word, pattern):
            if w not in w_to_p:
                w_to_p[w] = p
            if p not in p_to_w:
                p_to_w[p] = w
            if (w_to_p[w], p_to_w[p]) != (p, w):
                return False
        return True

    return [word for word in words if matches(word)]


def minDominoRotations(A, B):
    def check(x):
        rotations_a = rotations_b = 0
        for i in range(len(A)):
            if A[i] != x and B[i] != x:
                return -1
            elif A[i] != x:
                rotations_a += 1
            elif B[i] != x:
                rotations_b += 1
        return min(rotations_a, rotations_b)

    rotations = check(A[0])
    if rotations != -1 or A[0] == B[0]:
        return rotations
    return check(B[0])

import heapq

def kthSmallest(matrix, k):
    n = len(matrix)
    min_heap = [(matrix[i][0], i, 0) for i in range(min(k, n))]
    heapq.heapify(min_heap)

    for _ in range(k - 1):
        val, r, c = heapq.heappop(min_heap)
        if c + 1 < n:
            heapq.heappush(min_heap, (matrix[r][c + 1], r, c + 1))

    return heapq.heappop(min_heap)[0]


def partitionLabels(s):
    last = {c: i for i, c in enumerate(s)}
    j = anchor = 0
    result = []

    for i, c in enumerate(s):
        j = max(j, last[c])
        if i == j:
            result.append(i - anchor + 1)
            anchor = i + 1

    return result


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def sumEvenGrandparent(root):
    def dfs(node, parent, grandparent):
        if not node:
            return 0
        sum_val = 0
        if grandparent and grandparent.val % 2 == 0:
            sum_val += node.val
        sum_val += dfs(node.left, node, parent)
        sum_val += dfs(node.right, node, parent)
        return sum_val

    return dfs(root, None, None)


def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0

    while left < right:
        width = right - left
        max_area = max(max_area, min(height[left], height[right]) * width)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area

def threeSum(nums):
    nums.sort()
    result = []

    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1

    return result


def setZeroes(matrix):
    rows, cols = len(matrix), len(matrix[0])
    row_zero = False

    for i in range(rows):
        for j in range(cols):
            if matrix[i][j] == 0:
                matrix[0][j] = 0
                if i > 0:
                    matrix[i][0] = 0
                else:
                    row_zero = True

    for i in range(1, rows):
        for j in range(1, cols):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0

    if matrix[0][0] == 0:
        for i in range(rows):
            matrix[i][0] = 0

    if row_zero:
        for j in range(cols):
            matrix[0][j] = 0

def uniquePaths(m, n):
    dp = [[1] * n for _ in range(m)]

    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

    return dp[-1][-1]

def searchMatrix(matrix, target):
    if not matrix:
        return False

    m, n = len(matrix), len(matrix[0])
    left, right = 0, m * n - 1

    while left <= right:
        mid = (left + right) // 2
        mid_value = matrix[mid // n][mid % n]

        if mid_value == target:
            return True
        elif mid_value < target:
            left = mid + 1
        else:
            right = mid - 1

    return False


def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0

    while left < right:
        width = right - left
        max_area = max(max_area, min(height[left], height[right]) * width)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area

import heapq

def kthSmallest(matrix, k):
    n = len(matrix)
    min_heap = [(matrix[i][0], i, 0) for i in range(n)]  # Initialize the heap
    heapq.heapify(min_heap)

    # Extract-min k-1 times
    for _ in range(k - 1):
        val, row, col = heapq.heappop(min_heap)
        if col + 1 < n:
            heapq.heappush(min_heap, (matrix[row][col + 1], row, col + 1))

    return heapq.heappop(min_heap)[0]

# Example
matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]]
k = 8
print(kthSmallest(matrix, k))  # Output: 13


class TrieNode:
    def __init__(self):
        self.children = {}

def findMaximumXOR(nums):
    root = TrieNode()
    max_xor = 0

    for num in nums:
        current_node = root
        complement_node = root
        current_xor = 0

        for i in range(31, -1, -1):  # 32 bits for integers
            bit = (num >> i) & 1
            complement = 1 - bit

            # Insert number into Trie
            if bit not in current_node.children:
                current_node.children[bit] = TrieNode()
            current_node = current_node.children[bit]

            # Check complement for max XOR
            if complement in complement_node.children:
                current_xor = (current_xor << 1) | 1
                complement_node = complement_node.children[complement]
            else:
                current_xor = (current_xor << 1)
                complement_node = complement_node.children.get(bit)

        max_xor = max(max_xor, current_xor)

    return max_xor

# Example
nums = [3, 10, 5, 25, 2, 8]
print(findMaximumXOR(nums))  # Output: 28

def lengthOfLongestSubstringKDistinct(s, k):
    char_count = {}
    left = 0
    max_length = 0

    for right in range(len(s)):
        char_count[s[right]] = char_count.get(s[right], 0) + 1

        while len(char_count) > k:
            char_count[s[left]] -= 1
            if char_count[s[left]] == 0:
                del char_count[s[left]]
            left += 1

        max_length = max(max_length, right - left + 1)

    return max_length

# Example
s = "eceba"
k = 2
print(lengthOfLongestSubstringKDistinct(s, k))  # Output: 3
