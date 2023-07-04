function isArmstrongNumber(number) {
  let sum = 0;
  let temp = number;
  const numDigits = number.toString().length;

  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, numDigits);
    temp = Math.floor(temp / 10);
  }

  return number === sum;
}

// Testing the function
console.log(isArmstrongNumber(153)); // Output: true
console.log(isArmstrongNumber(1634)); // Output: true
console.log(isArmstrongNumber(370)); // Output: true
console.log(isArmstrongNumber(371)); // Output: true
console.log(isArmstrongNumber(123)); // Output: false
