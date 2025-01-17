//============ Part 1 Fizz Buzz ==========

for (let i =1; i <= 100; i++){ // Loop through all numbers 1- 100

    if  (i % 3 == 0 && i % 5 !== 0) {
        console.log(`${i} Fizz`); // "Fizz", if number divisible by 3
    }
   if (i % 5 == 0 && i % 3 !== 0) {
        console.log(`${i} Buzz`); // "Buzz", if number divisible by 5
    }
   if (i % 3 ==0 && i % 5 == 0) {
        console.log(`${i} Fizz Buzz`); //"Fizz Buzz, if divisible by 3 and 5"
      
    }
    else if(i % 3 !== 0 && i % 5 !==0) { 
        console.log(i); //"number", if not divisible by 3 or 5
    }
}
//========= Part 2 Prime Time ============
let n = parseInt(prompt("Enter a starting number:")); // Input for the starting number

let nextPrime = n + 1; //Start checking from the next number


while (true) {
  let isPrime = true; // Assume the number is prime


  // Check divisors from 2 up to one less than the current number
  for (let i = 2; i < nextPrime; i++) {
    if (nextPrime % i === 0) {
      isPrime = false; // Not a prime number
      break; // Exit the for loop early
    }
  }

  if (isPrime) {
    console.log("The next prime number after " + n + " is " +   nextPrime);
    break; // Exit the while loop
  }

  nextPrime++; // Increment to check the next number
}



// ============Part 3 Feeling Loopy================