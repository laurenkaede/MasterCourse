/* React and Node require promises or async/await. Choose either promises or async/await but not both.   */

/* A promise is an agreement. 
Promises take two parameters - revolve and reject
  */

const myPosts = [{
        title: 'Post One',
        body: 'This is post one body'
    },
    {
        title: 'Post two',
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

function createPost(post) {
    return new Promise((resolve, reject) => {  // Promise function takes two parameters - resolve and reject.
        setTimeout(() => {
            myPosts.push(post);

            const error = false; // 'error' is a variable. False will return all posts, true will return error message.
            
            if (!error) { // if 'no' error, 'error' is false.
                resolve(); // will return all posts.
            } else {
                reject("Error, something went wrong."); // will return error message.
            }
        }, 2000);
    });
}

createPost({
    title: 'Post Three',
    body: 'this is the post three body'
}).then(getPosts) // .then grabs all posts.
.catch((e) => { // .catch function logs the error message of there's an error.

    console.log(errorMessage);
});