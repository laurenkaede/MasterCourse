/* Block scope - for loop, while loop, if statements. Using 'let' outside of a block scope won't run, using 'var' outside of a block scope WILL run. Using 'let' after block scope element has run, it will no longer exist. Using 'var' after block scope element has run, it will still exist. Block scope is code within curly brackets. Using 'let' prevents block scope code from interfering with code outside of it. */

// for (var i = 0; i < 2; i++) {
//     console.log (i);
// }

// // i = 0
// // 0 < 2 True
// // console.log (0);
// // i++ => 1

// // 1 < 2 True
// // console.log (1);
// // i++ => 2

// // 2 < 2 False
// // Break the loop

// console.log (i);

if (5 > 2) {
    let answer = "This is true.";
}

console.log(answer); // This will return as undefined as i've used a 'let' statement outside of a block scope.

if (5 > 2) {
    var answer = "This is true.";
}

console.log(answer); // This will return as 'This is true.' as i've used a 'var' statement outside of a block scope.