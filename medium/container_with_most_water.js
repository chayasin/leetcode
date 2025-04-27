/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (true) {
    if (height[l] > height[r]) {
      if (height[r] * (r - l) > max) {
        max = height[r] * (r - l);
      }
      r = r - 1;
    } else {
      if (height[l] * (r - l) > max) {
        max = height[l] * (r - l);
      }
      l = l + 1;
    }

    if (l === r) {
      break;
    }
  }
  return max;
};
