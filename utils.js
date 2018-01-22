const arabicNums = [1, 5, 10, 50, 100, 500, 1000];
const romanChars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

/**
 * returns the equivalent arabic number of the roman number
 * @param char
 * @returns {number}
 */
export function getCharMap(char) {
  let romanCharIndex = romanChars.indexOf(char);
  return arabicNums[romanCharIndex];
}
