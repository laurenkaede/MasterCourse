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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            myPosts.push(post)
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("Error something went wrong");
            }
        }, 2000);
    });
}

//async and await must work together ~~~

async function init() { // Async defines a function/method and runs it line by line is sync. This is the JS default.
    await createPost({  // Waits for the code to run first before moving on to the next line of code.
        title: 'Post Three',
        body: 'this is the post three body'
    });
    getPosts();
}
init();