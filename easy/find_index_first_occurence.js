/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // console.log(i)
    // console.log(haystack.substr(i,needle.length))
    if (haystack.substr(i, needle.length) === needle) {
      return i;
    }
  }
  return -1;
};
