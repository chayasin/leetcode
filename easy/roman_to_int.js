/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    // s = s.split('').reverse().join('')

    let mySum = 0;
    let progress = 'I';
    let l = s.length - 1;
    let j;

    for(let i = 0; i < l+1; i++) {
        if (romans[s[l-i]] < romans[progress]) {
            mySum -= romans[s[l-i]]
        } else {
            mySum += romans[s[l-i]]
            progress = s[l-i]
        }
    }

    return mySum
};

// Test cases
console.log(romanToInt('III')) // 3
console.log(romanToInt('IV')) // 4
console.log(romanToInt('IX')) // 9
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994