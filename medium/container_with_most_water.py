import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        r = len(height)-1
        max = 0
        while True:
            if height[l] > height[r]:
                if max < height[r]*(r-l):
                    max = height[r]*(r-l)
                r = r-1
            else:
                if max < height[l]*(r-l):
                    max = height[l]*(r-l)
                l = l+1
            if l==r:
                break
        return max