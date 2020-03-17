//---------------------------------------------------------------------------------------------------------------------//
// Array Challenges - Completed.
//---------------------------------------------------------------------------------------------------------------------//
// Activity 0 - Make an array of your favourite songs. 3 of them. Log to console. - Completed.

// let favSongs = [
//     "Numb",
//     "Voice Within",
//     "Thunderstruck"
// ];

// console.log(favSongs);

//---------------------------------------------------------------------------------------------------------------------//

// Activity 1 - Create a list of your favourite websites (3 of them), and then add another two once you’ve created the list. Then remove the last website. - Completed.

// let favWebsites = [
//     "Google",
//     "Facebook",
//     "Amazon"
// ];

// // console.log(favWebsites);

// favWebsites.push("Goodreads", "LinkedIn");
// // console.log(favWebsites);

// favWebsites.pop();
// // console.log(favWebsites);

//---------------------------------------------------------------------------------------------------------------------

// Activity 2 - Research on the following methods: map(), shift(), unshift(), slice(), splice() (and many more). Create a program to demonstrate the uses of each method, some of these you may need more than one example. (Pay attention: not all methods would permanently updates/make changes to the arrays themselves.) - Completed.



// .map() runs through a loop of your list using a func

// const myFavWebsites = favWebsites.map((websites) => {
//     return "My favourite websites are " + websites;
// });
// console.log(favWebsites) 



// .shift() removes the first element from an array and returns that removed element. It changes the length of the array.

// const firstElement = favWebsites.shift(); 

// console.log(favWebsites); // Returns [Facebook, Amazon, Goodreads]

// console.log(firstElement); // Returns [Google]



// .unshift() adds one or more elements to the beginning of an array and returns the new length of the array.

// favWebsites.unshift("YouTube", "Netflix");

// console.log (favWebsites); // Returns [ 'YouTube', 'Netflix', 'Facebook', 'Amazon', 'Goodreads' ]



// .slice() returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.

// console.log (favWebsites.slice(2)); // Returns [ 'Facebook', 'Amazon', 'Goodreads' ]
// console.log (favWebsites.slice(0, 3)); // Returns [ 'YouTube', 'Netflix', 'Facebook' ]



// .splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb'); // This will insert 'Feb' at index position '1'

// console.log(months); // Returns ["Jan", "Feb", "March", "April", "June"]


// months.splice(4, 1, 'May'); // Replaces 'June' with 'May' at index position '4'

// console.log(months); // Returns ["Jan", "Feb", "March", "April", "May"]


//---------------------------------------------------------------------------------------------------------------------//
// Loops Challenges - Completed.
//---------------------------------------------------------------------------------------------------------------------//

// Activity 1 - Create a function for a sub sandwich order: 5 toppings - Completed.


// const subSandwichOrder = (topping1, topping2, topping3, topping4, topping5) => {
//     console.log("Sub sandwich with: " + topping1, topping2, topping3, topping4 + " and " + topping5 + ". ");
// }
// subSandwichOrder ("Chicken,", "Cucumber,", "Tomato,", "Bacon", "Lettuce");

//----------------------------------------------------------------------------------------------------------------------------//

// Jay's weird ass sandwich

// const subButtehMate = (topping1, topping2, topping3, topping4) => {
//     console.log("Ere'z ur butteh fam, it az " + topping1, topping2, "n " + topping3 + " on it wiv a side ov " + topping4 + " on it bro")
// }

// subButtehMate ("spag bol,", "rowntree's fruit pastelz", "marmalade", "dissappointment");

//----------------------------------------------------------------------------------------------------------------------------//

// Activity 2 - Create an array with 3 values and then add another to the start of the array using a method. Completed.

// let values = [2, 3, 4];
// console.log(values);

// values.unshift(1);
// console.log(values);

//----------------------------------------------------------------------------------------------------------------------------//
// Objects Challenges - Completed.
//---------------------------------------------------------------------------------------------------------------------//

// Activity: Let’s create an alarm. Completed.

// Create a key called weekendAlarm, with a value saying “no alarm needed”, and a key called weekdayAlarm, with a value saying “get up at 7am”. Create a variable called day and one called alarm. If day is Saturday or Sunday, set alarm to weekendAlarm. If the day is a weekday, set alarm to weekdayAlarm

// let alarmTypes = {
//     weekendAlarm: "No alarm needed.",
//     weekdayAlarm: "Get up at 7am."
// };

// let daysOfWeekend = {
//     day1: "Saturday",
//     day2: "Sunday"
// };

// let day = "Tuesday"; // Returns Get up at 7am.
// let day = "Saturday"; // Returns No alarm needed.


// if (day == daysOfWeekend.day1 || day == daysOfWeekend.day2) {
//     console.log(alarmTypes.weekendAlarm);
// } else {
//     console.log(alarmTypes.weekdayAlarm);
// };

//----------------------------------------------------------------------------------------------------------------------------//