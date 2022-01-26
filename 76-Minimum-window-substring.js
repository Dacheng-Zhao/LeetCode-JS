/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    let map = {};
    t.split('').forEach(c => {map[c] = (map[c] || 0) + 1});
  
    let count = t.length;   // remaining matching count
  
    let l = 0;
    let r = 0;
  
    let start = 0;
    let minLen = Infinity;
  
    while (r < s.length) {
      if (map[s[r++]]-- > 0) count--;
  
      while (count === 0) {   // valid
        if (r - l < minLen) {
          minLen = r - l;
          start = l;
        }
  
        if (map[s[l++]]++ === 0) count++; // make it invalid
      }
    }
  
    return minLen === Infinity ? '' : s.substr(start, minLen);
  }



  /**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
  if (s.length < t.length) {
      return ''
  }
  
  const wordCharMap = constructWordCharMap(t);
  const count = Object.values(wordCharMap).reduce((total, curr) => total + curr);
  let left = findNextAnchor(s, 0, wordCharMap);
  console.log(left);
  let right = left;
  let minSubstringLength = Infinity;
  let mactchCount = 0;
  let minSubstring = '';
  
  while (right < s.length) {
      if (wordCharMap.hasOwnProperty(s[right])) {
          if (wordCharMap[s[right]] > 0) {
              wordCharMap[s[right]] -= 1;
              mactchCount += 1; 
          } else {
              wordCharMap[s[right]] -= 1;
          }
      }
      
      
      while (left < s.length && mactchCount === count) {
          if (right - left < minSubstringLength) {
              minSubstringLength = right - left;
              minSubstring = s.slice(left, right + 1);
          }
          
          const leftChar = s[left];
          wordCharMap[leftChar] += 1;
          if (wordCharMap[leftChar] > 0) {
              mactchCount -= 1;
          }
          left = findNextAnchor(s, left + 1, wordCharMap);
      }
      right = findNextAnchor(s, right + 1, wordCharMap);
  }
  
  return minSubstring;
  
};

const constructWordCharMap = function(t) {
  const wordCharMap = {};
  for (let char of t) {
      wordCharMap.hasOwnProperty(char) ? wordCharMap[char] += 1 : wordCharMap[char] = 1;
  }
  return wordCharMap;
}

const findNextAnchor = function(s, currentLeft, wordCharMap) {
  let index = currentLeft;
  while (index < s.length) {
      if (wordCharMap.hasOwnProperty(s[index])) {
          return index;
      }
      index += 1;
  }
  return Infinity;
}