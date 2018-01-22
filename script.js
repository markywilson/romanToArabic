import { getCharMap } from './utils'

/**
 * converts a roman number to arabic number
 * @param romanNumber
 * @returns {number}
 */
export function romanToArabic(romanNumber) {
  let sum = 0;
  let len = romanNumber.length - 1;
  for (let i = 0; i < len; i++) {
    if (getCharMap(romanNumber.charAt(i)) < getCharMap(romanNumber.charAt(i + 1))) {
          sum -= getCharMap(romanNumber.charAt(i));
      } else {
          sum += getCharMap(romanNumber.charAt(i));
      }
  }
  sum += getCharMap(romanNumber.charAt(len));

  return sum;
}
