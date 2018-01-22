const decimal = [1, 5, 10, 50, 100, 500, 1000];
const roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

function getMap(char) {
  let romanIndex = roman.indexOf(char);
  return decimal[romanIndex];
}

export function romanToArabic(romanNumber) {
  let sum = 0;
  let len = romanNumber.length - 1;
  for (let i = 0; i < len; i++) {
    if (getMap(romanNumber.charAt(i)) < getMap(romanNumber.charAt(i + 1))) {
          sum -= getMap(romanNumber.charAt(i));
      } else {
          sum += getMap(romanNumber.charAt(i));
      }
  }
  return sum += getMap(romanNumber.charAt(len));
}
