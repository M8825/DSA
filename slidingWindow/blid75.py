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



# Here I have used division operation

class Solution(object):
    def productExceptSelf(self, nums):
        total_product = 1
        zero_count = 0

        for num in nums:
            if num != 0:
                total_product *= num
            else:
                zero_count += 1

        result = []

        if zero_count > 1:
            return [0] * len(nums)

        for num in nums:
            if num != 0:
                if zero_count == 1:
                    result.append(0)
                else:
                    result.append(total_product // num)
            else:
                result.append(total_product)

        return result

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
    def isSubsequence(self, s: str, t: str) -> bool:
        sp = tp = 0

        while sp < len(s) and tp < len(t):
            if s[sp] == t[tp]:
                sp += 1
            tp += 1

        return sp == len(s)


class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums.sort()

        left = 0
        right = len(nums) - 1
        operation = 0

        while left < right:
            if ((nums[left] + nums[right]) == k):
                operation += 1
                left +=1
                right -=1
            elif((nums[left] + nums[right]) < k):
                left += 1
            else:
                right -= 1
        return operation

class Solution(object):
    def closeStrings(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: bool
        """
        if len(word1)!=len(word2):
            return False
        d1={}
        d2={}
        for i in word1:
            d1[i]=d1.get(i,0)+1
        for i in word2:
            d2[i]=d2.get(i,0)+1
        if set(d1.keys())!=set(d2.keys()):
            return False
        a=list(d1.values())
        b=list(d2.values())
        a.sort()
        b.sort()
        return a==b


class Solution(object):
    def asteroidCollision(self, asteroids):
        """
        :type asteroids: List[int]
        :rtype: List[int]
        """
        stack = []

        for asteroid in asteroids:
            while stack and asteroid < 0 < stack[-1]:
                if stack[-1] < -asteroid:
                    stack.pop()
                    continue
                elif stack[-1] == -asteroid:
                    stack.pop()
                break
            else:
                stack.append(asteroid)

        return stack


class RecentCounter:
    def __init__(self):
        self.records = []
        self.start = 0

    def ping(self, t: int) -> int:
        self.records.append(t)
        while self.records[self.start] < t - 3000:
            self.start += 1
        return len(self.records) - self.start

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], target: int) -> int:
        if root == None:
            return 0
        l = []
        def gen(curr,s,v):
            if curr==None:
                return
            if s==target:
                l.append(1)
            if curr.left:
                gen(curr.left,s+curr.left.val,v+[curr.left.val])
            if curr.right:
                gen(curr.right,s+curr.right.val,v+[curr.right.val])
        def inorder(root):
            if root:
                gen(root,root.val,[root.val])
                inorder(root.left)
                inorder(root.right)
        inorder(root)
        return sum(l)
