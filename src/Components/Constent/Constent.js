export function findNthPrime(n) {
      if (n <= 0) return "Invalid input";
    
      const primes = [2];
      let num = 3;
    
      while (primes.length < n) {
        let isPrime = true;
    
        for (let i = 0; i < primes.length && primes[i] * primes[i] <= num; i++) {
          if (num % primes[i] === 0) {
            isPrime = false;
            break; 
          }
        }
    
        if (isPrime) {
          primes.push(num);
        }
    
        num += 2; // Only check odd numbers
      }
    
      return primes[n - 1];
    }
    