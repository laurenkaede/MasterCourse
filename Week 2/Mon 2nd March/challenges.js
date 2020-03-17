/* Activity(1) - Completed.
Write a simple function which logs “Hello Code
Nation” to the console.

Then write a higher order function which will run our
simple function five times, even though you only call
it one time.

Hint: Pass the simple function as a parameter, and
this will involve a for loop. */

function greeting() {
    console.log ("Hello Code Nation.")
}

function repeat(callBack) {
    for (let i=0; i < 5; i++) {
        callBack();
    }
}

repeat(greeting);

//-------------------------------------------------------------------------//

let greeting = "Hello Code Nation.";
    // console.log (greeting);

for (let i = 0; i < 5; i++) {
    console.log (greeting); // Returns Hello Code Nation. Hello Code Nation. Hello Code Nation. Hello Code Nation. Hello Code Nation.
}  

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/* Activity(2) - Completed
The array method .map is an example of a higher
order function.

Declare a variable with five numbers, then use .map
to iterate through the array and multiply each array
item by 3. */

// const favNumbers = [3, 6, 9, 15, 18];

// const multipliedNumbers = favNumbers.map ( x => x * 3);

// console.log (multipliedNumbers); // Returns [ 9, 18, 27, 45, 54 ]

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/* Activity(3) - Completed
Test this function to make sure it works by passing a number to the doMaths function, then passing a number and one of the four
maths functions, to the returned function. */

// const add = (a, b) => {
//     return a + b;
// }
// const subtract = (a, b) => {
//     return a - b;
// }
// const multiply = (a, b) => {
//     return a * b;
// }
// const divide = (a, b) => {
//     return a / b;
// }
// const doMaths = (num1) => {
//     return (num2, fn) => {
//         return fn(num1, num2);
//     }
// }

// console.log (divide (36, 3)); // Returns '12'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//