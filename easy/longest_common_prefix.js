var longestCommonPrefix = function (strs) {
  if (strs.length == 1) {
    return strs[0];
  }
  let str = "";
  for (let i = 0; i < strs[0].length + 1; i++) {
    str_ = strs[0].substring(0, i);
    let check = true;
    for (let j = 1; j < strs.length; j++) {
      if (str_ != strs[j].substring(0, i)) {
        check = false;
        break;
      }
    }
    if (!check) {
      return str;
    }
    str = str_;
  }
  return str;
};

// test
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
