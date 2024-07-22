class Solution:
    def plusOne(self, num: List[int]) -> List[int]: # [9,9] => [10, 0]
        num[-1] += 1

        for i in reversed(range(1, len(num))):
            if num[i] != 10:
                break
            num[i] = 0
            num[i - 1] += 1
        else:
            if num[0] == 10:
                num[0] = 1
                num.append(0)

        return num
