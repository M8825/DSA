from test_framework import generic_test
import functools
# import string


def ss_decode_col_id(col: str) -> int:
    return functools.reduce(
        lambda res, c: res * 26 + ord(c) - ord('A') + 1,
        col, 0
    )


def ss_decode_col_id_to_str(n: int) -> str:
    res = []
    while n > 0:
        n -= 1
        res.append(chr(ord('A') + n % 26))
        n //= 26

    return ''.join(reversed(res))

print("It should return 'ZZ': ", ss_decode_col_id_to_str(4))


if __name__ == '__main__':
    exit(
        generic_test.generic_test_main('spreadsheet_encoding.py',
                                       'spreadsheet_encoding.tsv',
                                       ss_decode_col_id))
