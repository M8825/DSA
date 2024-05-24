def generate_pascal_triangle(n: int) -> List[List[int]]:
    res = [[1] * (i + 1) for i in range(n)]

    for i in range(n):
        for j in range(1, i):
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j]

    return res

def nth_row_pascal_triangle(n: int) -> List[int]:
    res = [1 for _ in range(n + 1)]

    for i in range(1, n):
        for j in range(i, 0, -1):
            res[j] += res[j - 1]

    return res
