function printPrimeNumbers(start, end) {
  for (let number = start; number <= end; number++) {
    let isPrime = true;

    // Check if the number is less than 2
    if (number < 2) {
      isPrime = false;
    }

    // Check for divisibility from 2 to square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false; // Number is divisible, hence not prime
        break;
      }
    }

    if (isPrime) {
      console.log(number);
    }
  }
}

// Usage example: printing prime numbers between 0 and 10
printPrimeNumbers(0, 10);
