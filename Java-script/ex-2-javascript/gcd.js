function findGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(findGCD(24, 36));
console.log(findGCD(49, 14));
console.log(findGCD(20, 15));
