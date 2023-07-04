function findLCM(a, b) {
  const gcd = findGCD(a, b);
  const lcm = (a * b) / gcd;
  return lcm;
}

function findGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(findLCM(4, 6));
console.log(findLCM(10, 15));
console.log(findLCM(7, 13));
