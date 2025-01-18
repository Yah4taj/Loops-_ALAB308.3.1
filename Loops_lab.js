//============ Part 1 Fizz Buzz ==========

for (let i = 1; i <= 100; i++) {
  // Loop through all numbers 1- 100

  if (i % 3 == 0 && i % 5 !== 0) {
    console.log(`${i} Fizz`); // "Fizz", if number divisible by 3
  }
  if (i % 5 == 0 && i % 3 !== 0) {
    console.log(`${i} Buzz`); // "Buzz", if number divisible by 5
  }
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} Fizz Buzz`); //"Fizz Buzz, if divisible by 3 and 5"
  } else if (i % 3 !== 0 && i % 5 !== 0) {
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
    console.log("The next prime number after " + n + " is " + nextPrime);
    break; // Exit the while loop
  }

  nextPrime++; // Increment to check the next number
}

// ============Part 3 Feeling Loopy================


let csv= "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

// let csv= 
// "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = ""

let currentCell = 1;

for (let i = 0; i <= csv.length; i++) {
  let char = csv[i];
  //  console.log(char);
  if (char === ",") {
    currentCell++;
  } else if (char === "\n" || i === csv.length) {
    console.log(cell1, cell2, cell3, cell4);
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
    currentCell = 1;
  } else {
    if (currentCell === 1) {
      cell1 += char;
    } else if (currentCell === 2) {
      cell2 += char;
    } else if (currentCell === 3) {
      cell3 += char;
    } else if (currentCell === 4) {
      cell4 += char;
  
    }
    
  }
}



