def matrix_in_spiral_order(square_matrix: List[List[int]]) -> List[int]:
    shift = ((0, 1), (1, 0), (0, -1), (-1, 0))
    direction = x = y = 0

    res = []

    for _ in range(len(square_matrix)**2):
        res.append(square_matrix[x][y])
        square_matrix[x][y] = None # It's visited
        next_x = x + shift[direction][0]
        next_y = y + shift[direction][1]

        if (next_x not in range(len(square_matrix))
            or next_y not in range(len(square_matrix[0]))
            or square_matrix[next_x][next_y] is None):
            direction = (direction + 1) % 4 # 0, 1, 2, 3
            next_x = x + shift[direction][0]
            next_y = y + shift[direction][1]
        x, y = next_x, next_y

    return res
