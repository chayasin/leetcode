/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    // console.log(stack, ' : ', s[i])
    if (map[s[i]]) {
      stack.push(map[s[i]]);
    } else {
      if (stack.pop() !== s[i]) return false;
    }
  }
  return stack.length === 0;
};

// test case
console.log(isValid("()")); // true - Case 1: Simple valid parentheses
console.log(isValid("()[]{}")); // true - Case 2: Mixed valid parentheses
console.log(isValid("(]")); // false - Case 3: Unmatched parentheses
console.log(isValid("([)]")); // false - Case 4: Incorrect nesting
console.log(isValid("{[()]}")); // true - Case 5: Nested valid parentheses
console.log(isValid("")); // true - Case 6: Empty string (edge case)
