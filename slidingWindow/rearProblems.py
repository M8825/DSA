from collections import defaultdict

def leastBricks(wall):
    edge_count = defaultdict(int)

    for row in wall:
        edge_position = 0
        for brick in row[:-1]:  # skip the last brick to avoid counting the edge
            edge_position += brick
            edge_count[edge_position] += 1

    # Minimum bricks cut will be total rows minus the maximum number of aligned edges
    return len(wall) - max(edge_count.values(), default=0)


from bisect import bisect_right

def numMatchingSubseq(s, words):
    char_indices = defaultdict(list)
    for idx, char in enumerate(s):
        char_indices[char].append(idx)

    def is_subsequence(word):
        prev_index = -1
        for char in word:
            if char not in char_indices:
                return False
            pos = bisect_right(char_indices[char], prev_index)
            if pos == len(char_indices[char]):
                return False
            prev_index = char_indices[char][pos]
        return True

    return sum(is_subsequence(word) for word in words)


def maxAreaOfIsland(grid):
    def dfs(x, y):
        if x < 0 or y < 0 or x >= len(grid) or y >= len(grid[0]) or grid[x][y] == 0:
            return 0
        grid[x][y] = 0
        return 1 + dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1)

    max_area = 0
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == 1:
                max_area = max(max_area, dfs(i, j))
    return max_area


from collections import Counter, defaultdict

def isPossible(nums):
    freq = Counter(nums)
    subsequences = defaultdict(int)

    for num in nums:
        if freq[num] == 0:
            continue
        elif subsequences[num - 1] > 0:
            subsequences[num - 1] -= 1
            subsequences[num] += 1
        elif freq[num + 1] > 0 and freq[num + 2] > 0:
            freq[num + 1] -= 1
            freq[num + 2] -= 1
            subsequences[num + 2] += 1
        else:
            return False
        freq[num] -= 1
    return True

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def buildTree(preorder, inorder):
    if not preorder or not inorder:
        return None

    root_val = preorder.pop(0)
    root = TreeNode(root_val)
    inorder_index = inorder.index(root_val)

    root.left = buildTree(preorder, inorder[:inorder_index])
    root.right = buildTree(preorder, inorder[inorder_index + 1:])

    return root
