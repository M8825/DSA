def h_index(citations: List[int]) -> int:

    citations.sort()
    n = len(citations)
    for i, c in enumerate(citations):
        if c >= n - i:
            return n - i
    return 0


def strangePrinter(s: str) -> int:
    n = len(s)
    dp = [[0] * n for _ in range(n)]

    for i in range(n - 1, -1, -1):
        dp[i][i] = 1
        for j in range(i + 1, n):
            dp[i][j] = dp[i + 1][j] + 1
            for k in range(i, j):
                if s[k] == s[j]:
                    dp[i][j] = min(dp[i][j], dp[i][k] + dp[k + 1][j - 1])

    return dp[0][n - 1]


import heapq

def minRefuelStops(target: int, startFuel: int, stations: list[list[int]]) -> int:
    fuel = startFuel
    heap, stops = [], 0
    stations.append([target, 0])  # Treat target as a station

    for distance, gas in stations:
        while fuel < distance:
            if not heap:
                return -1
            fuel += -heapq.heappop(heap)
            stops += 1
        heapq.heappush(heap, -gas)

    return stops


def findAllConcatenatedWordsInADict(words: list[str]) -> list[str]:
    wordSet = set(words)

    def canForm(word):
        for i in range(1, len(word)):
            prefix, suffix = word[:i], word[i:]
            if prefix in wordSet and (suffix in wordSet or canForm(suffix)):
                return True
        return False

    return [word for word in words if canForm(word)]


from functools import lru_cache

def numMusicPlaylists(n: int, goal: int, k: int) -> int:
    MOD = 10**9 + 7

    @lru_cache(None)
    def dp(used, length):
        if length == goal:
            return 1 if used == n else 0
        if used > n:
            return 0

        res = (dp(used + 1, length + 1) * (n - used)) % MOD
        if used > k:
            res += (dp(used, length + 1) * (used - k)) % MOD

        return res % MOD

    return dp(0, 0)


from functools import lru_cache

def paintWalls(cost: list[int], time: list[int]) -> int:
    n = len(cost)

    @lru_cache(None)
    def dp(i, freeTime):
        if i == n:
            return 0 if freeTime >= 0 else float('inf')

        # Option 1: Hire a painter
        hire = cost[i] + dp(i + 1, freeTime + time[i] - 1)

        # Option 2: Paint for free
        paint_free = dp(i + 1, freeTime - 1)

        return min(hire, paint_free)

    return dp(0, 0)


def minArea(image, x, y):
    if not image or not image[0]:
        return 0

    m, n = len(image), len(image[0])

    def dfs(i, j, bounds):
        if i < 0 or i >= m or j < 0 or j >= n or image[i][j] == "0":
            return
        image[i][j] = "0"
        bounds[0] = min(bounds[0], i)
        bounds[1] = max(bounds[1], i)
        bounds[2] = min(bounds[2], j)
        bounds[3] = max(bounds[3], j)
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            dfs(i + dx, j + dy, bounds)

    bounds = [x, x, y, y]
    dfs(x, y, bounds)
    return (bounds[1] - bounds[0] + 1) * (bounds[3] - bounds[2] + 1)


def strangePrinter(s):
    n = len(s)
    dp = [[float('inf')] * n for _ in range(n)]

    for i in range(n):
        dp[i][i] = 1

    for length in range(2, n+1):
        for i in range(n-length+1):
            j = i + length - 1
            for k in range(i, j):
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k+1][j])
            if s[i] == s[j]:
                dp[i][j] -= 1

    return dp[0][n-1]


def evaluate(expression):
    def parse(expr, env):
        if expr[0].isdigit() or expr[0] == '-':
            return int(expr)
        elif expr[0] != '(':
            return env[expr]
        elif expr.startswith("(add"):
            _, e1, e2 = expr[5:-1].split(" ", 2)
            return parse(e1, env) + parse(e2, env)
        elif expr.startswith("(mult"):
            _, e1, e2 = expr[6:-1].split(" ", 2)
            return parse(e1, env) * parse(e2, env)
        else:  # let expression
            expr = expr[5:-1]
            tokens = expr.split(" ")
            for i in range(0, len(tokens) - 2, 2):
                env[tokens[i]] = parse(tokens[i+1], env)
            return parse(tokens[-1], env)

    return parse(expression, {})


def minAbbreviation(target, dictionary):
    def abbrLen(mask):
        n = len(target)
        count, i = 0, 0
        while i < n:
            if mask & (1 << i):
                count += 1
            else:
                while i < n and not (mask & (1 << i)):
                    i += 1
                count += 1
            i += 1
        return count

    def isUnique(mask):
        abbr = []
        n = len(target)
        i = 0
        while i < n:
            if mask & (1 << i):
                abbr.append(target[i])
            else:
                j = i
                while j < n and not (mask & (1 << j)):
                    j += 1
                abbr.append(str(j - i))
                i = j - 1
            i += 1
        abbr = "".join(abbr)
        return not any(all(c1 == c2 or c2.isdigit() for c1, c2 in zip(word, abbr)) for word in dictionary)

    n = len(target)
    min_length, result = n, target
    for mask in range(1 << n):
        if isUnique(mask):
            length = abbrLen(mask)
            if length < min_length:
                min_length = length
                result = "".join(
                    target[i] if mask & (1 << i) else ''
                    for i in range(n)
                ) or str(n)
    return result


def findAllConcatenatedWords(words):
    word_set = set(words)

    def canForm(word):
        n = len(word)
        dp = [False] * (n + 1)
        dp[0] = True

        for i in range(1, n + 1):
            for j in range(i):
                if dp[j] and word[j:i] in word_set and word[j:i] != word:
                    dp[i] = True
                    break
        return dp[-1]

    result = []
    for word in words:
        if canForm(word):
            result.append(word)
    return result


from collections import Counter, defaultdict

def minWindow(s: str, t: str) -> str:
    if not s or not t:
        return ""

    target = Counter(t)
    window = defaultdict(int)

    left = 0
    min_length = float("inf")
    min_window = ""
    formed = 0
    required = len(target)

    for right, char in enumerate(s):
        window[char] += 1

        if char in target and window[char] == target[char]:
            formed += 1

        while left <= right and formed == required:
            if right - left + 1 < min_length:
                min_length = right - left + 1
                min_window = s[left:right+1]

            window[s[left]] -= 1
            if s[left] in target and window[s[left]] < target[s[left]]:
                formed -= 1
            left += 1

    return min_window

def longestConsecutive(nums: list[int]) -> int:
    if not nums:
        return 0

    num_set = set(nums)
    longest = 0

    for num in nums:
        if num - 1 not in num_set:  # Start of sequence
            length = 1
            while num + length in num_set:
                length += 1
            longest = max(longest, length)

    return longest

from collections import deque

def ladderLength(beginWord: str, endWord: str, wordList: list[str]) -> int:
    wordSet = set(wordList)
    if endWord not in wordSet:
        return 0

    queue = deque([(beginWord, 1)])

    while queue:
        word, steps = queue.popleft()

        if word == endWord:
            return steps

        for i in range(len(word)) :
            for c in 'abcdefghijklmnopqrstuvwxyz':
                new_word = word[:i] + c + word[i+1:]
                if new_word in wordSet:
                    wordSet.remove(new_word)
                    queue.append((new_word, steps + 1))

    return 0



def lengthOfLongestSubstring(s: str) -> int:
    char_set = set()
    left = 0
    max_length = 0

    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)

    return max_length

def threeSum(nums: List[int]) -> List[List[int]]:
    nums.sort()
    result = []

    for i in range(len(nums)):
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1

    return result


def maxArea(height: List[int]) -> int:
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


def findPeakElement(nums: List[int]) -> int:
    left, right = 0, len(nums) - 1

    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[mid + 1]:
            right = mid
        else:
            left = mid + 1

    return left
