class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str: # "abc" - "pqr"
        len1, len2 = len(word1), len(word2)
        res = ""
        i = 0

        while  i < len1 and i < len2:
            res += word1[i]
            res += word2[i]
            i += 1

        res += word1[i:] if i < len1 else word2[i:]

        return re
