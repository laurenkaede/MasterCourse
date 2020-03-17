/* Activity(1)

Write some code to perform a Bubble Sort on an
array of numbers that returns a new, sorted array.

Do the same but with an array of letters.

Do the same but with a given word, split the word
into individual letters and then sort them.

Do the same with Quick Sort. */



// Bubble Sort ~~~

// function bubbleSort(element) {
//     let swapValue;
//     do {
//         swapValue = false;
//         for (let i = 0; i < element.length; i++) {
//             if (element[i] < element[i - 1]) {
//                 let tempValue = element[i];
//                 element[i] = element[i - 1];
//                 element[i - 1] = tempValue;
//                 swapValue = true;
//             }
//         }

//     } while (swapValue);
//     return element;
// }

// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])); 
// // Bubble sort on an array of numbers.

// console.log(bubbleSort(["h", "s", "g", "l", "p", "z", "b", "r", "e", "v", "m", "f", "c", "j", "x"]));
// // Bubble sort on an array of letters.



// Quick Sort ~~~

// function element(values) {

//     let quickSort = (values, start, end) => {

//         if (start < end) {
//             let pivot = partition(values, start, end);
//             quickSort(values, start, pivot - 1);
//             quickSort(values, pivot + 1, end);
//         }

//     }

//     let partition = (values, start, end) => {
//         let pivot = end;
//         let i = start - 1;
//         let j = start;

//         while (j < pivot) {
//             if (values[j] > values[pivot]) {
//                 j++;
//             } else {
//                 i++;
//                 swap(values, j, i);
//                 j++;
//             }

//         }

//         swap(values, i + 1, pivot);
//         return i + 1;
//     }

//     let swap = (values, firstIndex, secondIndex) => {
//         let temp = values[firstIndex];
//         values[firstIndex] = values[secondIndex];
//         values[secondIndex] = temp;
//     }

//     quickSort(values, 0, values.length - 1);
//     return values;
// }

// console.log(element([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
// console.log(element(["h", "s", "g", "l", "p", "z", "b", "r", "e", "v", "m", "f", "c", "j", "x"]));


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// function bubbleSort(element) {
//     let conversions = [
//         {letter: "c", value: 1},
//         {letter: "o", value: 2},
//         {letter: "d", value: 3},
//         {letter: "e", value: 4},
//         {letter: "n", value: 5},
//         {letter: "a", value: 6},
//         {letter: "t", value: 7},
//         {letter: "i", value: 8},
//         {letter: "o", value: 9},
//         {letter: "n", value: 10}
//     ];

//     let swapValue;
//     do {
//         swapValue = false;
//         for (let i = 0; i < swapValue.length; i++) {
//             if (element[i] < element[i - 1]) {
//                 let tempValue = element[i];
//                 element[i] = element[i - 1];
//                 element[i - 1] = tempValue;
//                 swapValue = true;
//             }
//         }

//     } while (swapValue);
//         return element;
//     }

//     console.log(bubbleSort(["d", "n", "t", "n", "o", "i", "c", "a", "o", "e"])); 


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/* Activity(2)
Given a string of words (paragraphs between 500 and 1000 let’s day), write a function which returns the following information:
Total number of words
Total number of sentences
Longest word
Average length of word used
Number of words above 3 characters */

function longParagraph() {
    console.log("This is a really long paragraph containing between five hundred and a thousand words. This paragraph contains more than one sentence. In fact, it has three sentences.");
    console.log(longParagraph.length);
}




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/* Activity(3)
Write a function to swap the case of each
character in a string.
e.g. “Adam Smith” becomes “aDAM sMITH” */

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/* Activity(4)
Research on what a binary search is
Given a sorted array of numbers, implement a
binary search to find the position of a given number,
or if not found, the position of the next largest
number.
Example:
find_nearest (7, array(1,6,7,9,13)) //return “2”
find_nearest (8, array(1,6,7,9,13)) //return “3" */

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//