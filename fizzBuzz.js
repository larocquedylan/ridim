// implement fizzbuzz
// The FizzBuzz question is a coding task that asks candidates to write a program that prints numbers from 1 to 100:
// For multiples of three, print "Fizz" instead of the number
// For multiples of five, print "Buzz"
// For multiples of both three and five, print "FizzBuzz"
//

// go through an array from 0 to 100
// for each iteration print either: the number, or fizz, or buzz, or fizzbuzz.

export default function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
