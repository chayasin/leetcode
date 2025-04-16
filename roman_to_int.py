class Solution:
    def romanToInt(self, s: str) -> int:
        romana = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        total = 0
        prev_value = 0
        
        for char in reversed(s):
            current_value = romana[char]
            
            if current_value < prev_value:
                total -= current_value
            else:
                total += current_value
                prev_value = current_value
        
        return total
    
# test the function
if __name__ == "__main__":
    s = Solution()
    print(s.romanToInt("III"))  # Output: 3
    print(s.romanToInt("IV"))   # Output: 4
    print(s.romanToInt("IX"))   # Output: 9
    print(s.romanToInt("LVIII")) # Output: 58
    print(s.romanToInt("MCMXCIV")) # Output: 1994