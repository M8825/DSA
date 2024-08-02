class Solution:
    def reverseVowels(self, s: str) -> str: # "leetcode"
        # use two pinter approach, left, right
        # while l < r:
            # increment l if s[l] not in vovels
            # decrement r if s[r] not in vovels
            # swap s[l] and s[r]
            # increment, decrement pointers
        vowels = ['a', 'e', 'i', 'o', 'u']
        res = list(s)
        l, r = 0, len(s) - 1

        while l < r:
            while s[l] not in vowels and l < r:
                l += 1

            while s[r] not in vowels and l < r:
                r -= 1

            res[l], res[r] = res[r], res[l]
            l, r = l + 1, r - 1

        return ''.join(res)


