class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowel = ["a", "e", "i", "o", "u"]
        current_count = 0
        max_count = 0

        for i in range(k):
            if s[i] in vowel:
                current_count += 1
        max_count = current_count

        # Slide the window across the string
        for i in range(k, len(s)):
            if s[i - k] in vowel:
                current_count -= 1
            if s[i] in vowel:
                current_count += 1

            # Update max_count if current_count is higher
            max_count = max(max_count, current_count)

        return max_count
