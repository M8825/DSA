class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        max_candy = max(candies)
        res = [False] * len(candies)

        for i,candy in enumerate(candies):
            if candy + extraCandies >= max_candy:
                res[i] = True
            else:
                res[i] = False

        return res



def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
    count = 0
    for i in range(len(flowerbed)):
        # Check if the current plot is empty.
        if flowerbed[i] == 0:
            # Check if the left and right plots are empty.
            empty_left_plot = (i == 0) or (flowerbed[i - 1] == 0)
            empty_right_lot = (i == len(flowerbed) - 1) or (flowerbed[i + 1] == 0)

            # If both plots are empty, we can plant a flower here.
            if empty_left_plot and empty_right_lot:
                flowerbed[i] = 1
                count += 1

    return count >= n


class Solution:
    def compress(self, chars: List[str]) -> int: # ["a","a","b","b","c","c","c"]
        write = 0
        count = 1

        for read in range(1, len(chars) + 1):
            if read < len(chars) and chars[read] == chars[read - 1]:
                count += 1
            else:
                chars[write] = chars[read - 1]
                write += 1

                if count > 1:
                    for digit in str(count):
                        chars[write] = digit
                        write += 1
                count = 1

        return write



class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_area = 0
        left = 0
        right = len(height) - 1

        while left < right:
            max_area = max(max_area, (right - left) * min(height[left], height[right]))

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return max_area


class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set('aeiou')
        max_count = 0
        current_count = 0

        # initialize window
        for i in range(k):
            if s[i] in vowels:
                current_count += 1
        max_count = current_count

        for i in range(k, len(s)):
            if s[i] in vowels:
                current_count += 1
            if s[i - k] in vowels:
                current_count -= 1
            max_count = max(max_count, current_count)

        return max_count


