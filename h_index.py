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
