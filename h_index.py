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
