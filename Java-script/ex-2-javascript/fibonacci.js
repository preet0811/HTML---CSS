function fibonacciSequence(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}

// Example: Print the first 10 numbers in the Fibonacci sequence
const n = 10;
const sequence = fibonacciSequence(n);
console.log(sequence.join(", "));
