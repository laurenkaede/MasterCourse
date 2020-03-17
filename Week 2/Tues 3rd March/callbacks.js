// Higher order function - when you call a function and you pass another function as a parameter.

// Example 1 - Slide 34/41 JS Scope

// let whichGreeting = (timeOfDay) => {
//     console.log(`Good ${timeOfDay}`);
// }

// let greet = (time, fn) => {
//     if (time < 1200){
//         fn ("Morning");
//     } else if (time >= 1200 && time < 1800){
//         fn ("Afternoon");
//     } else {
//         fn ("Evening");
//     }
// }

//     greet (1400, whichGreeting); // Returns good afternoon.
//     greet (2000, whichGreeting); // Returns good evening.
//     greet (1000, whichGreeting); // Returns good morning.
//     greet (2500, whichGreeting); // Returns good evening.

// fn is representing whichGreeting function.

// Set Timeout Example - Slide 9/29 JS Callbacks.

// setTimeout ( () => {
//     console.log ("Inside the setTimeout function.")
// }, 5000); // Delays code running by 5 seconds. JS works with milliseconds, so 5000 milliseconds = 5 seconds.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// First value of the array below is an object.

// const myPosts = [
//     {title: 'Post One', body: 'This is post one body'}, // This is an object.
//     {title: 'Post two', body: 'This is post two body'} // This is also an object.
//     ];

// function getPosts() {
//     console.log(myPosts); // Runs the full array containing both objects (post one and post two).
//     // console.log(myPosts[0].body); // Runs the 'body' of object one.
// }

// function createPost(post) {
//     myPosts.push(post);
// }

// getPosts(); // Output: two posts
// createPost({title: 'Post Three', body: 'This is the post three body'});
// getPosts(); //Output: three posts

// .push only works on arrays and adds an object to the list.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// .forEach only runs on arrays (it's a loop for arrays).

// const myPosts = [
//     {title: 'Post One', body: 'This is post one body'}, 
//     {title: 'Post Two', body: 'This is post two body'} 
//     ];

// function getPosts() {
//     setTimeout( () => {
//         myPosts.forEach( (post) => {
//             console.log(post.title);
//         })
//         console.log(myPosts);
//     }, 1000);
// }

// function createPost(post) {
//     setTimeout( () => {
//         myPosts.push(post);
//     }, 2000);
// }

// getPosts(); 
// createPost({title: 'Post Three', body: 'This is the post three body'}); //this runs after 2 secs
// getPosts(); //this runs after 1 sec

// If the createPost takes longer to run than the getPosts function, then Post three will not be added to the array. 
// If both functions take the same time to run, then Post three will be added to the array.
// If the getPosts function takes longer to run than the createPost function, then Post three will be added to the array.


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// Callbacks


const myPosts = [{
        title: 'Post One',
        body: 'This is post one body'
    },
    {
        title: 'Post Two',
        body: 'This is post two body'
    }
];

function getPosts() {
    setTimeout(() => {
        myPosts.forEach((post) => {
            console.log(post.title);
        })
        console.log(myPosts);
    }, 1000);
}

function createPost(post, callback) { // 'callback' = function 'getPosts'
    setTimeout(() => {
        myPosts.push(post);
        callback();
    }, 5000);
}

createPost({
    title: 'Post Three',
    body: 'This is the post three body'
}, getPosts); // 'callback' = function 'getPosts'