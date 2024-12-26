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
